---
title: 不定积分基本公式
slug: indefinite-integral
chapterSlug: integrals
order: 1
summary: 不定积分是求导的逆运算，结果是一族相差常数的原函数。
tags: [不定积分, 原函数, 积分公式]
---

## 什么是不定积分

如果 $F'(x) = f(x)$，那么 $F(x)$ 就称为 $f(x)$ 的一个**原函数**。$f(x)$ 的全体原函数称为**不定积分**，记作

$$
\int f(x) \, dx = F(x) + C
$$

其中 $C$ 为任意常数，称为积分常数。

## 基本积分公式

| 被积函数 | 不定积分 |
|---|---|
| $x^n \ (n \ne -1)$ | $\frac{x^{n+1}}{n+1} + C$ |
| $\frac{1}{x}$ | $\ln|x| + C$ |
| $e^x$ | $e^x + C$ |
| $a^x$ | $\frac{a^x}{\ln a} + C$ |
| $\sin x$ | $-\cos x + C$ |
| $\cos x$ | $\sin x + C$ |
| $\sec^2 x$ | $\tan x + C$ |

## 积分的基本性质

$$
\int [f(x) \pm g(x)] \, dx = \int f(x)\,dx \pm \int g(x)\,dx
$$

$$
\int k f(x) \, dx = k \int f(x)\,dx \quad (k \text{ 为常数})
$$

## 例题

**例 1** 求 $\displaystyle \int x^3 \, dx$。

解：

$$
\int x^3 \, dx = \frac{x^4}{4} + C
$$

**例 2** 求 $\displaystyle \int (2x + \cos x) \, dx$。

解：

$$
\int (2x + \cos x) \, dx = x^2 + \sin x + C
$$
