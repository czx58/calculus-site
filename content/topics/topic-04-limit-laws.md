---
title: 极限运算法则与两个重要极限
slug: limit-laws
chapterSlug: functions-and-limits
order: 5
summary: 掌握四则运算法则，并记住两个在求极限时反复出现的重要极限。
tags: [极限运算法则, 重要极限, sinx/x, e]
---

## 四则运算法则

设 $\lim f(x)=A$，$\lim g(x)=B$，则：

$$
\lim [f(x)\pm g(x)] = A \pm B
$$

$$
\lim [f(x)\cdot g(x)] = A \cdot B
$$

$$
\lim \frac{f(x)}{g(x)} = \frac{A}{B} \quad (B\neq 0)
$$

## 两个重要极限

### 重要极限 1

$$
\lim_{x \to 0} \frac{\sin x}{x} = 1
$$

**记忆口诀**：$x$ 很小时，$\sin x$ 和 $x$ 几乎一样长。

### 重要极限 2

$$
\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e
$$

等价地也常用：

$$
\lim_{x \to 0} (1 + x)^{\frac{1}{x}} = e
$$

其中 $e\approx 2.71828$ 是自然对数的底。

## 例题

**例 1** 求 $\displaystyle \lim_{x\to 0} \frac{\sin 3x}{x}$。

解：

$$
\frac{\sin 3x}{x} = 3 \cdot \frac{\sin 3x}{3x}
$$

令 $t=3x$，当 $x\to 0$ 时 $t\to 0$，所以：

$$
\lim_{x\to 0} \frac{\sin 3x}{x} = 3 \lim_{t\to 0} \frac{\sin t}{t} = 3
$$
