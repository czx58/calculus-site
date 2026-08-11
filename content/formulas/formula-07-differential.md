---
title: 微分公式
slug: differential-formula
category: 微分
latex: 'dy = f''(x)\,dx'
plaintext: dy = f'(x) dx
relatedTopicSlugs:
  - differential
usage: >-
  微分公式 $dy = f'(x)\,dx$ 是微积分中的基本工具，用于描述函数在某一点附近的线性近似。它表示当自变量 $x$ 有一个微小增量 $dx$
  时，因变量 $y$ 的近似增量 $dy$ 等于函数在该点的导数 $f'(x)$ 乘以 $dx$。


  **使用场景**：

  - 近似计算：当 $dx$ 很小时，用 $dy$ 近似代替实际增量 $\Delta y$。

  - 求解相关变化率问题。

  - 在积分中作为变量替换的基础。


  **注意事项**：

  - $dx$ 是自变量的微分，可以视为一个非零的微小量，但通常作为形式记号。

  - 公式要求函数 $f(x)$ 在 $x$ 处可导。

  - 对于复合函数，需使用链式法则求导后再写微分形式。


  **常见变形**：

  - 若 $y = f(u)$，$u = g(x)$，则 $dy = f'(u)\,du = f'(g(x))g'(x)\,dx$。

  - 若 $x$ 是自变量，$dx = \Delta x$，但 $dy$ 不一定等于 $\Delta y$，仅当 $f$ 为线性函数时等号成立。

  - 可以将微分形式用于分离变量法解微分方程。
examples:
  - problem: 求函数 $y = \sin(x^2)$ 的微分 $dy$。
    solution: >-
      令 $u = x^2$，则 $y = \sin u$。由链式法则，$dy = \cos u \, du$。又因为 $du = 2x \,
      dx$，所以 $dy = \cos(x^2) \cdot 2x \, dx = 2x\cos(x^2)\,dx$。
  - problem: '利用微分近似计算 $\sqrt{4.1}$ 的近似值。'
    solution: >-
      设 $f(x) = \sqrt{x}$，取 $x_0 = 4$，$dx = 0.1$。则 $f'(x) =
      \frac{1}{2\sqrt{x}}$，所以 $f'(4) = \frac{1}{4}$。由微分公式，$dy = f'(4)\,dx =
      \frac{1}{4} \times 0.1 = 0.025$。因此 $\sqrt{4.1} \approx f(4) + dy = 2 +
      0.025 = 2.025$。
---

