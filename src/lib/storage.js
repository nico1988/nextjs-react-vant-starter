import localforage from 'localforage';

class Storage {
  constructor(name) {
    this.store = localforage.createInstance({
      name
    });
  }

  getItem(key) {
    return this.store.getItem(key);
  }

  setItem(key, value) {
    return this.store.setItem(key, value);
  }

  removeItem(key) {
    return this.store.removeItem(key);
  }

  keys() {
    return this.store.keys();
  }

  clear() {
    return this.store.clear();
  }

  getInstance(name) {
    return new Storage(name);
  }
}

export { Storage };

export default new Storage('global');
