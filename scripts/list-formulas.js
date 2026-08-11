const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const dir = path.join(process.cwd(), "content", "formulas");
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

files.forEach((file) => {
  const raw = fs.readFileSync(path.join(dir, file), "utf8");
  const { data } = matter(raw);
  console.log(`${data.category} | ${data.title} | ${data.slug}${data.usage ? " ✓" : ""}`);
});

console.log(`\nTotal: ${files.length}`);
