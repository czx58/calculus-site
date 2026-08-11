---
title: 正切求导
slug: derivative-tan
category: 导数
latex: (\tan x)' = \sec^2 x
plaintext: (tan x)' = sec^2 x
relatedTopicSlugs:
  - derivative-rules
usage: >-
  正切函数的求导公式 $\frac{d}{dx}(\tan x)=\sec^2 x$
  是微积分中的基本导数公式之一。它主要用于求解包含正切函数的复合函数、隐函数或参数方程的导数。使用时需注意：该公式仅在 $x$ 使 $\tan x$
  有定义（即 $x\neq \frac{\pi}{2}+k\pi$）时成立。常见变形包括：$\frac{d}{dx}(\tan u)=u'\sec^2
  u$（链式法则），以及 $\sec^2 x = 1+\tan^2 x$，后者常用于化简。在求解积分时，该公式也常作为反向使用（即 $\int \sec^2
  x\,dx=\tan x+C$）。
examples:
  - problem: 求函数 $y = \tan(3x^2)$ 的导数。
    solution: >-
      令 $u=3x^2$，则 $y=\tan u$。由链式法则，$y' = \sec^2 u \cdot u'$。计算 $u'=6x$，因此 $y' =
      \sec^2(3x^2) \cdot 6x = 6x\sec^2(3x^2)$。
  - problem: '求曲线 $y = \tan x$ 在点 $x=\frac{\pi}{4}$ 处的切线方程。'
    solution: >-
      首先求导数：$y' = \sec^2 x$。当 $x=\frac{\pi}{4}$ 时，$y = \tan\frac{\pi}{4}=1$，$y'
      = \sec^2\frac{\pi}{4} = (\sqrt{2})^2=2$。切线斜率为2，过点
      $(\frac{\pi}{4},1)$，故切线方程为 $y-1=2\left(x-\frac{\pi}{4}\right)$，即
      $y=2x-\frac{\pi}{2}+1$。
---

