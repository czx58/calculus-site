---
title: 极限减法法则
slug: limit-difference-rule
category: 极限
latex: '\lim_{x \to a} [f(x) - g(x)] = \lim_{x \to a} f(x) - \lim_{x \to a} g(x)'
plaintext: 'lim(x->a)[f(x)-g(x)] = lim f(x) - lim g(x)'
relatedTopicSlugs:
  - limit-laws
usage: >-
  **极限减法法则**指出，若两个函数 $f(x)$ 和 $g(x)$ 在 $x \to a$ 时极限均存在，则它们差的极限等于各自极限的差，即

  $$\lim_{x \to a} [f(x) - g(x)] = \lim_{x \to a} f(x) - \lim_{x \to a} g(x).$$


  **使用场景**：

  - 当需要计算两个函数之差的极限，且每个函数的极限容易单独求出时，可直接拆分。

  - 常用于多项式、有理函数、根式等组合函数的极限计算。


  **注意事项**：

  - 前提是 $\lim_{x \to a} f(x)$ 和 $\lim_{x \to a} g(x)$
  都必须存在（即有限值）。若其中一个极限不存在或为无穷大，则不能直接套用此法则。

  - 该法则可推广到有限个函数的差，但不能推广到无穷项。


  **常见变形**：

  - 与加法法则结合：$\lim[f(x) \pm g(x)] = \lim f(x) \pm \lim g(x)$。

  - 若 $\lim g(x)$ 存在，则 $\lim[f(x) - g(x)]$ 存在当且仅当 $\lim f(x)$ 存在。

  - 可用于化简“$\infty - \infty$”型未定式，但需先通过代数变形（如通分、有理化）转化为可求极限的形式。
examples:
  - problem: '计算极限 $\lim_{x \to 2} (x^2 - 3x)$。'
    solution: |-
      **解**：
      1. 分别求两个函数的极限：
         $$\lim_{x \to 2} x^2 = 4, \quad \lim_{x \to 2} 3x = 6.$$
      2. 根据减法法则，
         $$\lim_{x \to 2} (x^2 - 3x) = \lim_{x \to 2} x^2 - \lim_{x \to 2} 3x = 4 - 6 = -2.$$
      3. 因此，原极限为 $-2$。
  - problem: '求极限 $\lim_{x \to 0} \left( \frac{\sin x}{x} - \cos x \right)$。'
    solution: |-
      **解**：
      1. 已知两个基本极限：
         $$\lim_{x \to 0} \frac{\sin x}{x} = 1, \quad \lim_{x \to 0} \cos x = 1.$$
      2. 两个极限均存在，应用减法法则：
         $$\lim_{x \to 0} \left( \frac{\sin x}{x} - \cos x \right) = 1 - 1 = 0.$$
      3. 所以极限值为 $0$。
---

