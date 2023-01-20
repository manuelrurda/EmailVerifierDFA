class DragManager {
  constructor() {
    this._isDragging = false;
    this._draggingNodeIndex = null;
    this._dragStartX = null;
    this._dragStartY = null;
  }

  get isDragging() {
    return this._isDragging;
  }

  set isDragging(bool) {
    this._isDragging = bool;
  }

  get draggingNodeIndex() {
    return this._draggingNodeIndex;
  }

  set draggingNodeIndex(index) {
    this._draggingNodeIndex = index;
  }

  get dragStartPosition() {
    return [this._dragStartX, this._dragStartY];
  }

  set dragStartPosition(position) {
    this._dragStartX = position[0];
    this._dragStartY = position[1];
  }
}
