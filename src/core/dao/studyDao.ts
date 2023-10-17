import { AbstractDao } from "@/core/dao/AbstractDao";
import localStorageService from "@/core/dao/storage/localStorageService";

const STUDY_CARDS_KEY = 'study_cards'

class StudyDao extends AbstractDao<Array<StudyCard> > {

  getStudyCards(): Array<StudyCard> {
    return localStorageService.getEntity(STUDY_CARDS_KEY) || []
  }

  saveStudyCard(studyCard: StudyCard): void {
    const studyCards: Array<StudyCard> = this.getStudyCards().filter(sc => sc.cardId !== studyCard.cardId)
    studyCards.push(studyCard)
    this.saveStudyCards(studyCards)
  }

  removeStudyCard(cardId: string): void {
    const filteredStudyCards: Array<StudyCard> = this.getStudyCards().filter(sc => sc.cardId !== cardId)
    this.saveStudyCards(filteredStudyCards)
  }

  saveStudyCards (studyCards: Array<StudyCard>): void {
    this.saveEntity(STUDY_CARDS_KEY, studyCards)
  }
}

export default new StudyDao()
