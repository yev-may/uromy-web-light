
export function storage_findEntity<T>(key: string): T | null {
  const storageValue: string | null = localStorage.getItem(key)
  return storageValue ? JSON.parse(storageValue) : null
}

export function storage_saveEntity<T>(key: string, entity: T): void {
  const valueToStore: string = JSON.stringify(entity)
  localStorage.setItem(key, valueToStore)
}

export function storage_deleteEntity<T>(key: string): void {
  localStorage.removeItem(key)
}
