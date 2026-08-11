---
title: 第二个重要极限
slug: important-limit-2
category: 极限
latex: '\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e'
plaintext: lim(x->∞) (1+1/x)^x = e
relatedTopicSlugs:
  - limit-laws
usage: >-
  **第二个重要极限** 是高等数学中求极限的核心工具之一，其标准形式为 $\lim_{x \to \infty} \left(1 +
  \frac{1}{x}\right)^x = e$，也可写作 $\lim_{t \to 0} (1+t)^{1/t} = e$。


  **使用场景**：

  - 当极限表达式中出现形如 $(1+\frac{1}{x})^x$ 或 $(1+t)^{1/t}$ 的结构时，可直接套用。

  - 更一般地，若 $\lim f(x) = \infty$ 且 $\lim g(x) = 0$，且 $g(x) \cdot f(x) \to 1$，则
  $\lim [1+g(x)]^{f(x)} = e$。


  **注意事项**：

  - 底数必须趋近于 1（即括号内为 $1+\text{无穷小}$），指数必须趋近于无穷大，且无穷小与无穷大的乘积趋于 1。

  - 若指数与无穷小的乘积不趋于 1，则不能直接使用，需通过变形或取对数处理。


  **常见变形**：

  - $\lim_{x \to 0} (1+x)^{1/x} = e$

  - $\lim_{x \to \infty} \left(1 + \frac{a}{x}\right)^{bx} = e^{ab}$

  - 通过凑形式：例如 $\lim_{x \to \infty} \left(\frac{x+1}{x-1}\right)^x$ 先变形为
  $\left(1+\frac{2}{x-1}\right)^x$ 再处理。
examples:
  - problem: '求极限 $\lim_{x \to \infty} \left(1 + \frac{2}{x}\right)^{3x}$。'
    solution: >-
      **解**：

      1. 观察结构：底数为 $1+\frac{2}{x}$，指数为 $3x$，当 $x \to \infty$ 时，$\frac{2}{x} \to
      0$，指数 $3x \to \infty$。

      2. 将原式改写为 $\left[\left(1+\frac{2}{x}\right)^{x/2}\right]^{6}$，但更直接的方法是令 $t
      = \frac{2}{x}$，则 $x = \frac{2}{t}$，当 $x \to \infty$ 时 $t \to 0$。

      3. 原式变为 $\lim_{t \to 0} (1+t)^{6/t} = \left[\lim_{t \to 0}
      (1+t)^{1/t}\right]^6 = e^6$。


      因此，原极限为 $e^6$。
  - problem: '求极限 $\lim_{x \to 0} (1+3x)^{1/(2x)}$。'
    solution: >-
      **解**：

      1. 这是 $1^\infty$ 型未定式，尝试凑第二个重要极限。

      2. 令 $t = 3x$，则 $x = t/3$，当 $x \to 0$ 时 $t \to 0$。

      3. 原式变为 $\lim_{t \to 0} (1+t)^{1/(2 \cdot t/3)} = \lim_{t \to 0}
      (1+t)^{3/(2t)} = \left[\lim_{t \to 0} (1+t)^{1/t}\right]^{3/2} = e^{3/2}$。


      因此，原极限为 $e^{3/2}$。
---

