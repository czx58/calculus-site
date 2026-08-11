---
title: 麦克劳林展开二项式
slug: maclaurin-binomial
category: 中值定理
latex: '(1+x)^\alpha = \sum_{n=0}^{\infty} C_\alpha^n x^n \quad (|x| < 1)'
plaintext: '(1+x)^alpha = sum_{n=0}^{inf} C(alpha,n) x^n (|x|<1)'
relatedTopicSlugs:
  - monotonicity-extrema
usage: >-
  麦克劳林展开二项式是泰勒级数在 $x_0=0$ 处的特例，用于将形如 $(1+x)^\alpha$ 的函数展开为幂级数。该公式适用于 $|x|<1$ 且
  $\alpha$ 为任意实数。使用时需注意收敛域，并可通过变量替换（如将 $x$ 换为 $-x$、$2x$
  等）得到其他常见展开式。常见变形包括：$(1-x)^\alpha = \sum_{n=0}^{\infty} (-1)^n C_\alpha^n
  x^n$，以及当 $\alpha$ 为正整数时，级数退化为有限项（二项式定理）。
examples:
  - problem: '求 $f(x)=\sqrt{1+x}$ 的麦克劳林展开式，并写出前四项。'
    solution: >-
      令 $\alpha = \frac{1}{2}$，则 $f(x) = (1+x)^{1/2}$。由公式：

      $$(1+x)^{1/2} = \sum_{n=0}^{\infty} C_{1/2}^n x^n$$

      其中
      $C_{1/2}^0=1$，$C_{1/2}^1=\frac{1}{2}$，$C_{1/2}^2=\frac{\frac{1}{2}(\frac{1}{2}-1)}{2!}=-\frac{1}{8}$，$C_{1/2}^3=\frac{\frac{1}{2}(\frac{1}{2}-1)(\frac{1}{2}-2)}{3!}=\frac{1}{16}$。因此前四项为：

      $$1 + \frac{1}{2}x - \frac{1}{8}x^2 + \frac{1}{16}x^3 + \cdots$$

      收敛域为 $|x|<1$。
  - problem: '利用麦克劳林展开式计算 $\frac{1}{\sqrt[3]{1+2x}}$ 的展开式，并写出前三项。'
    solution: >-
      令 $\alpha = -\frac{1}{3}$，则 $\frac{1}{\sqrt[3]{1+2x}} = (1+2x)^{-1/3}$。将
      $2x$ 代入公式中的 $x$：

      $$(1+2x)^{-1/3} = \sum_{n=0}^{\infty} C_{-1/3}^n (2x)^n$$

      计算前三项：

      $n=0$：$1$

      $n=1$：$C_{-1/3}^1 \cdot 2x = (-\frac{1}{3}) \cdot 2x = -\frac{2}{3}x$

      $n=2$：$C_{-1/3}^2 \cdot (2x)^2 = \frac{(-\frac{1}{3})(-\frac{4}{3})}{2}
      \cdot 4x^2 = \frac{4}{9} \cdot 4x^2 = \frac{16}{9}x^2$

      所以展开式前三项为：

      $$1 - \frac{2}{3}x + \frac{16}{9}x^2 + \cdots$$

      收敛条件为 $|2x|<1$，即 $|x|<\frac{1}{2}$。
---

