---
title: 指数函数求导 a^x
slug: derivative-exponential-a
category: 导数
latex: (a^x)' = a^x \ln a
plaintext: (a^x)' = a^x ln a
relatedTopicSlugs:
  - derivative-rules
usage: |-
  指数函数求导公式 $(a^x)' = a^x \ln a$ 用于计算底数为常数、指数为变量的幂函数的导数。

  **使用场景**：
  - 求形如 $y = a^x$ 的函数的导数。
  - 在复合函数求导中，如 $y = a^{u(x)}$，需结合链式法则：$(a^{u})' = a^u \ln a \cdot u'$。
  - 当底数为 $e$ 时，公式简化为 $(e^x)' = e^x$。

  **注意事项**：
  - 底数 $a$ 必须满足 $a > 0$ 且 $a \neq 1$。
  - 若底数是变量（如 $x^x$），不能直接套用此公式，需先取对数或改写为 $e^{x \ln x}$。

  **常见变形**：
  - $y = 2^x$ 的导数为 $2^x \ln 2$。
  - $y = 10^x$ 的导数为 $10^x \ln 10$。
  - 结合常数倍：$(k a^x)' = k a^x \ln a$。
examples:
  - problem: 求函数 $y = 3^x$ 的导数。
    solution: |-
      直接应用公式：
      $$ y' = (3^x)' = 3^x \ln 3. $$
      因此，导数为 $3^x \ln 3$。
  - problem: '求函数 $y = 2^{x^2 + 1}$ 的导数。'
    solution: >-
      这是复合函数，令 $u = x^2 + 1$，则 $y = 2^u$。

      由链式法则：

      $$ y' = (2^u)' \cdot u' = 2^u \ln 2 \cdot (2x) = 2^{x^2+1} \ln 2 \cdot 2x.
      $$

      因此，导数为 $2x \cdot 2^{x^2+1} \ln 2$。
---

