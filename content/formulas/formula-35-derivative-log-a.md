---
title: 对数函数求导 log_a
slug: derivative-log-a
category: 导数
latex: '(\log_a x)'' = \frac{1}{x \ln a}'
plaintext: (log_a x)' = 1/(x ln a)
relatedTopicSlugs:
  - derivative-rules
usage: >-
  该公式用于求以 $a$ 为底的对数函数 $\log_a x$ 的导数。使用场景包括：对含对数函数的表达式求导、求解切线斜率、优化问题等。注意事项：底数
  $a$ 必须满足 $a>0$ 且 $a \neq 1$，且自变量 $x>0$。常见变形：当 $a=e$ 时，$\ln x$ 的导数为
  $\frac{1}{x}$；利用换底公式可将任意底数对数转化为自然对数，即 $\log_a x = \frac{\ln x}{\ln a}$，从而求导。
examples:
  - problem: 求函数 $f(x) = \log_2 x$ 的导数。
    solution: '由公式 $f''(x) = \frac{1}{x \ln 2}$。'
  - problem: '求函数 $y = \log_{10}(x^2+1)$ 的导数。'
    solution: >-
      令 $u = x^2+1$，则 $y = \log_{10} u$。由链式法则，$y' = \frac{1}{u \ln 10} \cdot u'
      = \frac{2x}{(x^2+1) \ln 10}$。
---

