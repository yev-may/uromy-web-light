import localStorageService from '@/core/dao/storage/localStorageService'

export class AbstractDao<T> {

  getSeqId(key: string): number {
    const storageValue: number | null = localStorageService.getEntity<number>(key)
    const nextValue: number = storageValue ? storageValue + 1 : 1
    localStorageService.saveEntity<number>(key, nextValue)
    return nextValue
  }

  getEntity(key: string): T {
    const storageEntity: T | null = localStorageService.getEntity<T>(key)
    if(!storageEntity) throw new Error(`Entity with id ${key} not found`)
    return storageEntity
  }

  saveEntity(key: string, entity: T): void {
    localStorageService.saveEntity(key, entity)
  }

  deleteEntity(key: string): void {
    localStorageService.deleteEntity(key)
  }
}
