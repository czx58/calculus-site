---
title: 积分 cos
slug: integral-cos
category: 积分
latex: '\int \cos x \, dx = \sin x + C'
plaintext: int cos x dx = sin x + C
relatedTopicSlugs:
  - indefinite-integral
usage: >-
  该公式用于计算余弦函数的积分，是积分学中的基本公式之一。使用场景包括求解涉及余弦函数的定积分、不定积分，以及在物理、工程问题中处理周期性变化量。注意事项：积分常数
  $C$ 不可遗漏；当被积函数为 $\cos(ax+b)$ 时，需使用换元法，结果为 $\frac{1}{a}\sin(ax+b)+C$。常见变形：$\int
  \cos(kx)\,dx = \frac{1}{k}\sin(kx)+C$；利用三角恒等式可将 $\cos^2 x$ 降幂后积分。
examples:
  - problem: '求不定积分 $\int \cos(3x+2)\,dx$。'
    solution: >-
      令 $u=3x+2$，则 $du=3\,dx$，即 $dx=\frac{1}{3}du$。代入得：

      $$

      \int \cos(3x+2)\,dx = \int \cos u \cdot \frac{1}{3}\,du = \frac{1}{3}\sin
      u + C = \frac{1}{3}\sin(3x+2) + C.

      $$
  - problem: '计算定积分 $\int_0^{\pi/2} \cos x\,dx$。'
    solution: >-
      先求原函数：$\int \cos x\,dx = \sin x + C$。

      利用牛顿-莱布尼茨公式：

      $$

      \int_0^{\pi/2} \cos x\,dx = \left[ \sin x \right]_0^{\pi/2} =
      \sin\frac{\pi}{2} - \sin 0 = 1 - 0 = 1.

      $$
---

