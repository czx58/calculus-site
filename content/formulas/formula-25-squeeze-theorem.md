---
title: 夹逼准则
slug: squeeze-theorem
category: 极限
latex: >-
  g(x) \le f(x) \le h(x), \ \lim_{x \to a} g(x) = \lim_{x \to a} h(x) = L
  \Rightarrow \lim_{x \to a} f(x) = L
plaintext: 'If g(x) <= f(x) <= h(x) and lim g(x) = lim h(x) = L, then lim f(x) = L'
relatedTopicSlugs:
  - limit-laws
  - function-limits
usage: >-
  夹逼准则（又称两边夹定理）是求极限的一种重要方法，尤其适用于函数表达式较为复杂、无法直接计算极限的情形。其核心思想是：若函数 $f(x)$ 被两个函数
  $g(x)$ 和 $h(x)$ 夹在中间，且 $g(x)$ 与 $h(x)$ 在 $x \to a$ 时趋于同一极限 $L$，则 $f(x)$ 也必然趋于
  $L$。


  **使用场景：**

  - 函数表达式中含有振荡项（如 $\sin(1/x)$、$\cos(1/x)$）且不易直接求极限时。

  - 函数中含有无穷小与有界函数的乘积，如 $x \sin(1/x)$ 在 $x \to 0$ 时。

  - 含有阶乘、指数、幂函数等组合，难以直接化简时。


  **注意事项：**

  - 必须确保不等式 $g(x) \le f(x) \le h(x)$ 在 $x$ 接近 $a$ 的某个去心邻域内成立（通常只需在极限点附近成立即可）。

  - 两个夹逼函数 $g(x)$ 和 $h(x)$ 的极限必须相等且存在，否则不能使用。

  - 夹逼准则同样适用于数列极限（$n \to \infty$ 时）。


  **常见变形：**

  - 利用常见不等式：如 $|\sin x| \le |x|$、$1 - \frac{x^2}{2} \le \cos x \le 1$ 等。

  - 对于分式，可将分子或分母放大或缩小，构造出上下界。

  - 对于数列，常用 $n$ 的幂次比较来构造夹逼。


  **公式形式：**

  若存在 $a$ 的某去心邻域，使得 $g(x) \le f(x) \le h(x)$，且 $\lim_{x \to a} g(x) = \lim_{x
  \to a} h(x) = L$，则 $\lim_{x \to a} f(x) = L$。
examples:
  - problem: '求极限 $\lim_{x \to 0} x^2 \sin\frac{1}{x}$。'
    solution: >-
      由于 $\sin\frac{1}{x}$ 在 $x \to 0$ 时振荡，无法直接求极限。但注意到 $\sin$ 函数有界：$-1 \le
      \sin\frac{1}{x} \le 1$。


      两边乘以 $x^2$（注意 $x^2 \ge 0$，不等式方向不变）：

      $$-x^2 \le x^2 \sin\frac{1}{x} \le x^2.$$


      又因为 $\lim_{x \to 0} (-x^2) = 0$，$\lim_{x \to 0} x^2 = 0$，即左右两边的极限均为 0。


      根据夹逼准则，可得：

      $$\lim_{x \to 0} x^2 \sin\frac{1}{x} = 0.$$
  - problem: >-
      求极限 $\lim_{n \to \infty} \frac{1}{\sqrt{n^2+1}} + \frac{1}{\sqrt{n^2+2}} +
      \cdots + \frac{1}{\sqrt{n^2+n}}$。
    solution: >-
      设数列 $a_n = \sum_{k=1}^{n} \frac{1}{\sqrt{n^2+k}}$。


      因为 $1 \le k \le n$，所以 $n^2+1 \le n^2+k \le n^2+n$，于是分母越大值越小，可得：

      $$\frac{n}{\sqrt{n^2+n}} \le a_n \le \frac{n}{\sqrt{n^2+1}}.$$


      计算左右两边极限：

      $$\lim_{n \to \infty} \frac{n}{\sqrt{n^2+n}} = \lim_{n \to \infty}
      \frac{1}{\sqrt{1+1/n}} = 1,$$

      $$\lim_{n \to \infty} \frac{n}{\sqrt{n^2+1}} = \lim_{n \to \infty}
      \frac{1}{\sqrt{1+1/n^2}} = 1.$$


      因此左右两边极限均为 1，由夹逼准则得：

      $$\lim_{n \to \infty} a_n = 1.$$
---

