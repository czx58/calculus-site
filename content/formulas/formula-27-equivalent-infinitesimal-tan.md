---
title: 等价无穷小 tan
slug: equivalent-infinitesimal-tan
category: 极限
latex: \tan x \sim x \quad (x \to 0)
plaintext: tan x ~ x (x -> 0)
relatedTopicSlugs:
  - function-limits
usage: "等价无穷小替换是计算极限时的重要技巧，用于将复杂的函数在极限点附近替换为更简单的等价形式。本公式 $\tan x \\sim x \\quad (x \\to 0)$ 表示当 $x$ 趋于 $0$ 时，$\tan x$ 与 $x$ 的比值趋于 $1$，因此可将 $\tan x$ 替换为 $x$ 以简化极限运算。\\n\\n**使用场景**：\\n- 求乘除或分式形式的极限，且极限过程中 $x \\to 0$。\\n- 当极限表达式中出现 $\\tan(\\cdot)$ 且其内部变量趋于 $0$ 时，可将该部分替换为内部变量本身（需满足等价无穷小的条件）。\\n\\n**注意事项**：\\n- 仅在乘除运算中可直接替换；加减运算中一般不能直接替换，否则可能导致错误。\\n- 替换需保证极限过程是 $x \\to 0$，且 $\\tan$ 内部的表达式也趋于 $0$（例如 $\\tan(3x) \\sim 3x$）。\\n- 若 $x$ 不趋于 $0$，例如 $x \\to \\infty$，该公式不适用。\\n\\n**常见变形**：\\n- $\\tan(kx) \\sim kx \\quad (x \\to 0)$，其中 $k$ 为常数。\\n- 结合其他等价无穷小，如 $\\sin x \\sim x$，$\\arcsin x \\sim x$，$\\arctan x \\sim x$ 等，可处理更复杂的表达式。\\n- 若分子或分母为乘积形式，可分别对每个因子进行替换。"
examples:
  - problem: '求极限 $\lim\limits_{x \to 0} \dfrac{\tan 3x}{\sin 2x}$。'
    solution: >-
      **解**：\n1. 当 $x \to 0$ 时，$\tan 3x \sim 3x$，$\sin 2x \sim 2x$（利用 $\sin$
      的等价无穷小）。\n2. 原极限可替换为：\n   $$\lim_{x \to 0} \frac{3x}{2x} =
      \frac{3}{2}.$$\n3. 因此，极限值为 $\dfrac{3}{2}$。
  - problem: '求极限 $\lim\limits_{x \to 0} \dfrac{1-\cos x}{x \tan x}$。'
    solution: >-
      **解**：\n1. 先处理分子：由三角恒等式 $1-\cos x = 2\sin^2\left(\dfrac{x}{2}\right)$，且当
      $x \to 0$ 时，$\sin\left(\dfrac{x}{2}\right) \sim \dfrac{x}{2}$，所以 $1-\cos x
      \sim 2\cdot\left(\dfrac{x}{2}\right)^2 = \dfrac{x^2}{2}$。\n2. 分母中 $\tan x
      \sim x$，故 $x\tan x \sim x\cdot x = x^2$。\n3. 原极限变为：\n   $$\lim_{x \to 0}
      \frac{\frac{x^2}{2}}{x^2} = \frac{1}{2}.$$\n4. 因此，极限值为 $\dfrac{1}{2}$。
---

