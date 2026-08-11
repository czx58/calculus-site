---
title: 等价无穷小 sin
slug: equivalent-infinitesimal-sin
category: 极限
latex: \sin x \sim x \quad (x \to 0)
plaintext: sin x ~ x (x -> 0)
relatedTopicSlugs:
  - function-limits
usage: >-
  等价无穷小替换是极限计算中的常用技巧。当 $x \to 0$ 时，$\sin x$ 与 $x$ 是等价无穷小，即 $\sin x \sim
  x$。这意味着在乘除运算中，可以将 $\sin x$ 替换为 $x$，以简化极限表达式。


  **使用场景**：

  - 求极限时，若表达式中含有 $\sin x$ 且 $x \to 0$，可考虑替换。

  - 常用于 $\frac{\sin x}{x}$ 型极限，或与其他无穷小量相乘除的情形。


  **注意事项**：

  - 等价无穷小替换仅适用于乘除运算，不适用于加减运算。例如，$\sin x - x$ 不能直接替换为 $x - x = 0$。

  - 替换时需确保 $x$ 确实趋于 0，且替换后的表达式有意义。


  **常见变形**：

  - $\sin 2x \sim 2x$（当 $x \to 0$）

  - $\sin (x^2) \sim x^2$（当 $x \to 0$）

  - 对于 $\sin f(x)$，当 $f(x) \to 0$ 时，$\sin f(x) \sim f(x)$。
examples:
  - problem: '求极限 $\lim_{x \to 0} \frac{\sin 3x}{x}$。'
    solution: |-
      当 $x \to 0$ 时，$\sin 3x \sim 3x$，因此
      $$
      \lim_{x \to 0} \frac{\sin 3x}{x} = \lim_{x \to 0} \frac{3x}{x} = 3.
      $$
      所以极限值为 $3$。
  - problem: '求极限 $\lim_{x \to 0} \frac{\sin x}{x^2 + x}$。'
    solution: >-
      当 $x \to 0$ 时，$\sin x \sim x$，且分母 $x^2 + x = x(x+1)$，因此

      $$

      \lim_{x \to 0} \frac{\sin x}{x^2 + x} = \lim_{x \to 0} \frac{x}{x(x+1)} =
      \lim_{x \to 0} \frac{1}{x+1} = 1.

      $$

      所以极限值为 $1$。
---

