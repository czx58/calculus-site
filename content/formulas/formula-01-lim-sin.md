---
title: 重要极限 1
slug: lim-sin-x-over-x
category: 极限
latex: "\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1"
plaintext: lim(x->0) sin(x)/x = 1
relatedTopicSlugs:
  - limit-laws
  - lhopital-rule
usage: |
  这个极限常用于处理 **$0/0$ 型且含三角函数** 的极限。使用时要注意：

  1. 必须是 $x \to 0$ 的形式，或者通过换元化成这种形式。
  2. 分子和分母中的变量要一致，例如 $\frac{\sin 2x}{2x}$、$\frac{\sin x^2}{x^2}$。
  3. 若出现 $\frac{\sin 2x}{x}$，可以配凑成 $\frac{\sin 2x}{2x} \cdot 2$ 再用本极限。
examples:
  - problem: |
      求极限：$\displaystyle\lim_{x \to 0} \frac{\sin 3x}{x}$。
    solution: |
      将分子分母配凑成相同变量：

      $$\lim_{x \to 0} \frac{\sin 3x}{x} = \lim_{x \to 0} \frac{\sin 3x}{3x} \cdot 3 = 1 \cdot 3 = 3.$$
  - problem: |
      求极限：$\displaystyle\lim_{x \to 0} \frac{1-\cos x}{x^2}$。
    solution: |
      利用半角公式 $1-\cos x = 2\sin^2\frac{x}{2}$：

      $$\lim_{x \to 0} \frac{1-\cos x}{x^2} = \lim_{x \to 0} \frac{2\sin^2\frac{x}{2}}{x^2} = \frac{1}{2} \lim_{x \to 0} \left(\frac{\sin\frac{x}{2}}{\frac{x}{2}}\right)^2 = \frac{1}{2}.$$
---
