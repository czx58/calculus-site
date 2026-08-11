---
title: 极限乘法法则
slug: limit-product-rule
category: 极限
latex: >-
  \lim_{x \to a} [f(x) \cdot g(x)] = \lim_{x \to a} f(x) \cdot \lim_{x \to a}
  g(x)
plaintext: 'lim(x->a)[f(x)g(x)] = lim f(x) * lim g(x)'
relatedTopicSlugs:
  - limit-laws
usage: >-
  **极限乘法法则**用于计算两个函数乘积的极限，其核心条件是：当 $x \to a$ 时，$\lim f(x)$ 和 $\lim g(x)$
  都必须存在（即收敛到有限值）。使用场景包括多项式乘积、含根式与分式的乘积等。\n\n**注意事项**：\n-
  若其中一个极限不存在（如趋于无穷大）或振荡，则不能直接拆开，需先变形（如有理化、通分、提取公因式）再尝试。\n- 若乘积形式为 $0 \cdot
  \infty$ 或 $\infty \cdot 0$，这是未定式，不能直接套用，需转化为 $\frac{0}{0}$ 或
  $\frac{\infty}{\infty}$ 型再用其他方法。\n-
  常与极限加法法则、常数倍法则结合使用，但必须确保每一步拆分后的极限都存在。\n\n**常见变形**：\n- 提取公因式：$\lim [f(x)g(x)] =
  \lim f(x) \cdot \lim g(x)$ 可逆向使用，即已知两个极限存在，可先求各自极限再相乘。\n- 若 $g(x)$ 恒等于常数
  $c$，则退化为 $\lim [c f(x)] = c \lim f(x)$。\n- 对于有理函数，常先约分再应用乘法法则。
examples:
  - problem: '求 $\lim_{x \to 2} (3x-1)(x^2+1)$。'
    solution: >-
      **解**：\n1. 因为 $\lim_{x \to 2} (3x-1) = 3\cdot2-1=5$，$\lim_{x \to 2}
      (x^2+1)=2^2+1=5$，两个极限都存在。\n2. 根据极限乘法法则：\n   $$\lim_{x \to 2} (3x-1)(x^2+1)
      = \left(\lim_{x \to 2} (3x-1)\right) \cdot \left(\lim_{x \to 2}
      (x^2+1)\right) = 5 \cdot 5 = 25.$$\n3. 所以答案为 $25$。
  - problem: '求 $\lim_{x \to 0} \frac{\sin x}{x} \cdot \frac{1}{\cos x}$。'
    solution: >-
      **解**：\n1. 已知基本极限 $\lim_{x \to 0} \frac{\sin x}{x}=1$，且 $\lim_{x \to 0}
      \frac{1}{\cos x} = \frac{1}{\cos 0}=1$，两者都存在。\n2. 由极限乘法法则：\n   $$\lim_{x
      \to 0} \left(\frac{\sin x}{x} \cdot \frac{1}{\cos x}\right) =
      \left(\lim_{x \to 0} \frac{\sin x}{x}\right) \cdot \left(\lim_{x \to 0}
      \frac{1}{\cos x}\right) = 1 \cdot 1 = 1.$$\n3. 所以原极限为 $1$。
---

