---
title: 正弦求导
slug: derivative-sin
category: 导数
latex: (\sin x)' = \cos x
plaintext: (sin x)' = cos x
relatedTopicSlugs:
  - derivative-rules
usage: |-
  **正弦函数的导数公式**：$(\sin x)' = \cos x$。

  **使用场景**：
  - 求含正弦函数的复合函数、乘积、商等形式的导数时，作为基本求导法则。
  - 在物理、工程中涉及简谐运动、波动等问题时，常需对正弦函数求导。

  **注意事项**：
  - 该公式仅适用于自变量为 $x$（弧度制）的情形。若角度使用度数，需先转换为弧度。
  - 求导时注意链式法则：如 $(\sin(2x))' = 2\cos(2x)$。

  **常见变形**：
  - $(\sin(ax+b))' = a\cos(ax+b)$
  - $(\sin^n x)' = n\sin^{n-1}x \cos x$（幂指函数求导）
  - 结合乘积法则、商法则等。
examples:
  - problem: 求函数 $y = \sin(3x^2+1)$ 的导数。
    solution: |-
      令 $u = 3x^2+1$，则 $y = \sin u$。
      由链式法则：
      $$y' = \cos u \cdot u' = \cos(3x^2+1) \cdot (6x) = 6x\cos(3x^2+1)$$
  - problem: 求函数 $y = x^2 \sin x$ 的导数。
    solution: |-
      使用乘积法则：
      $$y' = (x^2)'\sin x + x^2(\sin x)' = 2x\sin x + x^2\cos x$$
---

