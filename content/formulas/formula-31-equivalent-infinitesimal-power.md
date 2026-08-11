---
title: 等价无穷小幂
slug: equivalent-infinitesimal-power
category: 极限
latex: (1 + x)^\alpha - 1 \sim \alpha x \quad (x \to 0)
plaintext: (1+x)^alpha - 1 ~ alpha x (x -> 0)
relatedTopicSlugs:
  - function-limits
usage: >-
  等价无穷小幂公式：$(1+x)^\alpha - 1 \sim \alpha x$（当 $x \to 0$）。


  **使用场景**：

  - 求极限时，若遇到形如 $(1+x)^\alpha - 1$ 的因子，且 $x$ 趋于 0，可将其替换为 $\alpha x$，从而简化计算。

  - 特别适用于 $\alpha$ 为任意实数（包括分数、负数）的情况。


  **注意事项**：

  - 必须满足 $x \to 0$，且 $x$ 是无穷小量，否则不可使用。

  - 替换时要注意整体替换，即仅当 $(1+x)^\alpha - 1$ 作为乘除因子时可直接替换，若在加减法中需谨慎，避免产生误差。

  - 该公式是等价无穷小，替换后极限值不变。


  **常见变形**：

  - 令 $x = \frac{1}{n}$，则 $(1+\frac{1}{n})^\alpha - 1 \sim \frac{\alpha}{n}$（$n
  \to \infty$）。

  - 若 $x$ 是某个趋于 0 的函数 $f(x)$，则 $(1+f(x))^\alpha - 1 \sim \alpha f(x)$。

  - 特别地，当 $\alpha = 1$ 时，$(1+x) - 1 = x$，显然成立。
examples:
  - problem: '求极限 $\lim_{x \to 0} \frac{\sqrt[3]{1+x} - 1}{x}$。'
    solution: >-
      **解**：


      令 $\alpha = \frac{1}{3}$，由等价无穷小公式，当 $x \to 0$ 时，$(1+x)^{\frac{1}{3}} - 1
      \sim \frac{1}{3}x$。


      因此，原极限 = $\lim_{x \to 0} \frac{\frac{1}{3}x}{x} = \frac{1}{3}$。


      所以极限值为 $\frac{1}{3}$。
  - problem: '求极限 $\lim_{x \to 0} \frac{(1+2x)^{0.5} - 1}{\sin 3x}$。'
    solution: >-
      **解**：


      当 $x \to 0$ 时，$2x \to 0$，由等价无穷小公式，$(1+2x)^{0.5} - 1 \sim 0.5 \cdot 2x =
      x$。


      又 $\sin 3x \sim 3x$（当 $x \to 0$）。


      因此，原极限 = $\lim_{x \to 0} \frac{x}{3x} = \frac{1}{3}$。


      所以极限值为 $\frac{1}{3}$。
---

