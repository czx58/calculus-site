---
title: 积分 tan
slug: integral-tan
category: 积分
latex: '\int \tan x \, dx = -\ln|\cos x| + C'
plaintext: int tan x dx = -ln|cos x| + C
relatedTopicSlugs:
  - indefinite-integral
usage: |-
  该公式用于求解正切函数的积分，是三角函数积分中的基本公式之一。

  **使用场景**：
  - 直接计算 $\int \tan x \, dx$ 形式的积分。
  - 在更复杂的积分中，通过换元法或分部积分法将积分转化为 $\int \tan x \, dx$ 的形式。

  **注意事项**：
  - 结果中的绝对值符号不可省略，因为 $\cos x$ 可能为负，而对数函数的定义域要求真数为正。
  - 积分常数 $C$ 不要遗漏。

  **常见变形**：
  - $\int \cot x \, dx = \ln|\sin x| + C$，类似地推导。
  - $\int \tan(ax+b) \, dx = -\frac{1}{a} \ln|\cos(ax+b)| + C$。
  - 利用恒等式 $\tan x = \frac{\sin x}{\cos x}$，通过换元 $u = \cos x$ 推导。
examples:
  - problem: '计算 $\int \tan x \, dx$。'
    solution: >-
      解：


      令 $u = \cos x$，则 $du = -\sin x \, dx$，即 $\sin x \, dx = -du$。


      原积分变为：


      $$\int \tan x \, dx = \int \frac{\sin x}{\cos x} \, dx = \int
      \frac{-du}{u} = -\ln|u| + C = -\ln|\cos x| + C。$$


      因此，$\int \tan x \, dx = -\ln|\cos x| + C$。
  - problem: '计算 $\int \tan(2x) \, dx$。'
    solution: >-
      解：


      令 $u = 2x$，则 $du = 2 \, dx$，即 $dx = \frac{1}{2} du$。


      原积分变为：


      $$\int \tan(2x) \, dx = \int \tan u \cdot \frac{1}{2} \, du = \frac{1}{2}
      \int \tan u \, du = \frac{1}{2} (-\ln|\cos u|) + C = -\frac{1}{2} \ln|\cos
      2x| + C。$$


      因此，$\int \tan(2x) \, dx = -\frac{1}{2} \ln|\cos 2x| + C$。
---

