---
title: 牛顿-莱布尼茨公式
slug: fundamental-theorem
chapterSlug: integrals
order: 2
summary: 微积分基本定理把定积分与原函数联系起来，让定积分计算变得简单直接。
tags: [定积分, 牛顿-莱布尼茨公式, 微积分基本定理]
---

## 定积分的直观意义

函数 $f(x)$ 在区间 $[a,b]$ 上的定积分 $\displaystyle \int_a^b f(x)\,dx$，几何上表示曲线 $y=f(x)$ 与 $x$ 轴之间在该区间上的**有向面积**。

## 牛顿-莱布尼茨公式

如果 $F(x)$ 是 $f(x)$ 在 $[a,b]$ 上的一个原函数，那么

$$
\int_a^b f(x) \, dx = F(b) - F(a)
$$

也常写作

$$
\int_a^b f(x) \, dx = \left. F(x) \right|_a^b
$$

## 为什么重要

在微积分基本定理出现之前，计算定积分需要用繁琐的求和极限。这个公式告诉我们：只要找到原函数，定积分就变成了简单的代入相减。

## 例题

**例 1** 计算 $\displaystyle \int_0^1 x^2 \, dx$。

解：因为 $\left(\frac{x^3}{3}\right)' = x^2$，所以

$$
\int_0^1 x^2 \, dx = \left. \frac{x^3}{3} \right|_0^1 = \frac{1}{3} - 0 = \frac{1}{3}
$$

**例 2** 计算 $\displaystyle \int_0^{\pi} \sin x \, dx$。

解：因为 $(-\cos x)' = \sin x$，所以

$$
\int_0^{\pi} \sin x \, dx = \left. (-\cos x) \right|_0^{\pi} = -(-1) - (-1) = 2
$$
