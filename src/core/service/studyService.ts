import { getStudyCards, removeStudyCard, saveStudyCard } from "@/core/dao/studyDao";
import { getCard } from "@/core/dao/cardDao";
import StudyCard from "@/views/StudyCard.vue";
import { getNextStudyDate, LEVEL_DELAY_MAP } from "@/core/service/studyTimeCalulationService";

export const getNextCard = (): Card | null => {
  const now: Date = JSON.parse(JSON.stringify(new Date()))
  const studyCards: Array<StudyCard> = getStudyCards()
  const studyCard: StudyCard | null = studyCards
    .find(studyCard => studyCard.nextStudyDate < now) || null

  return studyCard ? getCard(studyCard.cardId) : null
}

export const createStudyCard = (card: Card): void => {
  const studyCard: StudyCard = {
    cardId: card.id || 'no-id-error-message',
    level: 0,
    nextStudyDate: new Date(),
  }
  saveStudyCard(studyCard);
}

export const submitAnswer = (card: Card, answerResult: boolean): void => {
  const studyCard: StudyCard = getStudyCards().find(studyCard => studyCard.cardId === card.id)
  const newLevel: number = getNewLevel(studyCard.level, answerResult)
  if(newLevel >= LEVEL_DELAY_MAP.length) {
    removeStudyCard(studyCard.cardId)
    return
  }

  studyCard.level = newLevel;
  studyCard.nextStudyDate = getNextStudyDate(newLevel)
  saveStudyCard(studyCard)
}

const getNewLevel = (currentLevel: number, answerResult: boolean) => {
  return answerResult
    ? currentLevel + 1
    : currentLevel - 1 >= 0
      ? currentLevel - 1
      : 0
}



