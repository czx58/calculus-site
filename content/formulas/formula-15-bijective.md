---
title: 双射的定义
slug: bijective-definition
category: 函数
latex: 'f \text{ 是单射且 } f \text{ 是满射}'
plaintext: f is injective and f is surjective
relatedTopicSlugs:
  - injective-surjective-bijective
usage: >-
  **双射的定义**：函数 $f: A \to B$ 是双射，当且仅当 $f$ 既是单射又是满射，即 $f$ 是单射且 $f$ 是满射。


  **使用场景**：

  - 在集合论、抽象代数、拓扑学中，双射用于建立两个集合之间的一一对应关系。

  - 当需要证明两个集合具有相同的势（基数）时，构造双射是核心方法。

  - 在函数复合与逆函数的研究中，双射是存在逆函数的充要条件。


  **注意事项**：

  - 验证双射必须分两步：先验证单射（若 $x_1 \neq x_2$，则 $f(x_1) \neq f(x_2)$，或等价地 $f(x_1)=f(x_2)
  \Rightarrow x_1=x_2$）；再验证满射（对任意 $y \in B$，存在 $x \in A$ 使得 $f(x)=y$）。

  - 单射和满射缺一不可，例如 $f: \mathbb{R} \to \mathbb{R}, f(x)=x^2$ 既非单射也非满射；$f(x)=e^x$
  是单射但非满射（值域为正实数）。


  **常见变形**：

  - 等价定义：$f$ 是双射当且仅当存在函数 $g: B \to A$ 使得 $g \circ f = \mathrm{id}_A$ 且 $f \circ
  g = \mathrm{id}_B$。

  - 在有限集上，若 $|A|=|B|$，则单射等价于满射，因此只需验证其一。

  - 在矩阵或线性代数中，线性变换是双射等价于其矩阵可逆。
examples:
  - problem: '设函数 $f: \mathbb{R} \to \mathbb{R}$，定义 $f(x) = 2x + 3$。证明 $f$ 是双射。'
    solution: >-
      **步骤1：证明单射**  

      假设 $f(x_1) = f(x_2)$，则 $2x_1+3 = 2x_2+3$，化简得 $x_1 = x_2$。因此 $f$ 是单射。  

      **步骤2：证明满射**  

      对任意 $y \in \mathbb{R}$，令 $x = \frac{y-3}{2}$，则 $x \in \mathbb{R}$ 且 $f(x)
      = 2\cdot\frac{y-3}{2}+3 = y$。因此 $f$ 是满射。  

      **结论**：$f$ 既是单射又是满射，所以 $f$ 是双射。
  - problem: '判断函数 $f: \mathbb{Z} \to \mathbb{Z}$，$f(n) = n^2$ 是否为双射？并说明理由。'
    solution: >-
      **步骤1：检查单射**  

      取 $n_1=1, n_2=-1$，则 $n_1 \neq n_2$，但 $f(1)=1$，$f(-1)=1$，即 $f(n_1)=f(n_2)$
      而 $n_1 \neq n_2$，所以 $f$ 不是单射。  

      **步骤2：检查满射**  

      取 $y=2 \in \mathbb{Z}$，不存在整数 $n$ 使得 $n^2=2$，因此 $f$ 不是满射。  

      **结论**：由于 $f$ 既不是单射也不是满射，故 $f$ 不是双射。
---

