---
title: 分部积分公式
slug: integration-by-parts
category: 积分
latex: '\int u \, dv = uv - \int v \, du'
plaintext: int u dv = uv - int v du
relatedTopicSlugs:
  - indefinite-integral
usage: >-
  分部积分公式是求解积分的重要方法，适用于被积函数为两个不同类型函数乘积的情形。其核心思想是将不易直接积分的积分转化为另一个可能更易求解的积分。


  **公式**：若 $u=u(x)$，$v=v(x)$ 具有连续导数，则

  $$

  \int u \, dv = uv - \int v \, du

  $$

  或写成

  $$

  \int u v' \, dx = uv - \int u' v \, dx

  $$


  **使用场景**：

  - 被积函数为多项式与指数函数、三角函数、对数函数等的乘积，如 $\int x e^x dx$，$\int x \cos x dx$，$\int \ln x
  dx$。

  - 被积函数为指数函数与三角函数的乘积，如 $\int e^x \sin x dx$，此时可能需要多次分部积分并解方程。

  - 被积函数为反三角函数或对数函数，如 $\int \arctan x dx$，$\int \ln x dx$。


  **注意事项**：

  - 选择 $u$ 和 $dv$ 时，通常遵循“反对幂指三”或“LIATE”原则，即优先选择对数函数、反三角函数、多项式、指数函数、三角函数作为
  $u$，其余部分作为 $dv$。

  - 分部积分后，新的积分 $\int v \, du$ 应比原积分更简单，否则需重新选择。

  - 有时需要多次使用分部积分，或结合换元法。


  **常见变形**：

  - 对于定积分，有 $\int_a^b u \, dv = [uv]_a^b - \int_a^b v \, du$。

  - 当积分中出现循环时，如 $\int e^x \sin x dx$，可设原积分为 $I$，两次分部积分后得到关于 $I$ 的方程，解出 $I$。
examples:
  - problem: '求不定积分 $\int x e^x \, dx$。'
    solution: >-
      **解**：


      令 $u = x$，$dv = e^x \, dx$，则 $du = dx$，$v = e^x$。


      由分部积分公式：

      $$

      \int x e^x \, dx = x e^x - \int e^x \, dx = x e^x - e^x + C = e^x (x - 1)
      + C

      $$


      所以 $\int x e^x \, dx = e^x (x - 1) + C$。
  - problem: '求不定积分 $\int \ln x \, dx$。'
    solution: >-
      **解**：


      令 $u = \ln x$，$dv = dx$，则 $du = \frac{1}{x} dx$，$v = x$。


      由分部积分公式：

      $$

      \int \ln x \, dx = x \ln x - \int x \cdot \frac{1}{x} \, dx = x \ln x -
      \int 1 \, dx = x \ln x - x + C

      $$


      所以 $\int \ln x \, dx = x \ln x - x + C$。
---

