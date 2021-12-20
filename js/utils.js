/* eslint-disable no-unused-vars */
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min
  return num
}

// maps style
function mapStyle(element, style) {
  const keys = Object.keys(style)
  keys.forEach((key) => {
    // eslint-disable-next-line no-param-reassign
    element.style[key] = style[key]
  })
}

function randVelocity(min, max) {
  if (random(min, max) === 0) {
    return random(min, max)
  }
  return random(min, max)
}

// collision detection
function isCollision(rect1, rect2) {
  if (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  ) {
    return true
  }
  return false
}

// function animate(boxesInstance, boxes) {
//   // not able to make it work in oop
//   function loop() {
//     for (let i = 0; i < boxesInstance.boxes.length; i += 1) {
//       boxesInstance.boxes[i].createBox()
//       // Beware this might crash you device
//       boxesInstance.boxes[i].collisionDetect(boxes)
//       boxesInstance.boxes[i].moveBox()
//     }
//     requestAnimationFrame(loop)
//   }
//   loop()
// }
