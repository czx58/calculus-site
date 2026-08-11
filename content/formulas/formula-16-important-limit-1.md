---
title: 第一个重要极限
slug: important-limit-1
category: 极限
latex: '\lim_{x \to 0} \frac{\sin x}{x} = 1'
plaintext: lim(x->0) sinx/x = 1
relatedTopicSlugs:
  - limit-laws
usage: |-
  **第一个重要极限**：$\lim_{x \to 0} \frac{\sin x}{x} = 1$。

  **使用场景**：
  - 当求极限时遇到形如 $\frac{\sin(\cdot)}{\cdot}$ 且变量趋向于 0 的分式，可直接套用。
  - 常用于三角函数、反三角函数与代数函数混合的极限计算。

  **注意事项**：
  - 必须保证 $x$ 趋向于 0，且分母和分子中的变量一致（即同为 $x$ 或同为某个趋于 0 的量）。
  - 若形式为 $\frac{\sin(kx)}{x}$，需通过恒等变形化为 $k \cdot \frac{\sin(kx)}{kx}$。
  - 该极限成立的前提是角度采用弧度制。

  **常见变形**：
  - $\lim_{x \to 0} \frac{\sin(ax)}{x} = a$（$a$ 为常数）
  - $\lim_{x \to 0} \frac{\tan x}{x} = 1$（利用 $\tan x = \frac{\sin x}{\cos x}$）
  - $\lim_{x \to 0} \frac{1-\cos x}{x^2} = \frac{1}{2}$（利用半角公式）
examples:
  - problem: '求极限 $\lim_{x \to 0} \frac{\sin 3x}{x}$。'
    solution: >-
      **解**：

      1. 原式可变形为 $\lim_{x \to 0} \frac{\sin 3x}{x} = \lim_{x \to 0} \frac{3 \sin
      3x}{3x}$。

      2. 令 $t=3x$，当 $x \to 0$ 时 $t \to 0$，则原式 $= 3 \lim_{t \to 0} \frac{\sin
      t}{t}$。

      3. 由第一个重要极限，$\lim_{t \to 0} \frac{\sin t}{t} = 1$，故原式 $= 3 \times 1 = 3$。


      所以 $\lim_{x \to 0} \frac{\sin 3x}{x} = 3$。
  - problem: '求极限 $\lim_{x \to 0} \frac{\tan x - \sin x}{x^3}$。'
    solution: >-
      **解**：

      1. 将 $\tan x$ 和 $\sin x$ 通分：$\tan x - \sin x = \frac{\sin x}{\cos x} -
      \sin x = \frac{\sin x(1-\cos x)}{\cos x}$。

      2. 原式 $= \lim_{x \to 0} \frac{\sin x(1-\cos x)}{x^3 \cos x}$。

      3. 拆分为 $\lim_{x \to 0} \frac{\sin x}{x} \cdot \lim_{x \to 0} \frac{1-\cos
      x}{x^2} \cdot \lim_{x \to 0} \frac{1}{\cos x}$。

      4. 由第一个重要极限，$\lim_{x \to 0} \frac{\sin x}{x} = 1$；由常见变形，$\lim_{x \to 0}
      \frac{1-\cos x}{x^2} = \frac{1}{2}$；且 $\lim_{x \to 0} \frac{1}{\cos x} =
      1$。

      5. 所以原式 $= 1 \times \frac{1}{2} \times 1 = \frac{1}{2}$。


      因此 $\lim_{x \to 0} \frac{\tan x - \sin x}{x^3} = \frac{1}{2}$。
---

