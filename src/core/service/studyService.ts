import { studyDao_getStudyCards, studyDao_removeStudyCard, studyDao_saveStudyCard } from '@/core/dao/studyDao'
import { cardDao_createCard, cardDao_getCard } from '@/core/dao/cardDao'
import { getNextStudyDate, LEVEL_DELAY_MAP } from '@/core/service/studyTimeCalulationService'

export function studyService_getNextCard(): Card | null {
  const now: Date = JSON.parse(JSON.stringify(new Date()))
  const studyCards: Array<StudyCard> = studyDao_getStudyCards()
  const studyCard: StudyCard | null = studyCards
    .find(studyCard => studyCard.nextStudyDate < now) || null

  return studyCard ? cardDao_getCard(studyCard.cardId) : null
}

export function studyService_createStudyCard(card: Card): void {
  const createdCard: Card = cardDao_createCard(card)
  studyDao_saveStudyCard({
    cardId: createdCard.id || 'no-id-error-message',
    level: 0,
    nextStudyDate: new Date(),
  })
}

export function studyService_submitAnswer(card: Card, answerResult: boolean): void {
  const studyCard: StudyCard | undefined = studyDao_getStudyCards().find(studyCard => studyCard.cardId === card.id)
  if(!studyCard) throw new Error(`Study card with id ${card.id} not found`)

  const newLevel: number = getNewLevel(studyCard.level, answerResult)
  if(newLevel >= LEVEL_DELAY_MAP.length) {
    studyDao_removeStudyCard(studyCard.cardId)
    return
  }

  studyCard.level = newLevel
  studyCard.nextStudyDate = getNextStudyDate(newLevel)
  studyDao_saveStudyCard(studyCard)
}

function getNewLevel(currentLevel: number, answerResult: boolean): number {
  return answerResult
    ? currentLevel + 1
    : currentLevel - 1 >= 0
      ? currentLevel - 1
      : 0
}



