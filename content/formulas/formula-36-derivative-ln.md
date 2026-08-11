---
title: 自然对数求导
slug: derivative-ln
category: 导数
latex: '(\ln x)'' = \frac{1}{x}'
plaintext: (ln x)' = 1/x
relatedTopicSlugs:
  - derivative-rules
usage: >-
  自然对数求导公式 $\left(\ln x\right)' = \frac{1}{x}$ 是微积分中的基本公式之一，用于求以自然常数 $e$
  为底的对数函数的导数。


  **使用场景**：

  - 当函数形式为 $\ln f(x)$ 时，可使用链式法则：$\left(\ln f(x)\right)' = \frac{f'(x)}{f(x)}$。

  - 在求幂函数、指数函数或复杂乘积的导数时，常利用对数求导法简化计算。


  **注意事项**：

  - 该公式仅适用于 $x > 0$，因为自然对数的定义域为正实数。

  - 若底数不是 $e$，则需使用换底公式：$\left(\log_a x\right)' = \frac{1}{x \ln a}$。


  **常见变形**：

  - $\left(\ln |x|\right)' = \frac{1}{x}$（$x \neq 0$）。

  - $\left(\ln (kx)\right)' = \frac{1}{x}$（$k$ 为常数）。
examples:
  - problem: 求函数 $y = \ln(2x+1)$ 的导数。
    solution: |-
      令 $u = 2x+1$，则 $y = \ln u$。

      由链式法则：
      $$ y' = \frac{1}{u} \cdot u' = \frac{1}{2x+1} \cdot 2 = \frac{2}{2x+1} $$
  - problem: 求函数 $y = \ln(x^2 + 3x)$ 的导数。
    solution: >-
      令 $u = x^2 + 3x$，则 $y = \ln u$。


      由链式法则：

      $$ y' = \frac{1}{u} \cdot u' = \frac{1}{x^2+3x} \cdot (2x+3) =
      \frac{2x+3}{x^2+3x} $$
---

