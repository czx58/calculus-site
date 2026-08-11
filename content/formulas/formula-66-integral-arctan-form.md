---
title: 积分 arctan 形式
slug: integral-arctan-form
category: 积分
latex: '\int \frac{1}{a^2 + x^2} \, dx = \frac{1}{a}\arctan\frac{x}{a} + C'
plaintext: int 1/(a^2+x^2) dx = (1/a) arctan(x/a) + C
relatedTopicSlugs:
  - indefinite-integral
usage: >-
  该公式用于计算形如 $\int \frac{1}{a^2+x^2} dx$ 的不定积分，其中 $a$
  为非零常数。它常用于处理分母为二次多项式且无实根的积分，例如 $\int \frac{1}{x^2+4} dx$。使用时需注意：$a$ 必须非零，且公式中的
  $a$ 是正数，因为 $a^2$ 总是非负，但通常取 $a>0$ 以简化。常见变形包括：当 $a=1$ 时，$\int \frac{1}{1+x^2} dx
  = \arctan x + C$；当分子为常数时，可直接套用；若分母为 $a^2 + (x+b)^2$，可通过换元 $u=x+b$
  转化为标准形式。此外，该公式也可用于有理函数的部分分式分解中。
examples:
  - problem: '计算 $\int \frac{1}{9+x^2} dx$。'
    solution: >-
      首先，将分母写成 $a^2+x^2$ 的形式，这里 $a=3$，因为 $9=3^2$。根据公式，$\int \frac{1}{a^2+x^2} dx
      = \frac{1}{a}\arctan\frac{x}{a} + C$。代入 $a=3$，得到 $\int \frac{1}{9+x^2} dx
      = \frac{1}{3}\arctan\frac{x}{3} + C$。
  - problem: '计算 $\int \frac{1}{2x^2+8} dx$。'
    solution: >-
      先提取分母中的常数因子，将积分变形为 $\int \frac{1}{2(x^2+4)} dx = \frac{1}{2}\int
      \frac{1}{x^2+4} dx$。现在分母为 $x^2+4$，即 $a=2$。应用公式，$\frac{1}{2} \cdot
      \frac{1}{2}\arctan\frac{x}{2} + C = \frac{1}{4}\arctan\frac{x}{2} + C$。
---

