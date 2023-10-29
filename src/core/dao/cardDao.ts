import { AbstractDao } from '@/core/dao/AbstractDao'
import localStorageService from '@/core/dao/storage/localStorageService'

class CardDao extends AbstractDao<Card> {
  CARD_ID_PREFIX = 'c_'
  CARD_KEYS_PREFIX = 'keys_card_'
  CARD_SEQUENCE_KEY = 'seq_card'

  getCard(cardKey: CardKey): Card {
    return this.getEntity(this.serializeCardKey(cardKey))
  }

  getCardPageCount(size: number, boxId: string): number {
    return Math.ceil(this.getCardKeys(boxId).length / size)
  }

  getCardPage(page: number, size: number, boxId: string): Array<Card> {
    const cardKeys: Array<CardKey> = this.getCardKeys(boxId)
    const pageCardKeys: Array<CardKey> = cardKeys.slice(page * size, page * size + size)
    return pageCardKeys.map(cardKey => this.getCard(cardKey))
  }

  createCard(newCardForm: NewCardForm): Card {
    const card: Card = {
      key: {
        boxId: newCardForm.boxId,
        id: this.generateUid()
      },
      question: newCardForm.question,
      answer: newCardForm.answer
    }
    this.saveEntity(this.serializeCardKey(card.key), card)
    this.addCardToKeys(card.key)
    return card
  }

  updateCard(card: Card): void {
    const cardId: string = this.serializeCardKey(card.key)
    if (!cardId) throw new Error('Cannot update card without id')
    this.saveEntity(cardId, card)
  }

  deleteCard(cardKey: CardKey): void {
    this.deleteEntity(this.serializeCardKey(cardKey))
    this.deleteCardFromKeys(cardKey)
  }

  getCardKeys(boxId: string): Array<CardKey> {
    return localStorageService.getEntity<Array<CardKey>>(this.CARD_KEYS_PREFIX + boxId) || []
  }

  addCardToKeys(cardKey: CardKey): void {
    const cardIds: Array<CardKey> = this.getCardKeys(cardKey.boxId)
    cardIds.push(cardKey)
    this.saveCardKeys(cardIds, cardKey.boxId)
  }

  deleteCardFromKeys(cardKey: CardKey): void {
    const cardIdList: Array<CardKey> = this.getCardKeys(cardKey.boxId)
    const filteredCards: Array<CardKey> = cardIdList.filter(ck => ck.id !== cardKey.id)
    this.saveCardKeys(filteredCards, cardKey.boxId)
  }

  saveCardKeys(cardKeys: Array<CardKey>, boxId: string): void {
    const uniqueCardKeys: Set<CardKey> = new Set(cardKeys)
    localStorageService.saveEntity<Array<CardKey>>(this.CARD_KEYS_PREFIX + boxId, Array.from(uniqueCardKeys))
  }

  serializeCardKey(cardKey: CardKey): string {
    return cardKey.boxId +  '.' + cardKey.id
  }

  generateUid(): string {
    return this.CARD_ID_PREFIX + this.getSeqId(this.CARD_SEQUENCE_KEY)
  }
}

export default new CardDao()
