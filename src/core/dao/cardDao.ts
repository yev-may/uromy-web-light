import { storage_deleteEntity, storage_findEntity, storage_saveEntity } from '@/core/dao/storage/storage'
import { dao_generateNextId } from "@/core/dao/abstractDao"

const CARD_IDS_STORAGE_KEY = 'ids_card'
const CARD_SEQUENCE_KEY = 'seq_card'

export function cardDao_getCard(cardId: string): Card {
  const foundCard: Card | null = storage_findEntity<Card>(cardId)
  if(!foundCard) throw new Error(`Card with id ${cardId} not found`)
  return foundCard
}

export function cardDao_getCardPageCount(size: number): number {
  return Math.ceil(getCardIds().length / size)
}

export function cardDao_getCardPage(page: number, size: number): Array<Card> {
  const cardIdList: Array<string> = getCardIds()
  const pageIdList: Array<string> = cardIdList.slice(page * size, page * size + size)
  return pageIdList.map(cardId => cardDao_getCard(cardId))
}

export function cardDao_createCard(card: Card): Card {
  const cardId: string = generateUid()
  card.id = cardId
  storage_saveEntity(cardId, card)
  addCardToIds(cardId)
  return card
}

export function cardDao_updateCard(card: Card): void {
  const cardId: string | null = card.id
  if(!cardId) throw new Error('Cannot update card without id')
  storage_saveEntity(cardId, card)
}

export function cardDao_deleteCard(cardId: string): void {
  storage_deleteEntity(cardId)
  deleteCardFromIds(cardId)
}

// --- Card ids --- //

function getCardIds(): Array<string> {
  return  storage_findEntity<Array<string>>(CARD_IDS_STORAGE_KEY) || []
}

function addCardToIds (cardId: string): void {
  const cardIds: Array<string> = getCardIds()
  cardIds.push(cardId)
  saveCardIds(cardIds)
}

function deleteCardFromIds (cardId: string): void {
  const cardIdList: Array<string> = getCardIds()
  const filteredCards: Array<string> = cardIdList.filter(id => id !== cardId)
  saveCardIds(filteredCards)
}

function saveCardIds (cardIdList: Array<string>): void {
  const uniqueCardIds: Set<string> = new Set(cardIdList)
  storage_saveEntity<Array<string>>(CARD_IDS_STORAGE_KEY, Array.from(uniqueCardIds))
}

function generateUid(): string {
  return  'c-' + dao_generateNextId(CARD_SEQUENCE_KEY);
}
