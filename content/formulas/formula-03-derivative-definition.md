---
title: 导数的定义
slug: derivative-definition-formula
category: 导数
latex: 'f''(x_0) = \lim_{h \to 0} \frac{f(x_0+h)-f(x_0)}{h}'
plaintext: 'f''(x0) = lim(h->0) [f(x0+h)-f(x0)]/h'
relatedTopicSlugs:
  - derivative-definition
usage: |-
  导数的定义是微积分的基石，用于描述函数在某一点处的瞬时变化率。它广泛应用于物理（速度、加速度）、经济学（边际成本）和工程学（变化率估计）等领域。

  **使用场景**：
  - 求函数在某一点 $x_0$ 的导数（即切线斜率）。
  - 判断函数在某点是否可导（极限是否存在）。
  - 推导其他导数公式（如幂函数、三角函数等）。

  **注意事项**：
  - 极限必须存在且有限，否则称函数在该点不可导。
  - $h$ 是自变量增量，可正可负，但 $h \to 0$ 时需从两侧同时考虑（左右极限相等）。
  - 该定义等价于 $f'(x_0) = \lim_{x \to x_0} \frac{f(x)-f(x_0)}{x-x_0}$，两者可互换使用。

  **常见变形**：
  - 右导数：$\lim_{h \to 0^+} \frac{f(x_0+h)-f(x_0)}{h}$
  - 左导数：$\lim_{h \to 0^-} \frac{f(x_0+h)-f(x_0)}{h}$
  - 高阶导数：可多次应用定义（或后续的求导法则）得到。
examples:
  - problem: 用导数的定义求函数 $f(x) = x^2$ 在 $x=3$ 处的导数 $f'(3)$。
    solution: |-
      由导数定义：
      $$
      f'(3) = \lim_{h \to 0} \frac{f(3+h)-f(3)}{h}
      $$
      代入 $f(x)=x^2$：
      $$
      f(3+h) = (3+h)^2 = 9 + 6h + h^2, \quad f(3)=9
      $$
      所以
      $$
      \frac{f(3+h)-f(3)}{h} = \frac{9+6h+h^2-9}{h} = \frac{6h+h^2}{h} = 6+h
      $$
      当 $h \to 0$ 时，$6+h \to 6$。因此
      $$
      f'(3) = 6
      $$
      即 $x^2$ 在 $x=3$ 处的导数为 6，表示该点切线斜率为 6。
  - problem: 利用导数的定义判断函数 $f(x) = |x|$ 在 $x=0$ 处是否可导。
    solution: >-
      计算 $x=0$ 处的左、右导数。


      右导数（$h>0$）：

      $$

      \lim_{h \to 0^+} \frac{f(0+h)-f(0)}{h} = \lim_{h \to 0^+} \frac{|h|-0}{h}
      = \lim_{h \to 0^+} \frac{h}{h} = 1

      $$


      左导数（$h<0$）：

      $$

      \lim_{h \to 0^-} \frac{f(0+h)-f(0)}{h} = \lim_{h \to 0^-} \frac{|h|-0}{h}
      = \lim_{h \to 0^-} \frac{-h}{h} = -1

      $$


      因为左导数（-1）和右导数（1）不相等，所以极限 $\lim_{h \to 0} \frac{f(0+h)-f(0)}{h}$
      不存在。因此，$f(x)=|x|$ 在 $x=0$ 处不可导。
---

