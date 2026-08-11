---
title: 弧长公式
slug: arc-length
category: 应用
latex: 's = \int_a^b \sqrt{1 + [f''(x)]^2} \, dx'
plaintext: s = int_a^b sqrt(1 + f'(x)^2) dx
relatedTopicSlugs:
  - fundamental-theorem
usage: >-
  弧长公式用于计算平面曲线 $y=f(x)$ 在区间 $[a,b]$ 上的长度。使用时需确保 $f'(x)$ 在 $[a,b]$
  上连续。常见变形包括参数方程形式 $L=\int_{\alpha}^{\beta}\sqrt{[x'(t)]^2+[y'(t)]^2}\,dt$
  和极坐标形式
  $L=\int_{\theta_1}^{\theta_2}\sqrt{r^2+[r'(\theta)]^2}\,d\theta$。注意：当曲线有尖点或导数不连续时，需分段处理；被积函数可能无初等原函数，此时可用数值积分。
examples:
  - problem: '求曲线 $y=x^{3/2}$ 从 $x=0$ 到 $x=4$ 的弧长。'
    solution: >-
      解：$f'(x)=\frac{3}{2}x^{1/2}$，则 $1+[f'(x)]^2=1+\frac{9}{4}x$。弧长
      $s=\int_0^4\sqrt{1+\frac{9}{4}x}\,dx$。令 $u=1+\frac{9}{4}x$，则
      $du=\frac{9}{4}dx$，当 $x=0$ 时 $u=1$，$x=4$ 时 $u=10$。所以
      $s=\frac{4}{9}\int_1^{10}\sqrt{u}\,du=\frac{4}{9}\cdot\frac{2}{3}u^{3/2}\Big|_1^{10}=\frac{8}{27}(10^{3/2}-1)$。
  - problem: 求曲线 $y=\ln x$ 从 $x=1$ 到 $x=2$ 的弧长。
    solution: >-
      解：$f'(x)=\frac{1}{x}$，则 $1+[f'(x)]^2=1+\frac{1}{x^2}=\frac{x^2+1}{x^2}$。弧长
      $s=\int_1^2\frac{\sqrt{x^2+1}}{x}\,dx$。令 $x=\tan t$，则 $dx=\sec^2
      t\,dt$，$\sqrt{x^2+1}=\sec t$，积分变为 $\int \frac{\sec t}{\tan t}\sec^2
      t\,dt=\int \frac{\sec t}{\sin t}\cdot\frac{1}{\cos t}\cdot\frac{1}{\cos^2
      t}?$ 更简便：令 $x=\sinh u$，则 $\sqrt{x^2+1}=\cosh u$，$dx=\cosh u\,du$，原积分
      $=\int \frac{\cosh u}{\sinh u}\cosh u\,du=\int \frac{\cosh^2 u}{\sinh
      u}\,du$，但此积分较复杂。换用换元 $t=\sqrt{x^2+1}$，则
      $x=\sqrt{t^2-1}$，$dx=\frac{t}{\sqrt{t^2-1}}dt$，积分 $=\int
      \frac{t}{\sqrt{t^2-1}}\cdot\frac{1}{\sqrt{t^2-1}}\,dt=\int
      \frac{t}{t^2-1}\,dt=\frac{1}{2}\ln|t^2-1|$，回代得
      $\frac{1}{2}\ln|x^2|=\ln|x|$？不对，需重新计算。正确做法：令 $x=\tan t$，则
      $\sqrt{x^2+1}=\sec t$，$dx=\sec^2 t\,dt$，积分 $=\int \frac{\sec t}{\tan
      t}\sec^2 t\,dt=\int \frac{\sec^3 t}{\tan t}\,dt$，此积分较繁。更简单：利用公式 $\int
      \frac{\sqrt{x^2+1}}{x}\,dx=\sqrt{x^2+1}-\ln\left|\frac{1+\sqrt{x^2+1}}{x}\right|+C$。因此
      $s=\left[\sqrt{x^2+1}-\ln\left|\frac{1+\sqrt{x^2+1}}{x}\right|\right]_1^2=\sqrt{5}-\ln\left(\frac{1+\sqrt{5}}{2}\right)-\sqrt{2}+\ln(1+\sqrt{2})$。
---

