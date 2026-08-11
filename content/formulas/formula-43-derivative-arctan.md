---
title: 反正切求导
slug: derivative-arctan
category: 导数
latex: '(\arctan x)'' = \frac{1}{1 + x^2}'
plaintext: (arctan x)' = 1/(1+x^2)
relatedTopicSlugs:
  - derivative-rules
usage: >-
  该公式用于求反正切函数的导数，是微积分中基本导数公式之一。


  **使用场景**：

  - 直接求导：当函数为 $\arctan x$ 时，其导数为 $\frac{1}{1+x^2}$。

  - 复合函数求导：若函数为 $\arctan u$，其中 $u$ 是 $x$ 的函数，则导数为 $\frac{u'}{1+u^2}$。

  - 积分中常用：$\int \frac{1}{1+x^2} dx = \arctan x + C$。


  **注意事项**：

  - 该公式仅适用于实数域，且 $x$ 为实数。

  - 注意与 $\arcsin x$ 和 $\arccos x$ 的导数区分，避免混淆。


  **常见变形**：

  - 若 $u = kx$，则 $(\arctan(kx))' = \frac{k}{1+k^2x^2}$。

  - 若 $u = \frac{x}{a}$，则 $(\arctan(\frac{x}{a}))' =
  \frac{1}{a(1+(\frac{x}{a})^2)} = \frac{a}{a^2+x^2}$。

  - 若 $u = \tan x$，则 $(\arctan(\tan x))' = \frac{\sec^2 x}{1+\tan^2 x} = 1$（当
  $x$ 在定义域内）。
examples:
  - problem: 求函数 $y = \arctan(3x)$ 的导数。
    solution: >-
      令 $u = 3x$，则 $y = \arctan u$。


      由链式法则：

      $$

      y' = \frac{1}{1+u^2} \cdot u' = \frac{1}{1+(3x)^2} \cdot 3 =
      \frac{3}{1+9x^2}.

      $$


      因此，$y' = \frac{3}{1+9x^2}$。
  - problem: '求函数 $y = \arctan\left(\frac{x}{2}\right)$ 在 $x=2$ 处的导数。'
    solution: >-
      令 $u = \frac{x}{2}$，则 $y = \arctan u$。


      由链式法则：

      $$

      y' = \frac{1}{1+u^2} \cdot u' = \frac{1}{1+(\frac{x}{2})^2} \cdot
      \frac{1}{2} = \frac{1}{2(1+\frac{x^2}{4})} = \frac{2}{4+x^2}.

      $$


      当 $x=2$ 时，$y'(2) = \frac{2}{4+4} = \frac{2}{8} = \frac{1}{4}$。


      因此，在 $x=2$ 处的导数为 $\frac{1}{4}$。
---

