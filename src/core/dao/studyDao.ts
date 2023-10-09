import { storage_findEntity, storage_saveEntity } from '@/core/dao/storage/storage'

const STUDY_CARDS_KEY = 'study_cards'

export function studyDao_getStudyCards(): Array<StudyCard> {
  return storage_findEntity<Array<StudyCard>>(STUDY_CARDS_KEY) || []
}

export function studyDao_saveStudyCard (studyCard: StudyCard): void {
  const studyCards: Array<StudyCard> = studyDao_getStudyCards().filter(sc => sc.cardId !== studyCard.cardId)
  studyCards.push(studyCard)
  saveStudyCards(studyCards)
}

export function studyDao_removeStudyCard (cardId: string): void {
  const filteredStudyCards: Array<StudyCard> = studyDao_getStudyCards().filter(sc => sc.cardId !== cardId)
  saveStudyCards(filteredStudyCards)
}

function saveStudyCards (studyCards: Array<StudyCard>): void {
  storage_saveEntity(STUDY_CARDS_KEY, studyCards)
}
