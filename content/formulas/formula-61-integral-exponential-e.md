---
title: 积分 e^x
slug: integral-exponential-e
category: 积分
latex: '\int e^x \, dx = e^x + C'
plaintext: int e^x dx = e^x + C
relatedTopicSlugs:
  - indefinite-integral
usage: >-
  该公式用于求解以自然常数 $e$ 为底的指数函数的积分。它广泛应用于微积分、微分方程、概率论等领域。使用时需注意：积分结果中的常数 $C$
  不可遗漏，它表示任意常数。常见的变形包括：$\int e^{ax} \, dx = \frac{1}{a} e^{ax} + C$（$a \neq
  0$），以及 $\int e^{f(x)} f'(x) \, dx = e^{f(x)} + C$（换元法）。
examples:
  - problem: '求不定积分 $\int 3e^{2x} \, dx$。'
    solution: >-
      首先，将常数因子提到积分号外：$\int 3e^{2x} \, dx = 3 \int e^{2x} \, dx$。令 $u = 2x$，则 $du
      = 2\, dx$，即 $dx = \frac{1}{2} du$。代入得：$3 \int e^{u} \cdot \frac{1}{2} \,
      du = \frac{3}{2} \int e^{u} \, du = \frac{3}{2} e^{u} + C$。将 $u = 2x$
      代回，得到 $\frac{3}{2} e^{2x} + C$。
  - problem: '求定积分 $\int_{0}^{1} e^{x} \, dx$。'
    solution: >-
      先求不定积分：$\int e^{x} \, dx = e^{x} + C$。然后利用牛顿-莱布尼茨公式计算定积分：$\int_{0}^{1}
      e^{x} \, dx = \left[ e^{x} \right]_{0}^{1} = e^{1} - e^{0} = e - 1$。
---

