---
title: 等价无穷小 ln
slug: equivalent-infinitesimal-ln
category: 极限
latex: \ln(1 + x) \sim x \quad (x \to 0)
plaintext: ln(1+x) ~ x (x -> 0)
relatedTopicSlugs:
  - function-limits
usage: >-
  等价无穷小替换是极限计算中的常用技巧。当 $x \to 0$ 时，$\ln(1+x)$ 与 $x$ 是等价无穷小，即 $\ln(1+x) \sim
  x$。这意味着在求极限时，若分子或分母中出现 $\ln(1+x)$ 且 $x \to 0$，可以将其替换为 $x$，从而简化计算。


  **使用场景**：

  - 当极限表达式中含有 $\ln(1+x)$，且 $x \to 0$ 时。

  - 常用于处理 $0/0$ 型未定式极限。


  **注意事项**：

  - 替换时要注意整体替换，即 $\ln(1+u) \sim u$ 当 $u \to 0$，其中 $u$ 可以是 $x$ 的函数。

  - 替换只能在乘除运算中进行，不能在加减运算中直接替换，除非能保证替换后的项不为零且不影响主导项。

  - 该等价关系仅当 $x \to 0$ 时成立，其他极限过程不适用。


  **常见变形**：

  - $\ln(1+x) \sim x$，$\ln(1-x) \sim -x$（当 $x \to 0$）。

  - $\ln(1+x) - x \sim -\frac{x^2}{2}$（更高阶的等价无穷小，可用于更精确的计算）。
examples:
  - problem: '求极限 $\lim_{x \to 0} \frac{\ln(1+x)}{x}$。'
    solution: |-
      **解**：

      当 $x \to 0$ 时，$\ln(1+x) \sim x$，因此

      $$
      \lim_{x \to 0} \frac{\ln(1+x)}{x} = \lim_{x \to 0} \frac{x}{x} = 1.
      $$

      所以极限值为 $1$。
  - problem: '求极限 $\lim_{x \to 0} \frac{\ln(1+2x)}{\sin 3x}$。'
    solution: >-
      **解**：


      当 $x \to 0$ 时，$\ln(1+2x) \sim 2x$，$\sin 3x \sim 3x$（因为 $\sin u \sim u$ 当
      $u \to 0$）。


      因此


      $$

      \lim_{x \to 0} \frac{\ln(1+2x)}{\sin 3x} = \lim_{x \to 0} \frac{2x}{3x} =
      \frac{2}{3}.

      $$


      所以极限值为 $\frac{2}{3}$。
---

