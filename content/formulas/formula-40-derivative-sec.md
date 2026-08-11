---
title: 正割求导
slug: derivative-sec
category: 导数
latex: (\sec x)' = \sec x \tan x
plaintext: (sec x)' = sec x tan x
relatedTopicSlugs:
  - derivative-rules
usage: >-
  正割函数的求导公式为 $(\sec x)' = \sec x \tan
  x$。该公式主要用于计算包含正割函数的导数，常见于三角函数的微分、积分换元以及微分方程求解中。使用时需注意：

  - 正割函数的定义域为 $x \neq \frac{\pi}{2} + k\pi$（$k \in
  \mathbb{Z}$），在导数计算中需保证函数在该点有定义。

  - 该公式可与其他求导法则（如链式法则、乘积法则）结合使用，例如 $(\sec u)' = \sec u \tan u \cdot u'$。

  - 常见变形：$\sec x = \frac{1}{\cos x}$，因此也可通过商法则推导，但直接使用公式更快捷。

  - 注意与余割函数求导公式 $(\csc x)' = -\csc x \cot x$ 区分，符号不同。
examples:
  - problem: 求函数 $y = \sec(2x)$ 的导数。
    solution: >-
      令 $u = 2x$，则 $y = \sec u$。由链式法则，$y' = (\sec u)' \cdot u'$。根据正割求导公式，$(\sec
      u)' = \sec u \tan u$，而 $u' = 2$。因此 $y' = \sec(2x) \tan(2x) \cdot 2 =
      2\sec(2x)\tan(2x)$。
  - problem: 求函数 $y = x^2 \sec x$ 的导数。
    solution: >-
      使用乘积法则：$y' = (x^2)' \sec x + x^2 (\sec x)'$。计算得 $(x^2)' = 2x$，$(\sec x)' =
      \sec x \tan x$。代入得 $y' = 2x \sec x + x^2 \sec x \tan x = \sec x (2x + x^2
      \tan x)$。
---

