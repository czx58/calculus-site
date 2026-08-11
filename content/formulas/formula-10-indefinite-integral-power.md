---
title: 幂函数不定积分
slug: indefinite-integral-power
category: 积分
latex: '\int x^n \, dx = \frac{x^{n+1}}{n+1} + C \quad (n \ne -1)'
plaintext: int x^n dx = x^(n+1)/(n+1) + C (n != -1)
relatedTopicSlugs:
  - indefinite-integral
usage: >-
  **使用方法**  

  幂函数不定积分公式用于计算形如 $x^n$ 的幂函数的原函数（不定积分），是积分学中最基础的工具之一。  


  **使用场景**  

  - 直接计算多项式函数的积分，例如 $\int (3x^2 + 2x + 1) \, dx$。  

  - 作为换元积分法、分部积分法的基础步骤。  

  - 在物理、工程问题中，对速度、加速度等幂函数形式进行积分求位移或速度。  


  **注意事项**  

  - 公式成立的前提是 $n \neq -1$。当 $n = -1$ 时，$\int x^{-1} \, dx = \ln|x| +
  C$，不可使用该公式。  

  - 积分结果必须加上任意常数 $C$，因为不定积分表示原函数族。  

  - 当 $n$ 为分数或负数时，公式仍然适用，例如 $n = \frac{1}{2}$ 或 $n = -3$，但需注意定义域（如 $x>0$ 时
  $x^{1/2}$ 才有意义）。  


  **常见变形**  

  - 系数可提出：$\int a \cdot x^n \, dx = a \cdot \frac{x^{n+1}}{n+1} + C$。  

  - 线性组合：$\int (a x^n + b x^m) \, dx = a\frac{x^{n+1}}{n+1} +
  b\frac{x^{m+1}}{m+1} + C$（$n,m \neq -1$）。  

  - 根式转化为幂：$\sqrt{x} = x^{1/2}$，$\frac{1}{x^2} = x^{-2}$。
examples:
  - problem: '求不定积分 $\int (3x^2 + 2x + 5) \, dx$。'
    solution: |-
      **解**：分别对每一项积分，利用幂函数公式 $\int x^n \, dx = \frac{x^{n+1}}{n+1} + C$。  
      1. 对 $3x^2$ 积分：系数3提出，$\int 3x^2 \, dx = 3 \cdot \frac{x^{3}}{3} = x^3$。  
      2. 对 $2x$ 积分：$\int 2x \, dx = 2 \cdot \frac{x^{2}}{2} = x^2$。  
      3. 对常数5积分：$\int 5 \, dx = 5x$（因为 $5 = 5x^0$，且 $n=0 \neq -1$，公式适用）。  
      4. 合并结果并加上积分常数：$\int (3x^2 + 2x + 5) \, dx = x^3 + x^2 + 5x + C$。
  - problem: '求不定积分 $\int \frac{1}{\sqrt{x}} \, dx$。'
    solution: |-
      **解**：先将根式转化为幂函数形式。  
      1. $\frac{1}{\sqrt{x}} = x^{-1/2}$。  
      2. 应用公式，其中 $n = -\frac{1}{2} \neq -1$：  
         $\int x^{-1/2} \, dx = \frac{x^{-1/2+1}}{-1/2+1} + C = \frac{x^{1/2}}{1/2} + C$。  
      3. 化简：$\frac{x^{1/2}}{1/2} = 2x^{1/2}$。  
      4. 因此，$\int \frac{1}{\sqrt{x}} \, dx = 2\sqrt{x} + C$。
---

