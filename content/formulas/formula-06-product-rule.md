---
title: 乘积法则
slug: product-rule
category: 导数
latex: (uv)' = u'v + uv'
plaintext: (uv)' = u'v + uv'
relatedTopicSlugs:
  - derivative-rules
usage: |-
  乘积法则是求两个函数乘积的导数时的重要工具，其公式为 $(uv)' = u'v + uv'$。

  **使用场景**：
  - 当需要求形如 $f(x) = g(x) \cdot h(x)$ 的函数的导数时，且 $g$ 和 $h$ 的导数容易求得。
  - 适用于任意两个可导函数的乘积，包括多项式、三角函数、指数函数、对数函数等的组合。

  **注意事项**：
  - 乘积法则不能简单地将导数的乘积等于各自导数的乘积，即 $(uv)' \neq u'v'$。
  - 法则可以推广到多个函数的乘积，例如 $(uvw)' = u'vw + uv'w + uvw'$。
  - 在计算时，务必保持符号的正确性，尤其是涉及减号或负号时。

  **常见变形**：
  - 若其中一个函数是常数，例如 $c \cdot v$，则 $(cv)' = c v'$（常数因子可提出）。
  - 结合链式法则可以处理复合函数的乘积，例如 $u(x) = f(g(x))$ 时，$u'(x) = f'(g(x)) \cdot g'(x)$。
  - 有时可先化简函数形式（如展开、约分）再求导，可能更简便，但若无法化简，乘积法则依然是可靠方法。
examples:
  - problem: 求函数 $f(x) = x^2 \sin x$ 的导数。
    solution: |-
      设 $u = x^2$，$v = \sin x$。

      1. 求各自导数：$u' = 2x$，$v' = \cos x$。
      2. 应用乘积法则：$f'(x) = u'v + uv' = (2x)(\sin x) + (x^2)(\cos x)$。
      3. 整理得：$f'(x) = 2x \sin x + x^2 \cos x$。

      因此，$f'(x) = x(2\sin x + x\cos x)$。
  - problem: 求函数 $g(t) = e^t \ln t$ 的导数。
    solution: |-
      设 $u = e^t$，$v = \ln t$。

      1. 求各自导数：$u' = e^t$，$v' = \frac{1}{t}$。
      2. 应用乘积法则：$g'(t) = u'v + uv' = e^t \cdot \ln t + e^t \cdot \frac{1}{t}$。
      3. 提取公因子 $e^t$：$g'(t) = e^t \left( \ln t + \frac{1}{t} \right)$。

      因此，$g'(t) = e^t \left( \ln t + \frac{1}{t} \right)$。
---

