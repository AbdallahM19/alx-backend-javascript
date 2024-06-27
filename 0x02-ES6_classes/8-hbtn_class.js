export default class HolbertonClass {
  constructor(size, location) {
    if (typeof location !== 'string') {
      throw new TypeError('location must be a string');
    }
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    }
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
