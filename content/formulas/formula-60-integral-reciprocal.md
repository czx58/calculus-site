---
title: 积分倒数
slug: integral-reciprocal
category: 积分
latex: '\int \frac{1}{x} \, dx = \ln|x| + C'
plaintext: int 1/x dx = ln|x| + C
relatedTopicSlugs:
  - indefinite-integral
usage: |-
  **积分倒数公式**：

  $$\int \frac{1}{x} \, dx = \ln|x| + C$$

  **使用场景**：
  - 当被积函数为 $\frac{1}{x}$ 时，直接使用此公式。
  - 在求解微分方程、计算面积、物理中的功等问题中常见。

  **注意事项**：
  - 必须加绝对值符号，因为 $\ln$ 的定义域为正数，而 $x$ 可能为负。
  - 积分常数 $C$ 不能遗漏。
  - 当 $x$ 在某个区间内恒为正或恒为负时，可以去掉绝对值，但通常保留绝对值以确保普遍性。

  **常见变形**：
  - $\int \frac{1}{ax+b} \, dx = \frac{1}{a} \ln|ax+b| + C$ （$a \neq 0$）
  - 通过换元法，可将形如 $\int \frac{g'(x)}{g(x)} \, dx$ 的积分化为 $\ln|g(x)| + C$。
examples:
  - problem: '计算不定积分：$\int \frac{2}{x} \, dx$'
    solution: |-
      **解**：

      将常数因子提出：

      $$\int \frac{2}{x} \, dx = 2 \int \frac{1}{x} \, dx$$

      应用积分倒数公式：

      $$= 2 \ln|x| + C$$

      所以，$\int \frac{2}{x} \, dx = 2\ln|x| + C$。
  - problem: '计算不定积分：$\int \frac{1}{3x+1} \, dx$'
    solution: >-
      **解**：


      令 $u = 3x+1$，则 $du = 3 \, dx$，即 $dx = \frac{1}{3} du$。


      代入得：


      $$\int \frac{1}{3x+1} \, dx = \int \frac{1}{u} \cdot \frac{1}{3} \, du =
      \frac{1}{3} \int \frac{1}{u} \, du$$


      应用积分倒数公式：


      $$= \frac{1}{3} \ln|u| + C = \frac{1}{3} \ln|3x+1| + C$$


      所以，$\int \frac{1}{3x+1} \, dx = \frac{1}{3} \ln|3x+1| + C$。
---

