---
topicSlug: lhopital-rule
questions:
  - id: q-lhop-1
    type: choice
    question: 洛必达法则主要适用于哪类极限？
    options:
      - 0/0 或 ∞/∞ 型未定式
      - 1/0 型
      - 0·∞ 型但不需要变形
      - 所有极限
    answer: A
    explanation: 洛必达法则适用于 0/0 或 ∞/∞ 型未定式，其他形式通常需要先变形。
  - id: q-lhop-2
    type: fill
    question: '求 $\displaystyle \lim_{x\to 0} \frac{\sin x}{x}$ = ____（可用洛必达法则）'
    answer: "1"
    explanation: '$\frac{\sin x}{x}$ 是 0/0 型，洛必达法则得 $\lim_{x\to 0}\frac{\cos x}{1}=1$。'
