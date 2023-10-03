
export const getStorageSize = (): number => {
  let total = 0, keyLength: number, key: string
  for (key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) { continue }
    keyLength = (localStorage[key].length + key.length) * 2
    total += keyLength
  }
  return total
}

export const getStorageSizeKB = (): number => {
  return +(getStorageSize() / 1024).toFixed(2)
}
