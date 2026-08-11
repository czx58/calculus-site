---
title: 商的求导法则
slug: derivative-quotient-rule
category: 导数
latex: '\left[\frac{f(x)}{g(x)}\right]'' = \frac{f''(x)g(x) - f(x)g''(x)}{g^2(x)}'
plaintext: '[f(x)/g(x)]'' = (f''(x)g(x) - f(x)g''(x))/g(x)^2'
relatedTopicSlugs:
  - derivative-rules
usage: >-
  商的求导法则用于求两个可导函数之商的导数。**适用场景**：当函数形式为 $\frac{f(x)}{g(x)}$，且 $f(x)$ 和 $g(x)$
  均可导时。**注意事项**：分母 $g(x)$ 不能为零；在求导过程中，分子是“上导下不导减上不导下导”，顺序不能颠倒；结果中分母是 $g(x)$
  的平方。**常见变形**：若 $g(x)$ 为常数 $c$，则 $\left[\frac{f(x)}{c}\right]' =
  \frac{f'(x)}{c}$；若 $f(x)$ 为常数 $c$，则 $\left[\frac{c}{g(x)}\right]' = -\frac{c
  g'(x)}{g^2(x)}$。
examples:
  - problem: '求函数 $y = \frac{x^2+1}{x}$ 的导数。'
    solution: |-
      令 $f(x)=x^2+1$，$g(x)=x$，则 $f'(x)=2x$，$g'(x)=1$。根据商的求导法则：

      $$\begin{aligned}
      y' &= \frac{(2x)\cdot x - (x^2+1)\cdot 1}{x^2} \\
      &= \frac{2x^2 - x^2 - 1}{x^2} \\
      &= \frac{x^2 - 1}{x^2} \\
      &= 1 - \frac{1}{x^2}.
      \end{aligned}$$

      所以 $y' = 1 - \frac{1}{x^2}$。
  - problem: '求函数 $y = \frac{\sin x}{x}$ 的导数。'
    solution: |-
      令 $f(x)=\sin x$，$g(x)=x$，则 $f'(x)=\cos x$，$g'(x)=1$。根据商的求导法则：

      $$\begin{aligned}
      y' &= \frac{(\cos x)\cdot x - (\sin x)\cdot 1}{x^2} \\
      &= \frac{x\cos x - \sin x}{x^2}.
      \end{aligned}$$

      所以 $y' = \frac{x\cos x - \sin x}{x^2}$。
---

