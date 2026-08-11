---
title: 反函数求导
slug: derivative-inverse-function
category: 导数
latex: '[f^{-1}(x)]'' = \frac{1}{f''(f^{-1}(x))}'
plaintext: '[f^{-1}(x)]'' = 1 / f''(f^{-1}(x))'
relatedTopicSlugs:
  - derivative-rules
usage: >-
  **反函数求导公式**用于求反函数的导数，其表述为：若 $y=f(x)$ 在区间 $I$ 上严格单调且可导，且 $f'(x) \neq 0$，则其反函数
  $x=f^{-1}(y)$ 在对应区间上也可导，且 \[[f^{-1}(y)]' = \frac{1}{f'(x)} =
  \frac{1}{f'(f^{-1}(y))}.\] 使用场景：当直接求反函数的导数较困难时，可先求原函数的导数，再利用此公式。注意事项：

  - 必须确保 $f'(x) \neq 0$，否则公式不成立。

  - 反函数存在的前提是原函数单调。

  - 公式中的 $x$ 应替换为 $f^{-1}(y)$。

  常见变形：\[[f^{-1}(x)]' = \frac{1}{f'(f^{-1}(x))}.\] 也可写作 $\frac{dy}{dx} =
  \frac{1}{\frac{dx}{dy}}$。
examples:
  - problem: 求函数 $y = \arcsin x$ 的导数。
    solution: >-
      设 $y = \arcsin x$，则 $x = \sin y$，其中 $y \in [-\frac{\pi}{2},
      \frac{\pi}{2}]$。由反函数求导公式：\[\frac{dy}{dx} = \frac{1}{\frac{dx}{dy}} =
      \frac{1}{\cos y}.\] 因为 $\cos y \geq 0$，且 $\cos^2 y = 1 - \sin^2 y = 1 -
      x^2$，所以 $\cos y = \sqrt{1-x^2}$。因此 \[\frac{d}{dx}(\arcsin x) =
      \frac{1}{\sqrt{1-x^2}}.\]
  - problem: 求函数 $y = \arctan x$ 的导数。
    solution: >-
      设 $y = \arctan x$，则 $x = \tan y$，其中 $y \in (-\frac{\pi}{2},
      \frac{\pi}{2})$。由反函数求导公式：\[\frac{dy}{dx} = \frac{1}{\frac{dx}{dy}} =
      \frac{1}{\sec^2 y}.\] 因为 $\sec^2 y = 1 + \tan^2 y = 1 + x^2$，所以
      \[\frac{d}{dx}(\arctan x) = \frac{1}{1+x^2}.\]
---

