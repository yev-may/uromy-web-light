import { AbstractDao } from "@/core/dao/AbstractDao";
import localStorageService from "@/core/dao/storage/localStorageService";

class BoxDao extends AbstractDao<Box> {
  BOX_ID_PREFIX = 'b_'
  BOX_IDS_STORAGE_KEY = 'ids_box'
  BOX_SEQUENCE_KEY = 'seq_box'

  getBoxes(): Array<Box> {
    const boxIds: Array<string> = this.getBoxIds()
    return boxIds.map(boxId => this.getBox(boxId))
  }

  getBox(boxId: string): Box {
    return this.getEntity(boxId)
  }

  generateUid() {
    return this.BOX_ID_PREFIX + this.getSeqId(this.BOX_SEQUENCE_KEY);
  }

  createBox(newBoxForm: NewBoxForm): void {
    const box = {
      id: this.generateUid(),
      title: newBoxForm.title,
    }
    this.saveEntity(box.id, box)
    this.addBoxToIds(box.id)
  }

  updateBox(box: Box): void {
    this.saveEntity(box.id, box)
  }

  getBoxIds(): Array<string> {
    return localStorageService.getEntity(this.BOX_IDS_STORAGE_KEY) || []
  }

  addBoxToIds(boxId: string): void {
    const boxIds: Array<string> = this.getBoxIds()
    boxIds.push(boxId)
    this.saveBoxIds(boxIds)
  }

  saveBoxIds(boxIds: Array<string>): void {
    const uniqueBoxIds: Set<string> = new Set(boxIds)
    localStorageService.saveEntity<Array<string>>(this.BOX_IDS_STORAGE_KEY, Array.from(uniqueBoxIds))
  }

  deleteBox(boxId: string): void {
    this.deleteEntity(boxId)
    this.deleteBoxFromIds(boxId)
  }

  deleteBoxFromIds(boxId: string): void {
    const boxIds: Array<string> = this.getBoxIds()
    const filteredCards: Array<string> = boxIds.filter(id => id !== boxId)
    this.saveBoxIds(filteredCards)
  }
}

export default new BoxDao()
