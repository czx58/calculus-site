---
title: 链式法则
slug: chain-rule
category: 导数
latex: (f(g(x)))' = f'(g(x)) \cdot g'(x)
plaintext: (f(g(x)))' = f'(g(x)) * g'(x)
relatedTopicSlugs:
  - derivative-rules
usage: >-
  链式法则是复合函数求导的核心工具，用于计算形如 $f(g(x))$ 的复合函数的导数。其公式为 $(f(g(x)))' = f'(g(x)) \cdot
  g'(x)$，即先对外层函数求导（保持内层不变），再乘以内层函数的导数。


  **使用场景**：

  - 求复合函数的导数，如 $\sin(x^2)$、$e^{3x}$、$\ln(1+x)$ 等。

  - 在隐函数求导、参数方程求导、高阶导数中频繁使用。


  **注意事项**：

  - 确保正确识别内层函数 $g(x)$ 和外层函数 $f(u)$。

  - 不要忘记乘以内层函数的导数 $g'(x)$。

  - 若复合多层，可重复使用链式法则，如 $f(g(h(x)))' = f'(g(h(x))) \cdot g'(h(x)) \cdot h'(x)$。


  **常见变形**：

  - 幂函数复合：$[(u(x))^n]' = n(u(x))^{n-1} \cdot u'(x)$。

  - 指数函数复合：$[a^{u(x)}]' = a^{u(x)} \ln a \cdot u'(x)$。

  - 对数函数复合：$[\ln u(x)]' = \frac{u'(x)}{u(x)}$。

  - 三角函数复合：$[\sin u(x)]' = \cos u(x) \cdot u'(x)$。
examples:
  - problem: 求函数 $y = \sin(3x^2 + 1)$ 的导数。
    solution: |-
      令内层函数 $u = 3x^2 + 1$，外层函数 $f(u) = \sin u$。

      1. 求外层导数：$f'(u) = \cos u$，即 $f'(g(x)) = \cos(3x^2 + 1)$。
      2. 求内层导数：$u' = 6x$。
      3. 根据链式法则：$y' = \cos(3x^2 + 1) \cdot 6x$。

      因此，$y' = 6x \cos(3x^2 + 1)$。
  - problem: '求函数 $y = e^{\sqrt{x}}$ 的导数。'
    solution: |-
      令内层函数 $u = \sqrt{x} = x^{1/2}$，外层函数 $f(u) = e^u$。

      1. 外层导数：$f'(u) = e^u$，即 $f'(g(x)) = e^{\sqrt{x}}$。
      2. 内层导数：$u' = \frac{1}{2}x^{-1/2} = \frac{1}{2\sqrt{x}}$。
      3. 应用链式法则：$y' = e^{\sqrt{x}} \cdot \frac{1}{2\sqrt{x}}$。

      因此，$y' = \frac{e^{\sqrt{x}}}{2\sqrt{x}}$。
---

