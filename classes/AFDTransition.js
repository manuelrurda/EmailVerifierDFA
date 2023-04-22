class AFDTransition {
  _strokeSize = 3;
  _arrowHeadLength = 10;

  constructor(
    fromNode,
    toNode,
    values,
    nodeRadius,
    canvasContext,
    textXOffset,
    textYOffset,
    label
  ) {
    this._fromNode = fromNode;
    this._toNode = toNode;
    this._values = values;
    this._nodeRadius = nodeRadius;
    this._ctx = canvasContext;
    this._textXOffset = textXOffset;
    this._textYOffset = textYOffset;
    this._label = label;
  }

  get toNode() {
    return this._toNode;
  }

  hasValue(char) {
    for (let i = 0; i < this._values.length; i++) {
      if (char === this._values[i]) {
        return true;
      }
    }
    return false;
  }

  draw(context) {
    if (!this._ctx) {
      this._ctx = context;
    }
    let x1 = this._fromNode.position[0];
    let y1 = this._fromNode.position[1];
    let x2 = this._toNode.position[0];
    let y2 = this._toNode.position[1];

    // Arrow line body
    this._ctx.beginPath();
    if (this._fromNode.name === this._toNode.name) {
      this._ctx.arc(
        this._fromNode.position[0],
        this._fromNode.position[1] - AFDNode.radius,
        AFDNode.radius,
        0,
        Math.PI * 2,
        false
      );

      this._ctx.stroke();
    } else {
      this._ctx.moveTo(x1, y1);
      this._ctx.lineTo(x2, y2);
      this._ctx.lineWidth = this._strokeSize;
      this._ctx.stroke();
    }

    let textX, textY;
    [textX, textY] = this.getMiddlePoint(x1, y1, x2, y2);

    this._ctx.font = "15px Verdana";
    this._ctx.textAlign = "center";
    this._ctx.fillText(
      this._label,
      textX + this._textXOffset,
      textY + this._textYOffset
    );
    this._ctx.closePath();
  }

  getMiddlePoint(x1, y1, x2, y2) {
    return [(x2 + x1) / 2, (y2 + y1) / 2];
  }
}
