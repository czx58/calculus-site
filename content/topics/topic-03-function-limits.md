---
title: 函数的极限
slug: function-limits
chapterSlug: functions-and-limits
order: 4
summary: 函数极限研究自变量趋近某一点或无穷大时，函数值的趋势。
tags: [函数极限, 左右极限, 无穷大]
---

## $x \to x_0$ 时的极限

函数 $f(x)$ 在 $x$ 无限接近 $x_0$ 时，如果函数值无限接近某个常数 $A$，则称 $A$ 为 $f(x)$ 当 $x\to x_0$ 时的极限：

$$
\lim_{x \to x_0} f(x) = A
$$

**注意**：极限只关心 $x$ 接近 $x_0$ 时的趋势，并不要求 $f(x_0)$ 有定义。

## 左右极限

- 从右侧接近：$\displaystyle \lim_{x \to x_0^+} f(x)$
- 从左侧接近：$\displaystyle \lim_{x \to x_0^-} f(x)$

极限存在的充要条件是左右极限存在且相等。

## 例题

**例 1** 设 $f(x)=|x|/x$（$x\neq 0$），讨论 $x\to 0$ 时的极限。

解：

当 $x>0$ 时，$f(x)=1$；当 $x<0$ 时，$f(x)=-1$。因此：

$$
\lim_{x\to 0^+} f(x)=1, \quad \lim_{x\to 0^-} f(x)=-1
$$

左右极限不相等，所以 $x\to 0$ 时极限不存在。
