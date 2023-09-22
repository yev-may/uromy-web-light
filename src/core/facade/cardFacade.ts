import { removeStudyCard } from "@/core/dao/studyDao";
import { removeCard } from "@/core/dao/cardDao";

export const deleteCardApi = (cardId: string): void => {
  removeStudyCard(cardId)
  removeCard(cardId)
}
