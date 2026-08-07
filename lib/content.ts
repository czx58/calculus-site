import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export type Chapter = {
  title: string;
  slug: string;
  order: number;
  description: string;
  objectives: string[];
};

export type Topic = {
  title: string;
  slug: string;
  chapterSlug: string;
  order: number;
  summary: string;
  tags: string[];
  content: string;
};

export type Formula = {
  title: string;
  slug: string;
  category: string;
  latex: string;
  plaintext: string;
  relatedTopicSlugs: string[];
};

export type QuizQuestion = {
  id: string;
  type: "choice" | "fill";
  question: string;
  options?: string[];
  answer: string;
  explanation: string;
  topicSlug: string;
};

function readMatterFiles<T>(dirName: string): (T & { content?: string })[] {
  const dir = path.join(contentDir, dirName);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data, content } = matter(raw);
      return { ...data, content } as T & { content?: string };
    });
}

export function getChapters(): Chapter[] {
  const chapters = readMatterFiles<Chapter>("chapters");
  return chapters.sort((a, b) => a.order - b.order);
}

export function getChapterBySlug(slug: string): Chapter | undefined {
  return getChapters().find((c) => c.slug === slug);
}

export function getTopics(): Topic[] {
  const topics = readMatterFiles<Topic>("topics").map((t) => ({
    ...t,
    content: t.content || "",
  }));
  return topics.sort((a, b) => {
    if (a.chapterSlug !== b.chapterSlug) {
      const ca = getChapterBySlug(a.chapterSlug);
      const cb = getChapterBySlug(b.chapterSlug);
      return (ca?.order ?? 0) - (cb?.order ?? 0);
    }
    return a.order - b.order;
  });
}

export function getTopicsByChapter(chapterSlug: string): Topic[] {
  return getTopics().filter((t) => t.chapterSlug === chapterSlug);
}

export function getTopicBySlug(slug: string): Topic | undefined {
  return getTopics().find((t) => t.slug === slug);
}

export function getFormulas(): Formula[] {
  return readMatterFiles<Formula>("formulas").sort((a, b) =>
    a.category.localeCompare(b.category)
  );
}

export function getFormulasByTopic(topicSlug: string): Formula[] {
  return getFormulas().filter((f) => f.relatedTopicSlugs.includes(topicSlug));
}

export function getQuizzes(): QuizQuestion[] {
  const files = fs.readdirSync(path.join(contentDir, "quizzes"));
  let questions: QuizQuestion[] = [];
  for (const file of files.filter((f) => f.endsWith(".md"))) {
    const raw = fs.readFileSync(path.join(contentDir, "quizzes", file), "utf-8");
    const { data } = matter(raw);
    const qs = (data.questions || []) as Omit<QuizQuestion, "topicSlug">[];
    questions = questions.concat(
      qs.map((q) => ({ ...q, topicSlug: data.topicSlug as string }))
    );
  }
  return questions;
}

export function getQuizzesByTopic(topicSlug: string): QuizQuestion[] {
  return getQuizzes().filter((q) => q.topicSlug === topicSlug);
}

export function searchContent(query: string): { topics: Topic[]; formulas: Formula[] } {
  const q = query.toLowerCase();
  const topics = getTopics().filter(
    (t) =>
      t.title.toLowerCase().includes(q) ||
      t.summary.toLowerCase().includes(q) ||
      t.tags.some((tag) => tag.toLowerCase().includes(q))
  );
  const formulas = getFormulas().filter(
    (f) =>
      f.title.toLowerCase().includes(q) ||
      f.plaintext.toLowerCase().includes(q) ||
      f.category.toLowerCase().includes(q)
  );
  return { topics, formulas };
}
