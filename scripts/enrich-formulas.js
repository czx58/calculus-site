const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const formulasDir = path.join(process.cwd(), "content", "formulas");
const progressFile = path.join(process.cwd(), "scripts", "enrich-progress.json");

require("dotenv").config({ path: ".env.local" });

const API_KEY = process.env.DEEPSEEK_API_KEY;
if (!API_KEY) {
  console.error("Missing DEEPSEEK_API_KEY in .env.local");
  process.exit(1);
}

const progress = fs.existsSync(progressFile)
  ? JSON.parse(fs.readFileSync(progressFile, "utf8"))
  : {};

const files = fs
  .readdirSync(formulasDir)
  .filter((f) => f.endsWith(".md"))
  .sort();

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function generate(formula, retry = 0) {
  const prompt = `你是一位经验丰富的高等数学老师，正在为一本大一高等数学助学网站撰写公式说明。

请为以下公式生成中文内容：
- 公式名称：${formula.title}
- 分类：${formula.category}
- LaTeX：${formula.latex}
- 纯文本：${formula.plaintext}

要求：
1. usage：一段 Markdown 格式的使用方法说明，包含使用场景、注意事项、常见变形。可以使用行内公式 $...$ 和列表。
2. examples：1 到 2 道典型例题，每道包含 problem（题目，Markdown，可用 $...$ 和 $$...$$）和 solution（分步解答，Markdown）。

请严格按以下 JSON 格式输出，不要包含任何其他解释文字：
{
  "usage": "...",
  "examples": [
    {"problem": "...", "solution": "..."}
  ]
}`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 60000);

  let res;
  try {
    res = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          {
            role: "system",
            content:
              "你是一个高等数学教学助手，擅长用简洁清晰的语言讲解公式，给出典型例题和分步解答。请严格输出合法JSON。",
          },
          { role: "user", content: prompt },
        ],
        temperature: 0.5,
        max_tokens: 1500,
        response_format: { type: "json_object" },
      }),
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeout);
  }

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`DeepSeek API error ${res.status}: ${text}`);
  }

  const data = await res.json();
  const content = data.choices?.[0]?.message?.content || "";

  const jsonMatch = content.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error(`No JSON found in response for ${formula.slug}`);
  }

  return JSON.parse(jsonMatch[0]);
}

async function main() {
  let completed = 0;
  let skipped = 0;
  let failed = 0;

  for (const file of files) {
    const filePath = path.join(formulasDir, file);
    const raw = fs.readFileSync(filePath, "utf8");
    const parsed = matter(raw);
    const formula = parsed.data;

    if (formula.usage) {
      console.log(`[SKIP] ${formula.slug} already has usage`);
      skipped++;
      continue;
    }

    if (progress[formula.slug]) {
      console.log(`[RESTORE] ${formula.slug}`);
      parsed.data.usage = progress[formula.slug].usage;
      parsed.data.examples = progress[formula.slug].examples;
      fs.writeFileSync(
        filePath,
        matter.stringify(parsed.content, parsed.data)
      );
      completed++;
      continue;
    }

    console.log(`[GEN] ${formula.slug}`);
    let success = false;
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const result = await generate(formula, attempt);
        parsed.data.usage = result.usage;
        parsed.data.examples = result.examples;

        progress[formula.slug] = {
          usage: result.usage,
          examples: result.examples,
        };
        fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2));

        fs.writeFileSync(
          filePath,
          matter.stringify(parsed.content, parsed.data)
        );
        completed++;
        success = true;
        break;
      } catch (err) {
        console.error(`[FAIL attempt ${attempt + 1}] ${formula.slug}: ${err.message}`);
        await sleep(3000 * (attempt + 1));
      }
    }
    if (!success) {
      failed++;
    }

    await sleep(500);
  }

  console.log(`\nDone: ${completed} generated, ${skipped} skipped, ${failed} failed`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
