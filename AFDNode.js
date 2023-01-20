class AFDNode {
  static radius = 35;

  constructor(
    name,
    isInitial,
    isFinal,
    transitions,
    xPos,
    yPos,
    canvasContext
  ) {
    this._isActive = false;
    this._name = name;
    this._isInitial = isInitial;
    this._isFinal = isFinal;
    this._transitions = transitions;
    this._xPos = xPos;
    this._yPos = yPos;
    this._ctx = canvasContext;
  }

  get position() {
    return [this._xPos, this._yPos];
  }

  set position(position) {
    this._xPos = position[0];
    this._yPos = position[1];
  }

  get isInitial() {
    return this._isFinal;
  }

  get isFinal() {
    return this._isFinal;
  }

  set transitions(transitions) {
    this._transitions = transitions;
  }

  get transitions() {
    return this._transitions;
  }

  get name() {
    return this._name;
  }

  set isActive(bool) {
    this._isActive = bool;
  }

  draw(context) {
    if (!this._ctx) {
      this._ctx = context;
    }

    this._ctx.beginPath();
    this._ctx.arc(
      this._xPos,
      this._yPos,
      AFDNode.radius,
      0,
      Math.PI * 2,
      false
    );

    this._ctx.fillStyle = this._isActive ? "#fff780" : "#fa7a7a";
    this._ctx.fill();
    this._ctx.closePath();

    if (this._isFinal) {
      this._ctx.beginPath();
      this._ctx.arc(
        this._xPos,
        this._yPos,
        AFDNode.radius * 0.8,
        0,
        Math.PI * 2,
        false
      );
      this._ctx.stroke();
      this._ctx.closePath();
    }

    if (this._isInitial) {
      this._ctx.beginPath();
      this._ctx.arc(
        this._xPos - AFDNode.radius,
        this._yPos,
        AFDNode.radius * 0.2,
        0,
        Math.PI * 2,
        false
      );
      this._ctx.fillStyle = "black";
      this._ctx.fill();
      this._ctx.closePath();
    }

    this._ctx.beginPath();
    this._ctx.fillStyle = "black";
    this._ctx.font = "25px Verdana";
    this._ctx.textAlign = "center";
    this._ctx.textBaseline = "middle";
    this._ctx.fillText(this._name, this._xPos, this._yPos);
    this._ctx.closePath();
  }

  static inArea(nodePosition, mouseX, mouseY) {
    let h = nodePosition[0];
    let k = nodePosition[1];

    let point = (mouseX - h) ** 2 + (-mouseY + k) ** 2;

    return point <= AFDNode.radius ** 2;
  }
}
