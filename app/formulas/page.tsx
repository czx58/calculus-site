import Navbar from "@/components/Navbar";
import ChatWidget from "@/components/ChatWidget";
import FormulaList from "@/components/FormulaList";
import { getFormulas } from "@/lib/content";

export default function FormulasPage() {
  const formulas = getFormulas();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl flex-1 px-4 py-10">
        <h1 className="text-3xl font-semibold">全局公式表</h1>
        <p className="mt-2 text-neutral-600">
          按分类浏览或搜索，点击“纯文本”可切换为可复制的公式文本。
        </p>
        <div className="mt-8">
          <FormulaList formulas={formulas} />
        </div>
      </main>
      <ChatWidget />
    </>
  );
}
