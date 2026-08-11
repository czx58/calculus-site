---
title: 平面图形面积
slug: area-cartesian
category: 应用
latex: 'A = \int_a^b [f(x) - g(x)] \, dx'
plaintext: 'A = int_a^b [f(x) - g(x)] dx'
relatedTopicSlugs:
  - fundamental-theorem
usage: >-
  该公式用于计算由两条曲线 $y=f(x)$ 和 $y=g(x)$ 在区间 $[a,b]$ 上所围成的平面图形的面积，其中 $f(x) \geq g(x)$
  恒成立。


  **使用场景：**

  - 求两条函数曲线之间的面积。

  - 当曲线在 $x$ 轴上方或下方时，该公式依然适用，因为积分计算的是函数值之差。


  **注意事项：**

  - 必须确保在积分区间内 $f(x) \geq g(x)$，否则面积可能为负。若不确定，可先画出图像或分段处理。

  - 若曲线关于 $y$ 轴对称或积分区间对称，可简化计算。


  **常见变形：**

  - 若 $g(x)=0$，则公式退化为 $A = \int_a^b f(x) \, dx$，即曲线与 $x$ 轴围成的面积。

  - 若积分变量为 $y$，可交换 $x$ 与 $y$ 的角色，得到 $A = \int_c^d [\phi(y) - \psi(y)] \, dy$。
examples:
  - problem: 求由曲线 $y = x^2$ 和 $y = 2x$ 所围成的平面图形的面积。
    solution: |-
      1. 求交点：令 $x^2 = 2x$，得 $x(x-2)=0$，所以 $x=0$ 或 $x=2$。
      2. 确定上下函数：在区间 $[0,2]$ 上，$2x \geq x^2$，因此 $f(x)=2x$，$g(x)=x^2$。
      3. 应用公式：
         $$A = \int_0^2 (2x - x^2) \, dx$$
      4. 计算积分：
         $$A = \left[ x^2 - \frac{x^3}{3} \right]_0^2 = (4 - \frac{8}{3}) - 0 = \frac{4}{3}$$

      所以面积为 $\frac{4}{3}$。
  - problem: '求曲线 $y = \sin x$ 与 $y = \cos x$ 在区间 $[0, \pi]$ 上围成的面积。'
    solution: >-
      1. 求交点：令 $\sin x = \cos x$，得 $\tan x = 1$，在 $[0, \pi]$ 上，$x =
      \frac{\pi}{4}$。

      2. 分段：在 $[0, \frac{\pi}{4}]$ 上，$\cos x \geq \sin x$；在 $[\frac{\pi}{4},
      \pi]$ 上，$\sin x \geq \cos x$。

      3. 面积分为两段：
         $$A = \int_0^{\pi/4} (\cos x - \sin x) \, dx + \int_{\pi/4}^{\pi} (\sin x - \cos x) \, dx$$
      4. 计算：
         第一段：$\left[ \sin x + \cos x \right]_0^{\pi/4} = (\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}) - (0+1) = \sqrt{2} - 1$
         第二段：$\left[ -\cos x - \sin x \right]_{\pi/4}^{\pi} = (-(-1) - 0) - (-\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}) = 1 + \sqrt{2}$
         总和：$A = (\sqrt{2} - 1) + (1 + \sqrt{2}) = 2\sqrt{2}$

      所以面积为 $2\sqrt{2}$。
---

