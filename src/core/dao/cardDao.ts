import { AbstractDao } from '@/core/dao/AbstractDao'
import localStorageService from "@/core/dao/storage/localStorageService";

class CardDao extends AbstractDao<Card> {
  CARD_IDS_STORAGE_KEY = 'ids_card'
  CARD_SEQUENCE_KEY = 'seq_card'

  getCard(cardId: string): Card {
    return this.getEntity(cardId)
  }

  getCardPageCount(size: number): number {
    return Math.ceil(this.getCardIds().length / size)
  }

  getCardPage(page: number, size: number): Array<Card> {
    const cardIdList: Array<string> = this.getCardIds()
    const pageIdList: Array<string> = cardIdList.slice(page * size, page * size + size)
    return pageIdList.map(cardId => this.getCard(cardId))
  }

  createCard(newCardForm: NewCardForm): Card {
    const card: Card = {
      id: this.generateUid(),
      question: newCardForm.question,
      answer: newCardForm.answer
    }
    this.saveEntity(card.id, card)
    this.addCardToIds(card.id)
    return card
  }

  updateCard(card: Card): void {
    const cardId: string | null = card.id
    if(!cardId) throw new Error('Cannot update card without id')
    this.saveEntity(cardId, card)
  }

  deleteCard(cardId: string): void {
    this.deleteEntity(cardId)
    this.deleteCardFromIds(cardId)
  }

  getCardIds(): Array<string> {
    return localStorageService.getEntity<Array<string>>(this.CARD_IDS_STORAGE_KEY) || []
  }

  addCardToIds (cardId: string): void {
    const cardIds: Array<string> = this.getCardIds()
    cardIds.push(cardId)
    this.saveCardIds(cardIds)
  }

  deleteCardFromIds (cardId: string): void {
    const cardIdList: Array<string> = this.getCardIds()
    const filteredCards: Array<string> = cardIdList.filter(id => id !== cardId)
    this.saveCardIds(filteredCards)
  }

  saveCardIds (cardIdList: Array<string>): void {
    const uniqueCardIds: Set<string> = new Set(cardIdList)
    localStorageService.saveEntity<Array<string>>(this.CARD_IDS_STORAGE_KEY, Array.from(uniqueCardIds))
  }

  generateUid(): string {
    return  'c-' + this.getSeqId(this.CARD_SEQUENCE_KEY);
  }
}

export default new CardDao()
