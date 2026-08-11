---
title: 麦克劳林展开 cos
slug: maclaurin-cos
category: 中值定理
latex: '\cos x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!}'
plaintext: 'cos x = sum_{n=0}^{inf} (-1)^n x^{2n}/(2n)!'
relatedTopicSlugs:
  - monotonicity-extrema
usage: >-
  麦克劳林展开是泰勒展开在 $x=0$ 处的特殊情况，用于将函数表示为幂级数。对于 $\cos x$，其展开式为 $\cos x =
  \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!}$。


  **使用场景**：

  - 计算 $\cos x$ 在 $x$ 接近 0 时的近似值，如 $\cos 0.1$。

  - 求解涉及 $\cos x$ 的极限问题，如 $\lim_{x\to 0} \frac{1-\cos x}{x^2}$。

  - 在微分方程、傅里叶分析等领域中简化计算。


  **注意事项**：

  - 展开式在实数范围内收敛，但实际计算中通常取有限项，截断误差由余项估计。

  - 展开式只含偶次幂，因为 $\cos x$ 是偶函数。

  - 当 $x$ 较大时，需要更多项才能保证精度。


  **常见变形**：

  - 令 $x$ 替换为 $2x$，得到 $\cos 2x = \sum_{n=0}^{\infty} \frac{(-1)^n
  (2x)^{2n}}{(2n)!}$。

  - 与 $\sin x$ 的展开式结合，可得到欧拉公式。

  - 利用展开式可证明 $\cos x$ 的导数公式。
examples:
  - problem: '求极限 $\lim_{x\to 0} \frac{1-\cos x}{x^2}$。'
    solution: >-
      利用麦克劳林展开：$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots$，因此
      $1-\cos x = \frac{x^2}{2} - \frac{x^4}{24} + \cdots$。代入极限得：$\lim_{x\to 0}
      \frac{1-\cos x}{x^2} = \lim_{x\to 0} \left(\frac{1}{2} - \frac{x^2}{24} +
      \cdots\right) = \frac{1}{2}$。
  - problem: 计算 $\cos 0.2$ 的近似值，精确到小数点后四位。
    solution: >-
      取展开式前几项：$\cos x \approx 1 - \frac{x^2}{2!} + \frac{x^4}{4!}$。代入
      $x=0.2$：$\cos 0.2 \approx 1 - \frac{0.04}{2} + \frac{0.0016}{24} = 1 -
      0.02 + 0.0000667 = 0.9800667$。精确到四位小数为 $0.9801$。
---

