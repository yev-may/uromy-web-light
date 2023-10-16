
export function getStorageSizeKB(): number {
  return +(getStorageSize() / 1024).toFixed(2)
}

function getStorageSize(): number {
  let total = 0, keyLength: number, key: string
  for (key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) { continue }
    keyLength = localStorage[key].length + key.length
    total += keyLength
  }
  return total
}
