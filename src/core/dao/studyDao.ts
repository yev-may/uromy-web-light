import { AbstractDao } from "@/core/dao/AbstractDao";
import localStorageService from "@/core/dao/storage/localStorageService";

const STUDY_CARDS_KEY = 'study_cards'

class StudyDao extends AbstractDao<Array<StudyCard> > {

  getStudyCards(): Array<StudyCard> {
    return localStorageService.getEntity(STUDY_CARDS_KEY) || []
  }

  saveStudyCard(studyCard: StudyCard): void {
    const studyCards: Array<StudyCard> = this.getStudyCards().filter(sc => sc.cardKey.id !== studyCard.cardKey.id)
    studyCards.push(studyCard)
    this.saveStudyCards(studyCards)
  }

  removeStudyCard(cardKey: CardKey): void {
    const filteredStudyCards: Array<StudyCard> = this.getStudyCards().filter(sc => sc.cardKey.id !== cardKey.id)
    this.saveStudyCards(filteredStudyCards)
  }

  saveStudyCards (studyCards: Array<StudyCard>): void {
    this.saveEntity(STUDY_CARDS_KEY, studyCards)
  }
}

export default new StudyDao()
