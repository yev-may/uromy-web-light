import { storage_findEntity, storage_saveEntity } from "@/core/dao/storage/storage";

export function dao_generateNextId(key: string): number {
  const nextValue: number = storage_findEntity<number>(key) + 1 || 0
  storage_saveEntity<number>(key, nextValue)
  return nextValue
}
