---
title: 等价无穷小 1-cos
slug: equivalent-infinitesimal-one-minus-cos
category: 极限
latex: '1 - \cos x \sim \frac{x^2}{2} \quad (x \to 0)'
plaintext: 1 - cos x ~ x^2/2 (x -> 0)
relatedTopicSlugs:
  - function-limits
usage: >-
  等价无穷小 $1 - \cos x \sim \dfrac{x^2}{2}$（当 $x \to 0$
  时）是极限计算中非常常用的简化工具。它适用于乘除运算中，可以将 $1 - \cos x$ 替换为
  $\dfrac{x^2}{2}$，从而消除三角函数带来的复杂性。


  **使用场景**：

  - 求含有 $1 - \cos x$ 的极限，尤其是当 $x$ 趋于 0 时。

  - 在分式、乘积或幂次结构中，用于化简表达式。


  **注意事项**：

  - 仅当 $x \to 0$ 时成立，且 $x$ 是自变量（或整体趋于 0 的变量）。

  - 在加减运算中不能直接替换，除非能证明替换后不改变极限值（通常需谨慎）。

  - 替换后需检查是否满足等价无穷小的使用条件（即替换因子必须趋于 0）。


  **常见变形**：

  - $1 - \cos(kx) \sim \dfrac{(kx)^2}{2} = \dfrac{k^2 x^2}{2}$，其中 $k$ 为常数。

  - $\cos x - 1 \sim -\dfrac{x^2}{2}$。

  - 与 $\sin x \sim x$ 结合使用，例如 $\dfrac{1 - \cos x}{\sin^2 x} \to \dfrac{1}{2}$。
examples:
  - problem: '求极限 $\lim_{x \to 0} \dfrac{1 - \cos x}{x^2}$。'
    solution: >-
      **解**：

      当 $x \to 0$ 时，$1 - \cos x \sim \dfrac{x^2}{2}$，所以

      $$

      \lim_{x \to 0} \dfrac{1 - \cos x}{x^2} = \lim_{x \to 0}
      \dfrac{\frac{x^2}{2}}{x^2} = \frac{1}{2}.

      $$

      因此极限值为 $\dfrac{1}{2}$。
  - problem: '求极限 $\lim_{x \to 0} \dfrac{1 - \cos 3x}{\sin^2 x}$。'
    solution: >-
      **解**：

      当 $x \to 0$ 时，$1 - \cos 3x \sim \dfrac{(3x)^2}{2} = \dfrac{9x^2}{2}$，且
      $\sin x \sim x$，所以 $\sin^2 x \sim x^2$。

      因此

      $$

      \lim_{x \to 0} \dfrac{1 - \cos 3x}{\sin^2 x} = \lim_{x \to 0}
      \dfrac{\frac{9x^2}{2}}{x^2} = \frac{9}{2}.

      $$

      故极限值为 $\dfrac{9}{2}$。
---

