import { storage_findEntity, storage_saveEntity } from "@/core/dao/storage/storage";

export function dao_generateNextId(key: string): number {
  const storageValue: number | null = storage_findEntity<number>(key)
  console.log(storageValue)
  const nextValue: number = storageValue ? storageValue + 1 : 1
  console.log(nextValue)
  storage_saveEntity<number>(key, nextValue)
  return nextValue
}
