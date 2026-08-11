---
title: 满射的定义
slug: surjective-definition
category: 函数
latex: '\forall y \in B, \exists x \in A, \ f(x)=y'
plaintext: for all y in B exists x in A such that f(x)=y
relatedTopicSlugs:
  - injective-surjective-bijective
usage: >-
  **满射的定义**：设函数 $f: A \to B$，若对任意 $y \in B$，都存在 $x \in A$，使得 $f(x)=y$，则称 $f$
  为**满射**（或**映上**）。该定义用逻辑符号表示为 $\forall y \in B, \exists x \in A, \ f(x)=y$。


  **使用场景**：

  - 判断一个函数是否将定义域映射到整个陪域，即值域是否等于陪域。

  - 在证明函数为满射时，通常需要构造或求解方程 $f(x)=y$ 对任意 $y$ 成立。

  - 在讨论函数是否可逆、同构等性质时，满射是必要条件之一。


  **注意事项**：

  - 满射的定义依赖于陪域 $B$ 的选取。若改变陪域，函数的满射性可能改变。例如 $f: \mathbb{R} \to
  \mathbb{R}$，$f(x)=x^2$ 不是满射，但 $f: \mathbb{R} \to [0,+\infty)$ 是满射。

  - 证明满射时，必须对**任意** $y \in B$ 都找到对应的 $x$，不能只对部分 $y$ 成立。

  - 满射与单射不同，满射不要求 $x$ 唯一，允许多个原像。


  **常见变形**：

  - 符号表示：$f(A)=B$，即值域等于陪域。

  - 逻辑等价：$\forall y \in B, \ f^{-1}(\{y\}) \neq \emptyset$，即每个 $y$ 的原像集非空。

  - 在复合函数中：若 $g \circ f$ 是满射，则 $g$ 必为满射，但 $f$ 不一定。
examples:
  - problem: '设函数 $f: \mathbb{R} \to \mathbb{R}$，$f(x) = 2x+3$，证明 $f$ 是满射。'
    solution: >-
      **证明**：任取 $y \in \mathbb{R}$，我们需要找到 $x \in \mathbb{R}$ 使得 $f(x)=y$。


      由 $f(x)=2x+3$，令 $2x+3 = y$，解得 $x = \frac{y-3}{2}$。由于 $y$
      是任意实数，$\frac{y-3}{2}$ 也是实数，故存在 $x = \frac{y-3}{2} \in \mathbb{R}$。


      因此，对任意 $y \in \mathbb{R}$，都存在 $x \in \mathbb{R}$ 使得 $f(x)=y$，所以 $f$ 是满射。
  - problem: '判断函数 $g: \mathbb{R} \to \mathbb{R}$，$g(x) = x^2$ 是否为满射，并说明理由。'
    solution: >-
      **解**：取 $y = -1 \in \mathbb{R}$。若 $g$ 是满射，则存在 $x \in \mathbb{R}$ 使得 $x^2 =
      -1$，但实数范围内不存在这样的 $x$（因为平方非负）。因此，存在 $y \in \mathbb{R}$ 没有原像，所以 $g$ 不是满射。


      注意：若将陪域改为 $[0, +\infty)$，则 $g: \mathbb{R} \to [0, +\infty)$ 是满射，因为对任意非负实数
      $y$，可取 $x = \sqrt{y}$ 或 $x = -\sqrt{y}$。
---

