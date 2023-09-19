import storage from "@/core/dao/storage/storage";

export const saveCard = (card: Card): Card => {
  const cardId: string = card.id || 'c-' + storage.getNextId('card_seq')
  card.id = cardId;
  storage.saveEntity<Card>(cardId, card);
  return getCard(cardId);
}

export const getCard = (cardId: string): Card => {
  return storage.getEntity<Card>(cardId);
}
