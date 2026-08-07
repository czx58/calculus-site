---
topicSlug: chain-rule
questions:
  - id: q-chain-1
    type: choice
    question: "$y = (2x+1)^3$ 的导数是？"
    options:
      - $3(2x+1)^2$
      - $6(2x+1)^2$
      - $6(2x+1)$
      - $(2x+1)^3$
    answer: B
    explanation: 外层导数为 $3u^2$，内层导数为 $2$，相乘得 $6(2x+1)^2$。
  - id: q-chain-2
    type: fill
    question: '$y = e^{x^2}$ 的导数为 $y'' = $ ____'
    answer: "2x e^(x^2)"
    explanation: '令 $u=x^2$，则 $y''=e^u \cdot 2x = 2x e^{x^2}$。'
---
