---
title: 反正弦求导
slug: derivative-arcsin
category: 导数
latex: '(\arcsin x)'' = \frac{1}{\sqrt{1 - x^2}}'
plaintext: (arcsin x)' = 1/sqrt(1-x^2)
relatedTopicSlugs:
  - derivative-rules
usage: >-
  **使用方法**


  该公式用于求反正弦函数 $\arcsin x$ 的导数，是反三角函数求导的基本公式之一。


  **使用场景**

  - 直接对 $\arcsin x$ 求导。

  - 在复合函数求导中，如 $y = \arcsin(u)$，其中 $u$ 是 $x$ 的函数，则 $y' = \frac{1}{\sqrt{1-u^2}}
  \cdot u'$。

  - 用于求解包含反正弦的积分或微分方程。


  **注意事项**

  - 定义域：$x \in (-1, 1)$，因为根号下 $1-x^2$ 必须为正，且反正弦函数本身定义域为
  $[-1,1]$，但导数在端点处不存在（分母为零）。

  - 结果为正，因为 $\arcsin x$ 在定义域内单调递增。

  - 与反余弦导数关系：$(\arccos x)' = -\frac{1}{\sqrt{1-x^2}}$，注意符号相反。


  **常见变形**

  - 若 $u = \frac{x}{a}$（$a>0$），则 $(\arcsin \frac{x}{a})' = \frac{1}{\sqrt{a^2 -
  x^2}}$。

  - 若 $u = \sqrt{x}$，则 $(\arcsin \sqrt{x})' = \frac{1}{2\sqrt{x(1-x)}}$。
examples:
  - problem: 求函数 $y = \arcsin(2x)$ 的导数。
    solution: >-
      令 $u = 2x$，则 $y = \arcsin u$。


      根据链式法则：

      $$ y' = \frac{1}{\sqrt{1 - u^2}} \cdot u' = \frac{1}{\sqrt{1 - (2x)^2}}
      \cdot 2 = \frac{2}{\sqrt{1 - 4x^2}} $$


      因此，$y' = \frac{2}{\sqrt{1 - 4x^2}}$。
  - problem: '求函数 $y = \arcsin\left(\frac{x}{3}\right)$ 的导数。'
    solution: >-
      令 $u = \frac{x}{3}$，则 $y = \arcsin u$。


      由链式法则：

      $$ y' = \frac{1}{\sqrt{1 - u^2}} \cdot u' = \frac{1}{\sqrt{1 -
      \left(\frac{x}{3}\right)^2}} \cdot \frac{1}{3} = \frac{1}{3\sqrt{1 -
      \frac{x^2}{9}}} = \frac{1}{\sqrt{9 - x^2}} $$


      因此，$y' = \frac{1}{\sqrt{9 - x^2}}$。
---

