class StepVerifyManager {
  constructor() {
    this._charCounter = 0;
    this._string = null;
    this._currentChar = " ";
  }

  get charCounter() {
    return this._charCounter;
  }

  get string() {
    return this._string;
  }

  get currentChar() {
    return this._currentChar;
  }

  set currentChar(char) {
    this._currentChar = char;
  }

  set string(string) {
    this._string = string;
  }

  addCharCount() {
    this._charCounter += 1;
  }

  resetCharCount() {
    this._charCounter = 0;
  }
}
