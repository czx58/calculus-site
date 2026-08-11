---
title: 极限加法法则
slug: limit-sum-rule
category: 极限
latex: '\lim_{x \to a} [f(x) + g(x)] = \lim_{x \to a} f(x) + \lim_{x \to a} g(x)'
plaintext: 'lim(x->a)[f(x)+g(x)] = lim f(x) + lim g(x)'
relatedTopicSlugs:
  - limit-laws
usage: >-
  **极限加法法则**用于计算两个函数之和的极限，前提是每个函数的极限都存在（且为有限值）。其公式为：

  $$\lim_{x \to a} [f(x) + g(x)] = \lim_{x \to a} f(x) + \lim_{x \to a} g(x)$$


  **使用场景**：

  - 当需要求两个简单函数之和的极限时，可分别求极限再相加。

  - 常用于化简复杂极限表达式，例如多项式、有理函数（分母不为零）等。


  **注意事项**：

  - 必须保证 $\lim_{x \to a} f(x)$ 和 $\lim_{x \to a} g(x)$
  **都存在**（即极限为有限实数）。若其中一个极限不存在（如无穷大）或为无穷，则不能直接使用该法则，需改用其他方法（如无穷小比较）。

  - 法则可推广到有限个函数的和，但不能直接推广到无限项之和（需考虑级数收敛性）。


  **常见变形**：

  - 结合常数倍法则：$\lim [c \cdot f(x)] = c \cdot \lim f(x)$，可用于提取常数因子。

  - 减法可视为加法：$\lim [f(x) - g(x)] = \lim f(x) - \lim g(x)$（因为减法可写成加上负函数）。

  - 若 $\lim f(x) = A$，$\lim g(x) = B$，则 $\lim [f(x) + g(x)] = A + B$，常用于直接代入求值。
examples:
  - problem: '求极限 $\lim_{x \to 2} (x^2 + 3x)$。'
    solution: |-
      **解**：
      1. 分别求两个函数的极限：
         - $\lim_{x \to 2} x^2 = 2^2 = 4$
         - $\lim_{x \to 2} 3x = 3 \cdot 2 = 6$
      2. 根据极限加法法则，原极限等于两者之和：
         $$\lim_{x \to 2} (x^2 + 3x) = 4 + 6 = 10$$
      3. 因此，答案为 $10$。
  - problem: '求极限 $\lim_{x \to 1} \left( \frac{x^2 - 1}{x-1} + \sqrt{x} \right)$。'
    solution: |-
      **解**：
      1. 注意第一项 $\frac{x^2 - 1}{x-1}$ 在 $x=1$ 处无定义，但可化简：
         $$\frac{x^2 - 1}{x-1} = \frac{(x-1)(x+1)}{x-1} = x+1 \quad (x \neq 1)$$
         因此，$\lim_{x \to 1} \frac{x^2 - 1}{x-1} = \lim_{x \to 1} (x+1) = 2$。
      2. 第二项 $\sqrt{x}$ 的极限为 $\lim_{x \to 1} \sqrt{x} = \sqrt{1} = 1$。
      3. 两个极限都存在，故由加法法则：
         $$\lim_{x \to 1} \left( \frac{x^2 - 1}{x-1} + \sqrt{x} \right) = 2 + 1 = 3$$
      4. 因此，答案为 $3$。
---

