import { studyDao_removeStudyCard } from '@/core/dao/studyDao'
import { cardDao_deleteCard } from '@/core/dao/cardDao'

export const deleteCardApi = (cardId: string): void => {
  studyDao_removeStudyCard(cardId)
  cardDao_deleteCard(cardId)
}
