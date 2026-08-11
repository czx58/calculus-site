---
title: 对称区间奇偶积分
slug: definite-integral-odd-even
category: 定积分
latex: >-
  \int_{-a}^a f(x) \, dx = \begin{cases} 0, & f \text{ 奇} \\ 2\int_0^a f(x)dx, &
  f \text{ 偶} \end{cases}
plaintext: 'int_{-a}^{a} f(x) dx = 0 if f odd, 2*int_0^a f(x)dx if f even'
relatedTopicSlugs:
  - fundamental-theorem
usage: >-
  对称区间奇偶积分公式用于计算在对称区间 $[-a,a]$ 上函数的定积分，当被积函数具有奇偶性时可简化计算。


  **使用场景**：

  - 被积函数为奇函数或偶函数，且积分区间关于原点对称。

  - 计算某些特定函数的积分，如 $\sin x$、$\cos x$、$x^n$ 等。


  **注意事项**：

  - 必须先判断函数的奇偶性，确保区间对称。

  - 奇函数在对称区间上的积分为 0，偶函数则为单侧积分的两倍。

  - 若函数非奇非偶，则不能直接使用此公式。


  **常见变形**：

  - 若积分区间为 $[-a,a]$，可先拆分区间再合并：$\int_{-a}^a f(x)dx = \int_{-a}^0 f(x)dx +
  \int_0^a f(x)dx$，然后利用奇偶性。

  - 对于偶函数，可转化为 $2\int_0^a f(x)dx$，简化计算。

  - 对于奇函数，直接得 0，无需计算。
examples:
  - problem: '计算定积分 $\int_{-\pi}^{\pi} \sin x \, dx$。'
    solution: >-
      1. 判断奇偶性：函数 $f(x)=\sin x$ 是奇函数，因为 $\sin(-x) = -\sin x$。

      2. 应用公式：由于 $f(x)$ 为奇函数，且积分区间为 $[-\pi, \pi]$，对称，故 $\int_{-\pi}^{\pi} \sin x
      \, dx = 0$。

      3. 结果：$0$。
  - problem: '计算定积分 $\int_{-2}^{2} (3x^2 + 2) \, dx$。'
    solution: >-
      1. 判断奇偶性：函数 $f(x)=3x^2+2$ 是偶函数，因为 $f(-x)=3(-x)^2+2=3x^2+2=f(x)$。

      2. 应用公式：由于 $f(x)$ 为偶函数，且积分区间为 $[-2,2]$，对称，故 $\int_{-2}^{2} (3x^2+2) \, dx
      = 2\int_{0}^{2} (3x^2+2) \, dx$。

      3. 计算单侧积分：$\int_{0}^{2} (3x^2+2) \, dx = \left[ x^3 + 2x \right]_{0}^{2} =
      (8+4) - (0+0) = 12$。

      4. 乘以 2：$2 \times 12 = 24$。

      5. 结果：$24$。
---

