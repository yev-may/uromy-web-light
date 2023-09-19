import storage from "@/core/dao/storage/storage";
import StudyCard from "@/views/StudyCard.vue";

const STUDY_CARDS_KEY: string = 'study-cards'

export const getStudyCards = (): Array<StudyCard> => {
  return storage.getArray<StudyCard>(STUDY_CARDS_KEY)
}

const getStudyCardsWithout = (studyCard: StudyCard): Array<StudyCard> => {
  return getStudyCards().filter(sc => sc.cardId !== studyCard.cardId)
}
  export const saveStudyCards = (studyCards: Array<StudyCard>): void => {
  storage.saveArray<StudyCard>(STUDY_CARDS_KEY, studyCards)
}

export const saveStudyCard = (studyCard: StudyCard): void => {
  const studyCards: Array<StudyCard> = getStudyCardsWithout(studyCard);
  studyCards.push(studyCard)
  saveStudyCards(studyCards)
}

export const removeStudyCard = (cardId: string): void => {
  const studyCards: Array<StudyCard> = getStudyCards()
  const filteredStudyCards: Array<StudyCard> = studyCards.filter(studyCard => studyCard.cardId !== cardId)
  saveStudyCards(filteredStudyCards)
}
