---
title: 柯西中值定理
slug: cauchy-mean-value
category: 中值定理
latex: >-
  f,g \in C[a,b], \ f,g \in D(a,b), \ g'(x) \ne 0 \Rightarrow \exists \xi \in
  (a,b), \ \frac{f'(\xi)}{g'(\xi)} = \frac{f(b)-f(a)}{g(b)-g(a)}
plaintext: 'Exists c in (a,b): f''(c)/g''(c) = (f(b)-f(a))/(g(b)-g(a))'
relatedTopicSlugs:
  - monotonicity-extrema
  - lhopital-rule
usage: >-
  柯西中值定理是中值定理族中的重要成员，它推广了拉格朗日中值定理，用于研究两个函数在区间上的变化率关系。


  **使用场景**：

  - 当需要比较两个函数在区间端点上的增量与它们在某点导数之比时。

  - 证明涉及两个函数的等式或不等式，特别是当直接应用拉格朗日中值定理困难时。

  - 在求极限（如洛必达法则的证明）和讨论函数性态时经常用到。


  **注意事项**：

  - 条件必须满足：$f,g$ 在闭区间 $[a,b]$ 上连续，在开区间 $(a,b)$ 内可导，且 $g'(x) \neq 0$ 对所有 $x \in
  (a,b)$ 成立。

  - 若 $g(x)=x$，则退化为拉格朗日中值定理。

  - 结论中的 $\xi$ 不一定唯一，但至少存在一个。


  **常见变形**：

  - 将等式改写为 $[f(b)-f(a)]g'(\xi) = [g(b)-g(a)]f'(\xi)$。

  - 若 $g'(x) \neq 0$，可构造辅助函数
  $F(x)=f(x)-\frac{f(b)-f(a)}{g(b)-g(a)}g(x)$，然后应用罗尔定理。
examples:
  - problem: '设 $f(x)=x^2$，$g(x)=x^3$，在区间 $[1,2]$ 上验证柯西中值定理的正确性，并求出满足定理的 $\xi$。'
    solution: >-
      **解**：

      1. 验证条件：$f(x)=x^2$ 和 $g(x)=x^3$ 在 $[1,2]$ 上连续，在 $(1,2)$ 内可导，且 $g'(x)=3x^2
      \neq 0$ 对 $x \in (1,2)$ 成立。

      2. 计算端点值：$f(1)=1, f(2)=4, g(1)=1, g(2)=8$。

      3. 代入柯西中值定理公式：存在 $\xi \in (1,2)$ 使得 $\frac{2\xi}{3\xi^2} = \frac{4-1}{8-1}
      = \frac{3}{7}$。

      4. 化简得 $\frac{2}{3\xi} = \frac{3}{7}$，解得 $\xi = \frac{14}{9}$。

      5. 检查 $\xi = \frac{14}{9} \approx 1.556 \in (1,2)$，满足条件。因此 $\xi =
      \frac{14}{9}$。
  - problem: >-
      证明：当 $0 < a < b$ 时，存在 $\xi \in (a,b)$ 使得 $\frac{e^b - e^a}{b-a} =
      e^{\xi}$。
    solution: >-
      **证明**：

      1. 取 $f(x)=e^x$，$g(x)=x$，则 $f,g$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，且 $g'(x)=1
      \neq 0$。

      2. 由柯西中值定理，存在 $\xi \in (a,b)$ 使得 $\frac{f'(\xi)}{g'(\xi)} =
      \frac{f(b)-f(a)}{g(b)-g(a)}$。

      3. 代入得 $\frac{e^{\xi}}{1} = \frac{e^b - e^a}{b-a}$，即 $\frac{e^b -
      e^a}{b-a} = e^{\xi}$。

      4. 证毕。
---

