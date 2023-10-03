import storage from '@/core/dao/storage/storage'

export const saveCard = (card: Card): Card => {
  const cardId: string = card.id || 'c-' + storage.getNextId('card_seq')
  card.id = cardId
  storage.saveEntity<Card>(cardId, card)
  addCardIdToList(cardId)
  return getCard(cardId)
}

export const getCard = (cardId: string): Card => {
  return storage.getEntity<Card>(cardId)
}

export const removeCard = (cardId: string): void => {
  removeCardFromList(cardId)
  localStorage.removeItem(cardId)
}

const addCardIdToList = (cardId: string): void => {
  const cardIdList: Array<string> = getCardIdList()
  cardIdList.push(cardId)
  saveCardIdList(cardIdList)
}

const removeCardFromList = (cardId: string): void => {
  const cardIdList: Array<string> = getCardIdList()
  const filteredCards: Array<string> = cardIdList.filter(id => id !== cardId)
  saveCardIdList(filteredCards)
}

export const getCardIdList = (): Array<string> => {
  return storage.getArray<string>('card-id-list')
}

const saveCardIdList = (cardIdList: Array<string>): void => {
  const uniqueCardIds: Set<string> = new Set(cardIdList)
  return storage.saveArray<string>('card-id-list', Array.from(uniqueCardIds))
}

export const getCardPageCount = (size: number): number => {
  const cardIdList: Array<string> = getCardIdList()
  const cardCount: number = cardIdList.length
  return Math.ceil(cardCount / size)
}

export const getCardPage = (page: number, size: number): Array<Card> => {
  const cardIdList: Array<string> = getCardIdList()
  const pageIdList: Array<string> = cardIdList.slice(page * size, page * size + size)
  return pageIdList.map(cardId => getCard(cardId))
}
