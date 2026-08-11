---
title: 余割求导
slug: derivative-csc
category: 导数
latex: (\csc x)' = -\csc x \cot x
plaintext: (csc x)' = -csc x cot x
relatedTopicSlugs:
  - derivative-rules
usage: >-
  余割函数的求导公式为 $(\csc x)' = -\csc x \cot
  x$。该公式主要用于处理涉及余割函数的导数计算，常在三角函数求导、微分方程、积分变换等场景中出现。使用时需注意：余割函数的定义域为 $x \neq
  k\pi$（$k$ 为整数），在求导时需确保自变量在定义域内。常见变形包括：利用 $\csc x = \frac{1}{\sin x}$ 和 $\cot x
  = \frac{\cos x}{\sin x}$ 进行化简；与链式法则结合，如 $(\csc u)' = -\csc u \cot u \cdot
  u'$；与乘积法则、商法则结合。此外，该公式常与 $\sec x$ 的求导公式对比记忆：$(\sec x)' = \sec x \tan x$。
examples:
  - problem: 求函数 $y = \csc(2x)$ 的导数。
    solution: >-
      令 $u = 2x$，则 $y = \csc u$。由链式法则，$y' = (\csc u)' \cdot u' = (-\csc u \cot
      u) \cdot 2 = -2\csc(2x)\cot(2x)$。
  - problem: 求函数 $y = x^2 \csc x$ 的导数。
    solution: >-
      使用乘积法则：$y' = (x^2)' \csc x + x^2 (\csc x)' = 2x \csc x + x^2 (-\csc x \cot
      x) = 2x \csc x - x^2 \csc x \cot x$。可提取公因式 $x \csc x$ 得 $y' = x \csc x (2
      - x \cot x)$。
---

