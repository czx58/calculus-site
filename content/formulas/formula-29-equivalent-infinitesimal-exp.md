---
title: 等价无穷小 e^x
slug: equivalent-infinitesimal-exp
category: 极限
latex: e^x - 1 \sim x \quad (x \to 0)
plaintext: e^x - 1 ~ x (x -> 0)
relatedTopicSlugs:
  - function-limits
usage: >-
  等价无穷小公式 $e^x - 1 \sim x$（当 $x \to 0$）是极限计算中的常用工具，主要用于处理含有指数函数 $e^x$
  与多项式或分式混合的极限问题。


  **使用场景**：

  - 当极限表达式中出现 $e^x - 1$ 且 $x$ 趋于 $0$ 时，可将其替换为 $x$，从而简化计算。

  - 常见于 $\frac{e^x - 1}{x}$ 型、$\frac{e^{x}-1}{\sin x}$ 型等未定式极限。


  **注意事项**：

  - 该公式仅在 $x \to 0$ 时成立，且要求整个因子 $e^x - 1$
  作为乘除因子，不能用于加减项中的单独替换（除非满足加减替换的严格条件，如因子提取后仍为乘除）。

  - 若 $x$ 是复合变量，如 $u \to 0$ 时，$e^u - 1 \sim u$，需确保 $u$ 趋于 $0$。


  **常见变形**：

  - $e^{\sin x} - 1 \sim \sin x$（当 $x \to 0$）

  - $e^{x^2} - 1 \sim x^2$（当 $x \to 0$）

  - 结合其他等价无穷小：$e^x - 1 \sim x \sim \ln(1+x) \sim \sin x$ 等。
examples:
  - problem: '求极限 $\lim\limits_{x \to 0} \frac{e^x - 1}{\sin x}$。'
    solution: >-
      **解**：当 $x \to 0$ 时，由等价无穷小，$e^x - 1 \sim x$，$\sin x \sim x$。于是

      \[

      \lim\limits_{x \to 0} \frac{e^x - 1}{\sin x} = \lim\limits_{x \to 0}
      \frac{x}{x} = 1.

      \]

      因此，极限值为 $1$。
  - problem: '求极限 $\lim\limits_{x \to 0} \frac{e^{2x} - 1}{\ln(1+x)}$。'
    solution: >-
      **解**：当 $x \to 0$ 时，$2x \to 0$，所以 $e^{2x} - 1 \sim 2x$；同时 $\ln(1+x) \sim
      x$。因此

      \[

      \lim\limits_{x \to 0} \frac{e^{2x} - 1}{\ln(1+x)} = \lim\limits_{x \to 0}
      \frac{2x}{x} = 2.

      \]

      所以极限值为 $2$。
---

