class Utils {
  static c = document.querySelector("canvas");

  static getMouseEventPosition(event, canavs) {
    let bounding = canavs.getBoundingClientRect();
    let x = parseInt(event.clientX - bounding.left);
    let y = parseInt(event.clientY - bounding.top);
    return [x, y];
  }

  static transformPosition(pixels) {
    let standardRatio = 768 / 566;
    let newRatio = Utils.c.width / Utils.c.height;
    let newPixels = (newRatio * pixels) / standardRatio;
    return newPixels;
  }
}
