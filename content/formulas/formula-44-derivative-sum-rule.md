---
title: 和差求导法则
slug: derivative-sum-rule
category: 导数
latex: '[f(x) \pm g(x)]'' = f''(x) \pm g''(x)'
plaintext: '[f(x) +- g(x)]'' = f''(x) +- g''(x)'
relatedTopicSlugs:
  - derivative-rules
usage: >-
  **和差求导法则**用于求两个函数之和或差的导数，是导数运算中最基本的法则之一。


  **使用场景**：

  - 当函数表达式为两个或多个可导函数的和、差时，可直接应用此法则逐项求导。

  - 常用于化简复杂函数的求导过程，例如多项式函数、三角函数组合等。


  **注意事项**：

  - 该法则仅适用于**有限个**函数的和差，且每个函数都必须可导。

  - 注意符号：若原式为 $f(x) - g(x)$，则导数为 $f'(x) - g'(x)$，符号对应。

  - 不要与乘积法则混淆，和差法则不能用于乘积或商。


  **常见变形**：

  - 可推广到多个函数的和差：$[f_1(x) \pm f_2(x) \pm \cdots \pm f_n(x)]' = f_1'(x) \pm
  f_2'(x) \pm \cdots \pm f_n'(x)$。

  - 结合常数倍法则：$[c \cdot f(x) \pm d \cdot g(x)]' = c \cdot f'(x) \pm d \cdot
  g'(x)$。
examples:
  - problem: 求函数 $y = x^3 - 2x^2 + 5x - 7$ 的导数。
    solution: |-
      **解**：

      根据和差求导法则，对每一项分别求导：

      - $(x^3)' = 3x^2$
      - $(-2x^2)' = -2 \cdot 2x = -4x$
      - $(5x)' = 5$
      - $(-7)' = 0$

      因此，

      $$y' = (x^3 - 2x^2 + 5x - 7)' = 3x^2 - 4x + 5.$$

      所以，导数为 $y' = 3x^2 - 4x + 5$。
  - problem: '求函数 $y = \sin x + \cos x$ 在 $x = \frac{\pi}{4}$ 处的导数。'
    solution: >-
      **解**：


      先求导函数：


      $$y' = (\sin x + \cos x)' = (\sin x)' + (\cos x)' = \cos x - \sin x.$$


      将 $x = \frac{\pi}{4}$ 代入：


      $$y'\left(\frac{\pi}{4}\right) = \cos\frac{\pi}{4} - \sin\frac{\pi}{4} =
      \frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2} = 0.$$


      因此，在 $x = \frac{\pi}{4}$ 处的导数为 $0$。
---

