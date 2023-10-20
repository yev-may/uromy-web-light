interface Card {
  key: CardKey
  question: string
  answer: string
}

interface CardKey {
  boxId: string
  id: string
}
