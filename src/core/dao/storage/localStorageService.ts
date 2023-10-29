class LocalStorageService {
  getEntity<T>(key: string): T | null {
    const storageValue: string | null = localStorage.getItem(key)
    return storageValue ? JSON.parse(storageValue) : null
  }

  saveEntity<T>(key: string, entity: T): void {
    const valueToStore: string = JSON.stringify(entity)
    localStorage.setItem(key, valueToStore)
  }

  deleteEntity(key: string): void {
    localStorage.removeItem(key)
  }
}

export default new LocalStorageService()
