---
title: 基本求导法则
slug: derivative-rules
chapterSlug: derivatives
order: 2
summary: 记住基本初等函数的导数公式，并掌握四则运算与复合函数的求导法则。
tags: [求导公式, 链式法则, 乘积法则, 商法则]
---

## 基本初等函数的导数

| 函数 | 导数 |
|---|---|
| $C$（常数） | $0$ |
| $x^n$ | $nx^{n-1}$ |
| $e^x$ | $e^x$ |
| $a^x$ | $a^x \ln a$ |
| $\ln x$ | $1/x$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |

## 四则运算法则

设 $u(x), v(x)$ 可导：

$$
(u \pm v)' = u' \pm v'
$$

$$
(uv)' = u'v + uv'
$$

$$
\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}
$$

## 复合函数求导（链式法则）

若 $y=f(u)$，$u=g(x)$，则：

$$
\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}
$$

或者写成：

$$
(f(g(x)))' = f'(g(x)) \cdot g'(x)
$$

## 例题

**例 1** 求 $y=(2x+1)^3$ 的导数。

解：令 $u=2x+1$，则 $y=u^3$。

$$
\frac{dy}{dx}=3u^2 \cdot 2 = 6(2x+1)^2
$$
