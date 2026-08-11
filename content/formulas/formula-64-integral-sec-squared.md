---
title: 积分 sec²
slug: integral-sec-squared
category: 积分
latex: '\int \sec^2 x \, dx = \tan x + C'
plaintext: int sec^2 x dx = tan x + C
relatedTopicSlugs:
  - indefinite-integral
usage: >-
  该公式用于求解 $\sec^2 x$
  的不定积分，是基本积分公式之一。它常用于三角函数的积分、微分方程求解以及物理中的运动学问题。使用时需注意：$\sec^2 x$ 的定义域为 $x \neq
  \frac{\pi}{2} + k\pi$（$k$ 为整数），积分结果中的 $\tan x$ 在这些点无定义，因此原函数仅在定义域区间内有效。常见变形包括：

  - 利用恒等式 $\sec^2 x = 1 + \tan^2 x$ 进行替换；

  - 结合换元法，如令 $u = \tan x$，则 $du = \sec^2 x \, dx$，从而 $\int \sec^2 x \, dx = \int
  du = u + C = \tan x + C$；

  - 在定积分中，可直接应用牛顿-莱布尼茨公式，但需确保积分区间不包含间断点。
examples:
  - problem: '求不定积分 $\int \sec^2 (3x) \, dx$。'
    solution: >-
      令 $u = 3x$，则 $du = 3 \, dx$，即 $dx = \frac{1}{3} du$。


      原积分变为：

      $$\int \sec^2 u \cdot \frac{1}{3} \, du = \frac{1}{3} \int \sec^2 u \, du
      = \frac{1}{3} \tan u + C$$


      代回 $u = 3x$，得：

      $$\int \sec^2 (3x) \, dx = \frac{1}{3} \tan (3x) + C$$
  - problem: '计算定积分 $\int_{0}^{\pi/4} \sec^2 x \, dx$。'
    solution: >-
      直接应用公式：

      $$\int_{0}^{\pi/4} \sec^2 x \, dx = \left[ \tan x \right]_{0}^{\pi/4} =
      \tan\left(\frac{\pi}{4}\right) - \tan(0) = 1 - 0 = 1$$
---

