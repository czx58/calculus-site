---
title: 导数的定义与几何意义
slug: derivative-definition
chapterSlug: derivatives
order: 1
summary: 导数是函数在某一点处的瞬时变化率，几何上对应切线的斜率。
tags: [导数, 切线, 变化率, 极限]
---

## 从平均变化率到瞬时变化率

设一辆汽车从 $t=a$ 到 $t=b$ 的位移为 $s(b)-s(a)$，则这段时间内的平均速度为：

$$
\bar{v} = \frac{s(b)-s(a)}{b-a}
$$

如果想求 $t=a$ 这一瞬间的速度，就让 $b$ 无限靠近 $a$，得到瞬时速度：

$$
v(a) = \lim_{h\to 0} \frac{s(a+h)-s(a)}{h}
$$

这正是导数的思想。

## 导数的定义

函数 $f(x)$ 在点 $x_0$ 处的导数定义为：

$$
f'(x_0) = \lim_{h\to 0} \frac{f(x_0+h)-f(x_0)}{h}
$$

也可写作：

$$
f'(x_0) = \lim_{x\to x_0} \frac{f(x)-f(x_0)}{x-x_0}
$$

## 几何意义

$f'(x_0)$ 就是曲线 $y=f(x)$ 在点 $(x_0,f(x_0))$ 处**切线的斜率**。

切线方程为：

$$
y - f(x_0) = f'(x_0)(x-x_0)
$$

## 例题

**例 1** 用定义求 $f(x)=x^2$ 在 $x=1$ 处的导数。

解：

$$
\begin{aligned}
f'(1) &= \lim_{h\to 0} \frac{(1+h)^2-1^2}{h} \\
      &= \lim_{h\to 0} \frac{1+2h+h^2-1}{h} \\
      &= \lim_{h\to 0} (2+h) = 2
\end{aligned}
$$
