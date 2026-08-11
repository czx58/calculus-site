---
title: 洛必达法则
slug: lhopital-rule
category: 中值定理
latex: '\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f''(x)}{g''(x)}'
plaintext: lim f(x)/g(x) = lim f'(x)/g'(x)
relatedTopicSlugs:
  - lhopital-rule
usage: >-
  洛必达法则用于计算 $\frac{0}{0}$ 或 $\frac{\infty}{\infty}$ 型不定式的极限。使用前必须验证分子分母同时趋于 0
  或无穷大，且 $g'(x) \neq 0$。若求导后极限仍为不定式，可重复应用。常见变形：将 $0 \cdot \infty$ 型化为
  $\frac{0}{0}$ 或 $\frac{\infty}{\infty}$ 型，将 $\infty - \infty$ 型通分，将 $1^\infty,
  0^0, \infty^0$ 型取对数。注意：洛必达法则不是万能的，若极限不存在，需改用其他方法。
examples:
  - problem: '求极限 $\lim_{x \to 0} \frac{\sin x}{x}$。'
    solution: >-
      当 $x \to 0$ 时，分子分母均趋于 0，满足 $\frac{0}{0}$ 型。应用洛必达法则：

      $$\lim_{x \to 0} \frac{\sin x}{x} = \lim_{x \to 0} \frac{\cos x}{1} = \cos
      0 = 1.$$
  - problem: '求极限 $\lim_{x \to +\infty} \frac{e^x}{x^2}$。'
    solution: >-
      当 $x \to +\infty$ 时，分子分母均趋于无穷大，满足 $\frac{\infty}{\infty}$ 型。应用洛必达法则：

      $$\lim_{x \to +\infty} \frac{e^x}{x^2} = \lim_{x \to +\infty}
      \frac{e^x}{2x} = \lim_{x \to +\infty} \frac{e^x}{2} = +\infty.$$
---

