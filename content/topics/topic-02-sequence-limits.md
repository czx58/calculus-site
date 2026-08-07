---
title: 数列的极限
slug: sequence-limits
chapterSlug: functions-and-limits
order: 3
summary: 当项数无限增大时，数列的值会趋向哪个数？这就是数列极限要回答的问题。
tags: [数列, 极限, ε-N]
---

## 直观理解

考虑数列

$$
a_n = \frac{1}{n}: \quad 1, \frac12, \frac13, \frac14, \dots
$$

当 $n$ 越来越大，$a_n$ 越来越接近 $0$。我们说这个数列的极限是 $0$，记作：

$$
\lim_{n \to \infty} \frac{1}{n} = 0
$$

## 严格定义（ε-N 语言）

对于数列 $\{a_n\}$，如果存在常数 $A$，使得对于任意给定的正数 $\varepsilon$（无论多小），总存在正整数 $N$，当 $n>N$ 时都有：

$$
|a_n - A| < \varepsilon
$$

那么就称数列 $\{a_n\}$ 的极限为 $A$。

> 初学者不必立刻背下这个定义，关键是记住：**极限描述的是“无限接近”的趋势**。

## 例题

**例 1** 求 $\displaystyle \lim_{n\to\infty} \frac{2n+1}{n}$。

解：

$$
\frac{2n+1}{n} = 2 + \frac{1}{n}
$$

当 $n\to\infty$ 时，$\frac{1}{n}\to 0$，所以极限为 $2$。
