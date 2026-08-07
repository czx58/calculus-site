---
title: 链式法则
slug: chain-rule
chapterSlug: derivatives
order: 4
summary: 链式法则用于求复合函数的导数，核心思想是“由外到内，层层求导”。
tags: [导数, 链式法则, 复合函数]
---

## 什么是复合函数

如果 $y$ 是 $u$ 的函数，而 $u$ 又是 $x$ 的函数，那么 $y$ 通过 $u$ 成为 $x$ 的函数，记作 $y = f(g(x))$。

例如：$y = \sin(x^2)$ 可以看作 $y = \sin u$，$u = x^2$。

## 链式法则公式

$$
\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}
$$

或者写成：

$$
(f(g(x)))' = f'(g(x)) \cdot g'(x)
$$

## 记忆口诀

“外层函数求导，内层函数照抄，再乘以内层函数的导数。”

## 例题

**例 1** 求 $y = (3x+2)^4$ 的导数。

解：令 $u = 3x+2$，则 $y = u^4$。

$$
\frac{dy}{du} = 4u^3, \quad \frac{du}{dx} = 3
$$

所以

$$
y' = 4u^3 \cdot 3 = 12(3x+2)^3
$$

**例 2** 求 $y = e^{x^2}$ 的导数。

解：令 $u = x^2$，则 $y = e^u$。

$$
y' = e^u \cdot 2x = 2x e^{x^2}
$$
