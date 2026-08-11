---
title: 旋转体体积
slug: volume-disk
category: 应用
latex: 'V = \pi \int_a^b [f(x)]^2 \, dx'
plaintext: V = pi int_a^b f(x)^2 dx
relatedTopicSlugs:
  - fundamental-theorem
usage: >-
  旋转体体积公式用于计算由曲线 $y=f(x)$ 绕 $x$ 轴旋转一周所生成的旋转体的体积。


  **使用场景：**

  - 当旋转轴为 $x$ 轴，且被旋转的曲线为 $y=f(x)$，$x$ 的取值范围为 $[a,b]$ 时，可直接使用此公式。

  - 若旋转轴为 $y$ 轴，则需将函数转化为 $x=g(y)$，并对 $y$ 积分，公式变为 $V = \pi \int_c^d [g(y)]^2 \,
  dy$。

  - 若旋转体由两条曲线围成的区域绕轴旋转，则需用外半径平方减内半径平方，即 $V = \pi \int_a^b ([f_{\text{外}}(x)]^2 -
  [f_{\text{内}}(x)]^2) \, dx$。


  **注意事项：**

  - 函数 $f(x)$ 在 $[a,b]$ 上必须连续且非负（若为负，取其绝对值）。

  - 积分区间 $[a,b]$ 应正确对应旋转体的范围。

  - 若旋转轴不是坐标轴，需先平移或调整公式。


  **常见变形：**

  - 绕 $y$ 轴旋转：$V = 2\pi \int_a^b x f(x) \, dx$（壳层法）。

  - 参数方程形式：若曲线由参数方程给出，可转换为相应积分。
examples:
  - problem: '求由曲线 $y = \sqrt{x}$，直线 $x=1$，$x=4$ 及 $x$ 轴所围成的图形绕 $x$ 轴旋转一周所得旋转体的体积。'
    solution: >-
      **解：**


      1. 确定积分区间：$a=1$，$b=4$。

      2. 应用公式：$V = \pi \int_1^4 (\sqrt{x})^2 \, dx = \pi \int_1^4 x \, dx$。

      3. 计算积分：$\int_1^4 x \, dx = \left[ \frac{x^2}{2} \right]_1^4 =
      \frac{16}{2} - \frac{1}{2} = \frac{15}{2}$。

      4. 乘以 $\pi$：$V = \frac{15\pi}{2}$。


      因此，旋转体体积为 $\frac{15\pi}{2}$。
  - problem: 求由曲线 $y = \sin x$，$x$ 轴，$x=0$，$x=\pi$ 所围成的图形绕 $x$ 轴旋转一周所得旋转体的体积。
    solution: >-
      **解：**


      1. 确定积分区间：$a=0$，$b=\pi$。

      2. 应用公式：$V = \pi \int_0^\pi (\sin x)^2 \, dx$。

      3. 利用恒等式 $\sin^2 x = \frac{1 - \cos 2x}{2}$，得：
         $V = \pi \int_0^\pi \frac{1 - \cos 2x}{2} \, dx = \frac{\pi}{2} \int_0^\pi (1 - \cos 2x) \, dx$。
      4. 计算积分：$\int_0^\pi (1 - \cos 2x) \, dx = \left[ x - \frac{\sin 2x}{2}
      \right]_0^\pi = (\pi - 0) - (0 - 0) = \pi$。

      5. 乘以 $\frac{\pi}{2}$：$V = \frac{\pi^2}{2}$。


      因此，旋转体体积为 $\frac{\pi^2}{2}$。
---

