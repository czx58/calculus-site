---
title: 余弦求导
slug: derivative-cos
category: 导数
latex: (\cos x)' = -\sin x
plaintext: (cos x)' = -sin x
relatedTopicSlugs:
  - derivative-rules
usage: |-
  **余弦函数的导数公式**：$(\cos x)' = -\sin x$。

  **使用场景**：
  - 求含余弦函数的复合函数导数（如 $\cos(2x)$、$\cos^2 x$）。
  - 在物理中用于简谐运动的速度、加速度计算。

  **注意事项**：
  - 符号为负，不要遗漏。
  - 仅当自变量为 $x$（弧度制）时成立，若角度制需转换。

  **常见变形**：
  - 链式法则：$(\cos u)' = -\sin u \cdot u'$。
  - 与正弦导数结合：$(\sin x)' = \cos x$。
  - 高阶导数：$\cos^{(n)} x$ 呈现周期性。
examples:
  - problem: 求函数 $y = \cos(3x)$ 的导数。
    solution: |-
      令 $u = 3x$，则 $y = \cos u$。
      由链式法则：
      $$y' = (\cos u)' \cdot u' = (-\sin u) \cdot 3 = -3\sin(3x)$$
  - problem: 求函数 $y = \cos^2 x$ 的导数。
    solution: >-
      将 $y$ 视为 $y = (\cos x)^2$，令 $u = \cos x$，则 $y = u^2$。

      由链式法则：

      $$y' = 2u \cdot u' = 2\cos x \cdot (-\sin x) = -2\sin x \cos x = -\sin
      2x$$
---

