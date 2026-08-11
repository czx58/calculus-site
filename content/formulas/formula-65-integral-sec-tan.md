---
title: 积分 sec tan
slug: integral-sec-tan
category: 积分
latex: '\int \sec x \tan x \, dx = \sec x + C'
plaintext: int sec x tan x dx = sec x + C
relatedTopicSlugs:
  - indefinite-integral
usage: >-
  该公式用于求解含有 $\sec x \tan x$
  的积分，是基本积分公式之一。它常用于三角函数的积分计算，特别是在处理正割和正切函数乘积时。**使用场景**：当被积函数为 $\sec x \tan x$
  或其常数倍时，可直接应用此公式。**注意事项**：该公式的逆运算是求导，即 $(\sec x)' = \sec x \tan
  x$，因此积分结果正确。**常见变形**：若积分中含有常数系数，如 $\int k \sec x \tan x \, dx = k \sec x +
  C$；若变量不是 $x$，如 $\int \sec(ax+b) \tan(ax+b) \, dx = \frac{1}{a} \sec(ax+b) +
  C$。
examples:
  - problem: '求不定积分 $\int 3 \sec x \tan x \, dx$。'
    solution: >-
      **解**：直接利用公式 $\int \sec x \tan x \, dx = \sec x + C$，将常数因子 3 提出，得到 $3 \int
      \sec x \tan x \, dx = 3 \sec x + C$。因此，$\int 3 \sec x \tan x \, dx = 3
      \sec x + C$。
  - problem: '求不定积分 $\int \sec(2x) \tan(2x) \, dx$。'
    solution: >-
      **解**：令 $u = 2x$，则 $du = 2\, dx$，即 $dx = \frac{1}{2} du$。代入原积分得 $\int \sec
      u \tan u \cdot \frac{1}{2} \, du = \frac{1}{2} \int \sec u \tan u \,
      du$。由基本公式，$\int \sec u \tan u \, du = \sec u + C$，所以原积分等于 $\frac{1}{2}
      \sec(2x) + C$。
---

