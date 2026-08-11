---
title: 第一类换元法
slug: integration-substitution-first
category: 积分
latex: '\int f[\varphi(x)] \varphi''(x) \, dx = \int f(u) \, du'
plaintext: int f(phi(x)) phi'(x) dx = int f(u) du
relatedTopicSlugs:
  - indefinite-integral
  - chain-rule
usage: >-
  **第一类换元法（凑微分法）** 用于求解形如 $\int f[\varphi(x)] \varphi'(x) \, dx$
  的积分。其核心思想是：如果被积函数可以看作某个复合函数与内层函数导数的乘积，则令 $u = \varphi(x)$，从而 $du = \varphi'(x)
  dx$，原积分化为 $\int f(u) \, du$，然后对 $u$ 积分，最后代回 $u = \varphi(x)$。\n\n**使用场景**：\n-
  被积函数中含有复合函数，且内层函数的导数（或常数倍）出现在积分号外。\n- 常见形式：$\int g(ax+b) \, dx$（令
  $u=ax+b$），$\int x^n f(x^{n+1}) \, dx$（令 $u=x^{n+1}$），$\int \frac{f'(x)}{f(x)}
  \, dx$（令 $u=f(x)$）等。\n\n**注意事项**：\n- 熟练掌握基本积分公式和常见函数的导数。\n- 换元后要正确写出 $du$
  的表达式，并确保原积分中的 $dx$ 被完全替换。\n- 若系数不匹配，可通过乘以常数因子调整。\n\n**常见变形**：\n- 凑微分：例如 $\int
  \frac{1}{x} \, dx = \ln|x|+C$，可凑 $d(\ln x)$。\n- 三角函数的凑微分：如 $\int \sin x \cos x
  \, dx$ 可令 $u=\sin x$。\n- 指数函数：$\int e^{x} \, dx$ 可凑 $d(e^x)$。
examples:
  - problem: '求不定积分 $\int 2x \cos(x^2) \, dx$。'
    solution: >-
      **解**：令 $u = x^2$，则 $du = 2x \, dx$。原积分化为 $\int \cos u \, du = \sin u +
      C$。代回 $u = x^2$，得 $\int 2x \cos(x^2) \, dx = \sin(x^2) + C$。
  - problem: '求不定积分 $\int \frac{1}{x \ln x} \, dx$（$x>0$）。'
    solution: >-
      **解**：令 $u = \ln x$，则 $du = \frac{1}{x} \, dx$。原积分化为 $\int \frac{1}{u} \,
      du = \ln|u| + C$。代回 $u = \ln x$，得 $\int \frac{1}{x \ln x} \, dx = \ln|\ln
      x| + C$。
---

