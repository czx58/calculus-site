---
title: 指数函数求导 e^x
slug: derivative-exponential-e
category: 导数
latex: (e^x)' = e^x
plaintext: (e^x)' = e^x
relatedTopicSlugs:
  - derivative-rules
usage: |-
  指数函数 $e^x$ 的导数等于其本身，即 $(e^x)' = e^x$。这一性质在微积分中极为重要，常用于求解涉及指数函数的导数问题。

  **使用场景**：
  - 直接求导：如 $f(x) = e^x$，则 $f'(x) = e^x$。
  - 复合函数：若 $u = g(x)$，则 $(e^{u})' = e^{u} \cdot u'$（链式法则）。
  - 高阶导数：$e^x$ 的任意阶导数仍为 $e^x$。

  **注意事项**：
  - 该公式仅适用于底数为 $e$ 的指数函数，对于一般底数 $a>0, a \neq 1$，有 $(a^x)' = a^x \ln a$。
  - 当指数是复合函数时，不要遗漏链式法则中的 $u'$。

  **常见变形**：
  - 常数倍：$(C e^x)' = C e^x$。
  - 线性组合：$(a e^x + b)' = a e^x$。
  - 与多项式乘积：$(x^n e^x)' = e^x (x^n + n x^{n-1})$。
examples:
  - problem: '求函数 $f(x) = e^{2x}$ 的导数。'
    solution: |-
      令 $u = 2x$，则 $u' = 2$。由链式法则：

      $$ f'(x) = (e^{u})' = e^{u} \cdot u' = e^{2x} \cdot 2 = 2e^{2x} $$

      因此，$f'(x) = 2e^{2x}$。
  - problem: 求函数 $y = x^2 e^x$ 的导数。
    solution: |-
      利用乘法法则 $(uv)' = u'v + uv'$，其中 $u = x^2$，$v = e^x$。

      - $u' = 2x$
      - $v' = e^x$

      因此：

      $$ y' = (x^2)' e^x + x^2 (e^x)' = 2x e^x + x^2 e^x = e^x (2x + x^2) $$

      所以，$y' = e^x (x^2 + 2x)$。
---

