const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

let scale = 1;

const dragManager = new DragManager();

canvas.width = window.innerWidth * 0.5;
canvas.height = window.innerHeight * 0.7;

let ab = new AutomataBuilder(AFDNode.radius, context);
let afd = new AFD(
  ab.alphabet,
  ab.states[0],
  ab.states[5],
  ab.transitions,
  ab.states
);

let currentNodes = ab.states;

function animate() {
  window.requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);
  afd.draw(context);
}

function mouseDown(event) {
  event.preventDefault();

  dragManager.dragStartPosition = Utils.getMouseEventPosition(event, canvas);

  for (let i = 0; i < currentNodes.length; i++) {
    if (
      is_mouse_on_node(
        dragManager.dragStartPosition[0],
        dragManager.dragStartPosition[1],
        currentNodes[i]
      )
    ) {
      dragManager.draggingNodeIndex = i;
      dragManager.isDragging = true;
      break;
    }
  }
}

function mouseMove(event) {
  if (!dragManager.isDragging) {
    return;
  } else {
    event.preventDefault();
    let mouseX, mouseY;
    [mouseX, mouseY] = Utils.getMouseEventPosition(event, canvas);
    currentNodes[dragManager.draggingNodeIndex].position = [mouseX, mouseY];
  }
}

function mouseUp(event) {
  if (!dragManager.isDragging) {
    return;
  }
  event.preventDefault();
  dragManager.isDragging = false;
}

function mouseOut(event) {
  if (!dragManager.isDragging) {
    return;
  }
  event.preventDefault();
  dragManager.isDragging = false;
}

function is_mouse_on_node(startX, startY, currentNode) {
  return AFDNode.inArea(currentNode.position, startX, startY);
}

canvas.onmouseup = mouseUp;
canvas.onmousedown = mouseDown;
canvas.onmouseout = mouseOut;
canvas.onmousemove = mouseMove;

animate();
