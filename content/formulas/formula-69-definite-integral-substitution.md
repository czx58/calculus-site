---
title: 定积分换元法
slug: definite-integral-substitution
category: 定积分
latex: '\int_a^b f(x) \, dx = \int_\alpha^\beta f[\varphi(t)] \varphi''(t) \, dt'
plaintext: int_a^b f(x) dx = int_alpha^beta f(phi(t)) phi'(t) dt
relatedTopicSlugs:
  - fundamental-theorem
usage: >-
  定积分换元法用于计算形如 $\int_a^b f(x)\,dx$ 的定积分，当被积函数或积分限较复杂时，通过变量替换 $x = \varphi(t)$
  简化积分。


  **使用场景**：

  - 被积函数含有根式、三角函数、指数函数等，直接积分困难。

  - 积分限或区间具有对称性，换元后可以简化计算。

  - 被积函数可以凑成某个函数的导数形式。


  **注意事项**：

  - 换元时，积分限必须相应改变：当 $x$ 从 $a$ 变到 $b$ 时，$t$ 从 $\alpha$ 变到 $\beta$，且 $a =
  \varphi(\alpha)$，$b = \varphi(\beta)$。

  - 函数 $\varphi(t)$ 在区间 $[\alpha, \beta]$ 上应有连续导数，且 $\varphi'(t)$ 不变号（或至少
  $\varphi(t)$ 单调）以保证换元有效。

  - 换元后不要忘记将 $dx$ 替换为 $\varphi'(t)\,dt$。


  **常见变形**：

  - 三角代换：$x = a\sin t$，$x = a\tan t$，$x = a\sec t$ 等。

  - 根式代换：$t = \sqrt[n]{ax+b}$。

  - 倒代换：$x = \frac{1}{t}$ 常用于有理函数积分。
examples:
  - problem: '计算定积分 $\int_0^1 \sqrt{1-x^2}\,dx$。'
    solution: >-
      令 $x = \sin t$，则 $dx = \cos t\,dt$。当 $x=0$ 时，$t=0$；当 $x=1$
      时，$t=\frac{\pi}{2}$。


      原积分变为：

      $$

      \int_0^{\frac{\pi}{2}} \sqrt{1-\sin^2 t} \cdot \cos t\,dt =
      \int_0^{\frac{\pi}{2}} \cos^2 t\,dt

      $$


      利用二倍角公式 $\cos^2 t = \frac{1+\cos 2t}{2}$，得：

      $$

      \int_0^{\frac{\pi}{2}} \frac{1+\cos 2t}{2}\,dt = \frac{1}{2}\left[t +
      \frac{\sin 2t}{2}\right]_0^{\frac{\pi}{2}} =
      \frac{1}{2}\left(\frac{\pi}{2} + 0 - 0\right) = \frac{\pi}{4}

      $$


      所以 $\int_0^1 \sqrt{1-x^2}\,dx = \frac{\pi}{4}$。
  - problem: '计算定积分 $\int_0^2 \frac{1}{1+\sqrt{x}}\,dx$。'
    solution: >-
      令 $t = \sqrt{x}$，则 $x = t^2$，$dx = 2t\,dt$。当 $x=0$ 时，$t=0$；当 $x=2$
      时，$t=\sqrt{2}$。


      原积分变为：

      $$

      \int_0^{\sqrt{2}} \frac{1}{1+t} \cdot 2t\,dt = 2\int_0^{\sqrt{2}}
      \frac{t}{1+t}\,dt

      $$


      将 $\frac{t}{1+t}$ 变形为 $1 - \frac{1}{1+t}$，得：

      $$

      2\int_0^{\sqrt{2}} \left(1 - \frac{1}{1+t}\right)dt = 2\left[t -
      \ln(1+t)\right]_0^{\sqrt{2}} = 2\left(\sqrt{2} - \ln(1+\sqrt{2}) - 0 + \ln
      1\right) = 2\sqrt{2} - 2\ln(1+\sqrt{2})

      $$


      所以 $\int_0^2 \frac{1}{1+\sqrt{x}}\,dx = 2\sqrt{2} - 2\ln(1+\sqrt{2})$。
---

