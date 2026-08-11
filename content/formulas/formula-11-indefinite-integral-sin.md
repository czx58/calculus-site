---
title: 正弦函数的不定积分
slug: indefinite-integral-sin
category: 积分
latex: '\int \sin x \, dx = -\cos x + C'
plaintext: int sin x dx = -cos x + C
relatedTopicSlugs:
  - indefinite-integral
usage: >-
  正弦函数的不定积分公式为 $\int \sin x \, dx = -\cos x + C$，其中 $C$
  为任意常数。它用于计算含正弦函数的积分，是积分学中的基本公式之一。**使用场景**：当被积函数为 $\sin x$ 或可化为 $\sin x$ 的形式（如
  $\sin(ax+b)$）时，可直接套用；也常用于分部积分、换元积分等复杂积分的中间步骤。**注意事项**：① 积分结果必须加上常数
  $C$，因为导数相同的原函数有无穷多个；② 若自变量不是 $x$，例如 $\int \sin(2x) \, dx$，需使用换元法（令 $u=2x$），结果为
  $-\frac{1}{2}\cos(2x)+C$；③ 与导数公式相反，$\frac{d}{dx}(-\cos x)=\sin
  x$，可用来验证结果。**常见变形**：$\int \sin(ax+b)\,dx = -\frac{1}{a}\cos(ax+b)+C$（$a\neq
  0$）；$\int \sin^2 x \, dx$ 需先用降幂公式 $\sin^2 x = \frac{1-\cos 2x}{2}$ 转化后再积分。
examples:
  - problem: '求不定积分 $\int \sin(3x) \, dx$。'
    solution: >-
      **解**：令 $u=3x$，则 $du=3dx$，即 $dx=\frac{1}{3}du$。代入得：

      $$\int \sin(3x) \, dx = \int \sin u \cdot \frac{1}{3} du = \frac{1}{3}
      \int \sin u \, du = \frac{1}{3}(-\cos u) + C = -\frac{1}{3}\cos(3x) + C.$$

      因此，$\int \sin(3x) \, dx = -\frac{1}{3}\cos(3x) + C$。
  - problem: '求不定积分 $\int \sin^2 x \, dx$。'
    solution: >-
      **解**：利用三角恒等式 $\sin^2 x = \frac{1-\cos(2x)}{2}$，原积分化为：

      $$\int \sin^2 x \, dx = \int \frac{1-\cos(2x)}{2} \, dx = \frac{1}{2} \int
      1 \, dx - \frac{1}{2} \int \cos(2x) \, dx.$$

      其中 $\int 1 \, dx = x + C_1$，而 $\int \cos(2x) \, dx = \frac{1}{2}\sin(2x) +
      C_2$（由换元法可得）。因此：

      $$\int \sin^2 x \, dx = \frac{1}{2}x - \frac{1}{2} \cdot
      \frac{1}{2}\sin(2x) + C = \frac{x}{2} - \frac{\sin(2x)}{4} + C.$$

      所以，$\int \sin^2 x \, dx = \frac{x}{2} - \frac{\sin(2x)}{4} + C$。
---

