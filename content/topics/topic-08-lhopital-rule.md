---
title: 洛必达法则
slug: lhopital-rule
chapterSlug: applications-of-derivatives
order: 1
summary: 遇到 0/0 或 ∞/∞ 型未定式时，洛必达法则可以把求极限转化为求导数的极限。
tags: [洛必达法则, 未定式, 极限]
---

## 洛必达法则

设函数 $f(x), g(x)$ 在点 $x_0$ 附近可导，且 $g'(x)\neq 0$。如果

$$
\lim_{x\to x_0} f(x) = \lim_{x\to x_0} g(x) = 0 \quad \text{或} \quad \pm\infty
$$

并且极限

$$
\lim_{x\to x_0} \frac{f'(x)}{g'(x)}
$$

存在（或为无穷大），则：

$$
\lim_{x\to x_0} \frac{f(x)}{g(x)} = \lim_{x\to x_0} \frac{f'(x)}{g'(x)}
$$

> 口诀：零比零、无穷比无穷，上下同时求导数。

## 例题

**例 1** 求 $\displaystyle \lim_{x\to 0} \frac{\sin x}{x}$。

解：这是 $0/0$ 型，使用洛必达法则：

$$
\lim_{x\to 0} \frac{\sin x}{x} = \lim_{x\to 0} \frac{\cos x}{1} = 1
$$

**例 2** 求 $\displaystyle \lim_{x\to +\infty} \frac{x^2}{e^x}$。

解：这是 $\infty/\infty$ 型，连续使用两次洛必达法则：

$$
\lim_{x\to +\infty} \frac{x^2}{e^x} = \lim_{x\to +\infty} \frac{2x}{e^x} = \lim_{x\to +\infty} \frac{2}{e^x} = 0
$$
