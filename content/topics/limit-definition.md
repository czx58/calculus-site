---
title: 极限的定义
slug: limit-definition
chapterSlug: functions-and-limits
order: 3
summary: 极限描述的是函数或数列在自变量无限接近某一点时的“趋势”。
tags: [极限, 定义, ε-δ, 趋势]
---

## 极限的直观理解

当我们说“$x$ 趋近于 $a$ 时，$f(x)$ 的极限是 $L$”，意思是：只要 $x$ 足够靠近 $a$（但不等于 $a$），$f(x)$ 就可以任意靠近 $L$。

这就像你朝一扇门走去，你离门越近，你和门的距离就越小；极限就是你“将要到达”的位置。

## 函数极限的 ε-δ 定义

设函数 $f(x)$ 在点 $a$ 的某去心邻域内有定义。如果对于任意给定的正数 $\varepsilon > 0$，总存在正数 $\delta > 0$，使得当 $0 < |x-a| < \delta$ 时，都有

$$
|f(x) - L| < \varepsilon
$$

那么就称 $L$ 为 $f(x)$ 当 $x \to a$ 时的极限，记作

$$
\lim_{x \to a} f(x) = L
$$

> 大一阶段不必死记硬背 ε-δ 语言，关键是理解“无限接近”这一核心思想。

## 单侧极限

- 左极限：$x$ 从小于 $a$ 的方向趋近，记作 $\displaystyle \lim_{x \to a^-} f(x)$
- 右极限：$x$ 从大于 $a$ 的方向趋近，记作 $\displaystyle \lim_{x \to a^+} f(x)$

极限存在当且仅当左右极限都存在且相等。

## 例题

**例 1** 讨论 $f(x) = \begin{cases} x+1, & x < 0 \\ x^2, & x \ge 0 \end{cases}$ 在 $x=0$ 处的极限。

解：

$$
\lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} (x+1) = 1
$$

$$
\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} x^2 = 0
$$

因为左右极限不相等，所以 $\displaystyle \lim_{x \to 0} f(x)$ 不存在。
