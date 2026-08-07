---
title: 微分
slug: differential
chapterSlug: derivatives
order: 3
summary: 微分是导数的另一种表达形式，它描述函数值的局部线性近似。
tags: [微分, dy, dx, 线性近似]
---

## 微分的定义

函数 $y=f(x)$ 在点 $x$ 处可微，是指当自变量增量 $\Delta x$ 很小时，函数增量可以写成：

$$
\Delta y = f(x+\Delta x) - f(x) = A\Delta x + o(\Delta x)
$$

其中 $A$ 与 $\Delta x$ 无关。我们称 $A\Delta x$ 为函数在 $x$ 处的微分，记作 $dy$：

$$
dy = f'(x)\,dx
$$

这里 $dx=\Delta x$ 是自变量的微分。

## 微分的几何意义

微分 $dy$ 表示切线纵坐标的增量，而 $\Delta y$ 是曲线纵坐标的实际增量。当 $dx$ 很小时，$dy \approx \Delta y$。

## 例题

**例 1** 求 $y=x^3$ 在 $x=2$，$dx=0.01$ 时的微分。

解：

$$
dy = 3x^2 dx = 3 \cdot 4 \cdot 0.01 = 0.12
$$
