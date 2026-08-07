---
topicSlug: injective-surjective-bijective
questions:
  - id: q-isb-1
    type: choice
    question: '函数 $f(x) = x^2: \mathbb{R} \to \mathbb{R}$ 是什么类型的函数？'
    options:
      - 单射
      - 满射
      - 双射
      - 既不是单射也不是满射
    answer: D
    explanation: '$f(1)=f(-1)=1$，所以不是单射；$y=-1$ 没有原像，所以不是满射。'
  - id: q-isb-2
    type: choice
    question: '函数 $f(x) = 2x + 1: \mathbb{R} \to \mathbb{R}$ 是什么类型的函数？'
    options:
      - 单射但不是满射
      - 满射但不是单射
      - 双射
      - 既不是单射也不是满射
    answer: C
    explanation: '一次函数是严格单调的，所以是单射；值域为全体实数，所以也是满射。因此是双射。'
  - id: q-isb-3
    type: choice
    question: '函数 $f(x) = e^x: \mathbb{R} \to (0, +\infty)$ 是什么类型的函数？'
    options:
      - 单射但不是满射
      - 满射但不是单射
      - 双射
      - 既不是单射也不是满射
    answer: C
    explanation: '$e^x$ 严格单调递增，是单射；值域正好是 $(0, +\infty)$，所以也是满射。因此是双射。'
  - id: q-isb-4
    type: choice
    question: '下列哪个条件是函数存在反函数的必要且充分条件？'
    options:
      - 函数是单射
      - 函数是满射
      - 函数是双射
      - 函数是偶函数
    answer: C
    explanation: '只有双射才能保证每个输出对应唯一的输入，且每个输入都有输出，从而反函数存在。'
