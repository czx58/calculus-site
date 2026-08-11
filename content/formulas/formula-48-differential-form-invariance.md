---
title: 一阶微分形式不变性
slug: differential-form-invariance
category: 微分
latex: 'dy = f''(u) \, du = f''(u) \varphi''(x) \, dx'
plaintext: dy = f'(u) du = f'(u) phi'(x) dx
relatedTopicSlugs:
  - differential
usage: >-
  一阶微分形式不变性是指，无论 $u$ 是自变量还是中间变量，函数 $y=f(u)$ 的微分形式均为 $dy = f'(u) \, du$。当 $u =
  \varphi(x)$ 时，$du = \varphi'(x) \, dx$，因此 $dy = f'(u) \, \varphi'(x) \, dx$。


  **使用场景**：

  - 求复合函数的微分时，可先对中间变量求导，再乘以中间变量的微分。

  - 在换元积分法中，用于简化积分表达式。

  - 在隐函数求导中，可直接对等式两边取微分。


  **注意事项**：

  - 该性质仅适用于一阶微分，高阶微分不具有形式不变性。

  - 注意区分 $f'(u)$ 与 $f'(x)$，当 $u$ 是中间变量时，$f'(u)$ 是对 $u$ 求导。


  **常见变形**：

  - 若 $y = \ln u$，则 $dy = \frac{1}{u} \, du$。

  - 若 $y = e^u$，则 $dy = e^u \, du$。

  - 若 $y = \sin u$，则 $dy = \cos u \, du$。
examples:
  - problem: 设 $y = \sin(2x+1)$，求 $dy$。
    solution: >-
      令 $u = 2x+1$，则 $y = \sin u$。由一阶微分形式不变性，有 $dy = \cos u \, du$。又因为 $du = 2
      \, dx$，所以 $dy = \cos(2x+1) \cdot 2 \, dx = 2\cos(2x+1) \, dx$。
  - problem: 设 $y = \ln(1+e^x)$，求 $dy$。
    solution: >-
      令 $u = 1+e^x$，则 $y = \ln u$。由一阶微分形式不变性，$dy = \frac{1}{u} \, du$。又 $du =
      e^x \, dx$，所以 $dy = \frac{1}{1+e^x} \cdot e^x \, dx = \frac{e^x}{1+e^x} \,
      dx$。
---

