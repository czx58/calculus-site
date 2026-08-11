---
title: 函数极限的 ε-δ 定义
slug: limit-definition-epsilon-delta
category: 极限
latex: '\lim_{x \to a} f(x) = L \iff \forall \varepsilon>0, \exists \delta>0, \ 0<|x-a|<\delta \Rightarrow |f(x)-L|<\varepsilon'
plaintext: lim(x->a) f(x) = L iff for all eps>0 exists delta>0 such that 0<|x-a|<delta implies |f(x)-L|<eps
relatedTopicSlugs:
  - limit-definition
usage: |
  这个定义用来**严格证明**一个函数的极限值。核心思路是：

  1. 先任意给定一个很小的正数 $\varepsilon$。
  2. 找到一个只与 $\varepsilon$ 有关的 $\delta$。
  3. 只要 $x$ 落在 $a$ 的 $\delta$ 去心邻域内，函数值 $f(x)$ 就会落在 $L$ 的 $\varepsilon$ 邻域内。

  换句话说：**$x$ 足够靠近 $a$ 时，$f(x)$ 就能任意靠近 $L$**。
examples:
  - problem: |
      用 $\varepsilon$-$\delta$ 定义证明：$\displaystyle\lim_{x \to 2} (3x+1) = 7$。
    solution: |
      对任意给定的 $\varepsilon > 0$，我们希望找到 $\delta > 0$，使得当 $0 < |x-2| < \delta$ 时，有

      $$|(3x+1)-7| = |3x-6| = 3|x-2| < \varepsilon.$$

      因此只要取 $\delta = \varepsilon/3$，当 $0 < |x-2| < \delta$ 时，就有

      $$3|x-2| < 3\delta = \varepsilon.$$

      由定义可知，$\displaystyle\lim_{x \to 2} (3x+1) = 7$。
---
