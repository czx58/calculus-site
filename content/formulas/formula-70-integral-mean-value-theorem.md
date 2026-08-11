---
title: 积分中值定理
slug: integral-mean-value-theorem
category: 定积分
latex: '\exists \xi \in [a,b], \ \int_a^b f(x) \, dx = f(\xi)(b-a)'
plaintext: 'exists c in [a,b]: int_a^b f(x) dx = f(c)(b-a)'
relatedTopicSlugs:
  - fundamental-theorem
usage: |-
  **积分中值定理**（定积分）

  设 $f(x)$ 在闭区间 $[a,b]$ 上连续，则存在 $\xi \in [a,b]$，使得
  $$\int_a^b f(x) \, dx = f(\xi)(b-a).$$

  **使用场景**：
  - 用于估计定积分的值，尤其是当被积函数复杂时，可转化为函数在某点的值乘以区间长度。
  - 用于证明积分不等式、处理极限问题（如积分上限函数求导）。
  - 在积分中值定理的基础上，可推导出积分第一中值定理的推广形式（如带权重的形式）。

  **注意事项**：
  - 定理要求 $f(x)$ 在 $[a,b]$ 上连续，若函数不连续，结论不一定成立。
  - 定理中的 $\xi$ 不一定唯一，但至少存在一个。
  - 当 $f(x)$ 恒为常数时，$\xi$ 可以取任意值。

  **常见变形**：
  - 若 $f(x)$ 在 $[a,b]$ 上连续，且 $g(x)$ 在 $[a,b]$ 上不变号且可积，则存在 $\xi \in [a,b]$，使得
  $$\int_a^b f(x)g(x) \, dx = f(\xi) \int_a^b g(x) \, dx.$$
  - 当 $b \to a$ 时，积分中值定理可用于证明积分上限函数的导数。
examples:
  - problem: '估计定积分 $\int_0^1 \frac{1}{1+x^2} \, dx$ 的取值范围。'
    solution: >-
      **解**：

      1. 令 $f(x) = \frac{1}{1+x^2}$，在 $[0,1]$ 上连续。

      2. 由积分中值定理，存在 $\xi \in [0,1]$，使得 $\int_0^1 \frac{1}{1+x^2} \, dx =
      f(\xi)(1-0) = \frac{1}{1+\xi^2}$。

      3. 因为 $0 \le \xi \le 1$，所以 $1 \le 1+\xi^2 \le 2$，因此 $\frac{1}{2} \le
      \frac{1}{1+\xi^2} \le 1$。

      4. 故 $\frac{1}{2} \le \int_0^1 \frac{1}{1+x^2} \, dx \le 1$。


      实际上，$\int_0^1 \frac{1}{1+x^2} \, dx = \frac{\pi}{4} \approx 0.785$，符合估计范围。
  - problem: '求极限 $\lim_{x \to 0} \frac{1}{x} \int_0^x e^{t^2} \, dt$。'
    solution: >-
      **解**：

      1. 由积分中值定理，存在 $\xi \in [0,x]$（当 $x>0$ 时）或 $\xi \in [x,0]$（当 $x<0$ 时），使得
      $\int_0^x e^{t^2} \, dt = e^{\xi^2} \cdot x$。

      2. 因此 $\frac{1}{x} \int_0^x e^{t^2} \, dt = e^{\xi^2}$。

      3. 当 $x \to 0$ 时，$\xi$ 夹在 $0$ 和 $x$ 之间，所以 $\xi \to 0$，从而 $e^{\xi^2} \to
      e^0 = 1$。

      4. 所以原极限为 $1$。


      （也可用洛必达法则验证。）
---

