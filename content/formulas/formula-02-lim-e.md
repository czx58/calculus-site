---
title: 重要极限 2
slug: lim-definition-e
category: 极限
latex: '\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e'
plaintext: lim(x->inf) (1 + 1/x)^x = e
relatedTopicSlugs:
  - limit-laws
usage: >-
  **重要极限 2**：$\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e$，其中 $e
  \approx 2.71828$。


  **使用场景**：

  - 当极限式中出现底数为 $1 + \frac{1}{x}$、指数为 $x$ 的形式，且 $x \to \infty$ 时，直接使用该极限。

  - 常用于处理 $1^\infty$ 型未定式，例如 $\lim_{x \to \infty} \left(1 +
  \frac{a}{x}\right)^{bx}$ 等变形。


  **注意事项**：

  - 必须确保底数部分趋于 1，指数部分趋于无穷大，否则不能直接套用。

  - 若底数为 $1 + \frac{k}{x}$（$k$ 为常数），则极限为 $e^k$，即 $\lim_{x \to \infty} \left(1 +
  \frac{k}{x}\right)^x = e^k$。

  - 该极限的等价形式：令 $t = \frac{1}{x}$，则 $t \to 0$，得 $\lim_{t \to 0} (1+t)^{1/t} = e$。


  **常见变形**：

  - $\lim_{x \to \infty} \left(1 + \frac{a}{x}\right)^{bx} = e^{ab}$（$a, b$
  为常数）。

  - $\lim_{x \to 0} (1 + ax)^{1/x} = e^a$。

  - 遇到 $\left(1 + \frac{1}{f(x)}\right)^{f(x)}$ 时，若 $f(x) \to \infty$，则极限为 $e$。
examples:
  - problem: '求极限 $\lim_{x \to \infty} \left(1 + \frac{2}{x}\right)^{3x}$。'
    solution: >-
      令 $t = \frac{x}{2}$，则当 $x \to \infty$ 时，$t \to \infty$，且 $x = 2t$。原式化为
      $\lim_{t \to \infty} \left(1 + \frac{1}{t}\right)^{6t} = \left[ \lim_{t
      \to \infty} \left(1 + \frac{1}{t}\right)^t \right]^6 = e^6$。


      **另解**：直接利用变形公式 $\lim_{x \to \infty} \left(1 + \frac{a}{x}\right)^{bx} =
      e^{ab}$，其中 $a=2, b=3$，得极限为 $e^{6}$。
  - problem: '求极限 $\lim_{x \to 0} (1 + 3x)^{1/x}$。'
    solution: >-
      令 $t = 3x$，则当 $x \to 0$ 时，$t \to 0$，且 $x = t/3$。原式化为 $\lim_{t \to 0}
      (1+t)^{3/t} = \left[ \lim_{t \to 0} (1+t)^{1/t} \right]^3 = e^3$。


      **另解**：利用等价形式 $\lim_{x \to 0} (1 + ax)^{1/x} = e^a$，取 $a=3$，得极限为 $e^3$。
---

