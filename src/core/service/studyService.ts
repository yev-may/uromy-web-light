import studyDao from '@/core/dao/studyDao'
import cardDao from '@/core/dao/cardDao'
import { getNextStudyDate, LEVEL_DELAY_MAP } from '@/core/service/studyTimeCalulationService'

class StudyService {
  getNextCard(): Card | null {
    const now: Date = JSON.parse(JSON.stringify(new Date()))
    const studyCards: Array<StudyCard> = studyDao.getStudyCards()
    const studyCard: StudyCard | null = studyCards
      .find(studyCard => studyCard.nextStudyDate < now) || null

    return studyCard ? cardDao.getCard(studyCard.cardKey) : null
  }

  createStudyCard(cardForm: NewCardForm): void {
    const createdCard: Card = cardDao.createCard(cardForm)
    studyDao.saveStudyCard({
      cardKey: createdCard.key,
      level: 0,
      nextStudyDate: new Date(),
    })
  }

  deleteCard(cardKey: CardKey): void {
    studyDao.removeStudyCard(cardKey.toString())
    cardDao.deleteCard(cardKey)
  }

  submitAnswer(card: Card, answerResult: boolean): void {
    const studyCard: StudyCard | undefined = studyDao.getStudyCards().find(studyCard => studyCard.cardKey.id === card.key.id)
    if (!studyCard) throw new Error(`Study card with id ${card.key.id} not found`)

    const newLevel: number = this.getNewLevel(studyCard.level, answerResult)
    if (newLevel >= LEVEL_DELAY_MAP.length) {
      studyDao.removeStudyCard(cardDao.serializeCardKey(card.key))
      return
    }

    studyCard.level = newLevel
    studyCard.nextStudyDate = getNextStudyDate(newLevel)
    studyDao.saveStudyCard(studyCard)
  }

  getNewLevel(currentLevel: number, answerResult: boolean): number {
    return answerResult
      ? currentLevel + 1
      : currentLevel - 1 >= 0
        ? currentLevel - 1
        : 0
  }
}

export default new StudyService()
