export default
{
  getNextId: (key: string): string => {
    const storageValue: string | null = localStorage.getItem(key);
    const nextValue: string = storageValue ? '' + (+storageValue + 1) : "0";
    localStorage.setItem(key, nextValue);
    return nextValue;
  },

  getEntity: <T>(key: string): T => {
    const storageValue: string | null = localStorage.getItem(key);
    return storageValue ? JSON.parse(storageValue) : {}
  },

  saveEntity: <T>(key: string, entity: T): void => {
    const valueToStore: string = JSON.stringify(entity);
    localStorage.setItem(key, valueToStore);
  },

  getArray: <T>(key: string): Array<T> => {
    const storageValue: string | null = localStorage.getItem(key);
    return storageValue ? JSON.parse(storageValue) : [];
  },

  saveArray: <T>(key: string, value: Array<T>) => {
    const valueToStore: string = JSON.stringify(value)
    localStorage.setItem(key, valueToStore);
  }
}
