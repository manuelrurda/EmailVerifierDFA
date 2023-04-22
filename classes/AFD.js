class AFD {
  static validateStepState = {
    PASS: 0,
    NOT_VALIDATED: -1,
    VALIDATED: 1,
  };

  constructor(alphabet, initialState, finalStates, transitions, states) {
    this._char = "";
    this._alphabet = alphabet;
    this._initialState = initialState;
    this._currentState = initialState;
    this._finalStates = finalStates;
    this._transitions = transitions;
    this._states = states;
  }

  get currentState() {
    return this._currentState;
  }

  get initialState() {
    return this._initialState;
  }

  get finalStates() {
    return this._finalStates;
  }

  get transitions() {
    return this._transitions;
  }

  set char(char) {
    this._char = char;
  }

  setCurrentState(state) {
    this._currentState.isActive = false;
    this._currentState = state;
    this._currentState.isActive = true;
  }

  validateString(string) {
    this.setCurrentState(this._initialState);

    for (let i = 0; i < string.length; i++) {
      let hasValueFlag = false;
      let char = string[i];
      if (this.inAlphabet(char)) {
        for (let t = 0; t < this._currentState.transitions.length; t++) {
          let transition = this._currentState.transitions[t];
          if (transition.hasValue(char)) {
            this.setCurrentState(transition.toNode);
            hasValueFlag = true;
            break;
          }
        }
        if (!hasValueFlag) {
          return false;
        }
      }
    }
    return this._currentState.isFinal;
  }

  validateStep(char) {
    this._char = char;
    if (this.inAlphabet(char)) {
      for (let t = 0; t < this._currentState.transitions.length; t++) {
        let transition = this._currentState.transitions[t];
        if (transition.hasValue(char)) {
          this.setCurrentState(transition.toNode);
          stepVerifyManager.addCharCount();
          return AFD.validateStepState.PASS;
        }
      }
    }

    if (this._currentState.isFinal) {
      return AFD.validateStepState.VALIDATED;
    }
    return AFD.validateStepState.NOT_VALIDATED;
  }

  inAlphabet(char) {
    for (let i = 0; i < this._alphabet.length; i++) {
      if (char === this._alphabet[i]) {
        return true;
      }
    }
    return false;
  }

  draw(context) {
    context.beginPath();
    for (let i = 0; i < this._transitions.length; i++) {
      this._transitions[i].draw(context);
    }
    for (let i = 0; i < this._states.length; i++) {
      this._states[i].draw(context);
    }

    if (this._char === undefined || this._char === null) {
      this._char = "";
    }
    context.textAllign = "start";
    context.font = "25px Verdana";
    context.fillText("Character: " + this._char, 100, canvas.height - 40);
    context.closePath();
  }
}
