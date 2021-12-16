class Boxes {
  constructor(parentContainer, noOfBoxes) {
    this.boxes = []
    this.noOfBoxes = noOfBoxes
    // this.boxesLength = this.boxes.length
    this.parentContainer = parentContainer
  }

  createBoxes() {
    while (this.boxes.length < this.noOfBoxes) {
      // eslint-disable-next-line no-undef
      const box = new Box(this.parentContainer)
      this.boxes.push(box)
    }
    return this.boxes
  }

  // animate() {
  //   // not able to make it work in oop
  //   const boxesLength = this.boxes.length
  //   function loop() {
  //     for (let i = 0; i < boxesLength; i += 1) {
  //       this.boxes[i].createBox()
  //       this.boxes[i].moveBox()

  //       // Beware this might crash you device
  //       // testBoxes.boxes[i].collisionDetect(boxes)
  //     }
  //     requestAnimationFrame(loop)
  //   }
  //   loop()
  // }

  init() {
    const boxes = this.createBoxes()
    // this.animate()
    return boxes
  }
}

function animate(boxesInstance, boxes) {
  // not able to make it work in oop
  function loop() {
    for (let i = 0; i < boxesInstance.boxes.length; i += 1) {
      boxesInstance.boxes[i].createBox()
      // Beware this might crash you device
      boxesInstance.boxes[i].collisionDetect(boxes)
      boxesInstance.boxes[i].moveBox()
    }
    requestAnimationFrame(loop)
  }
  loop()
}
const boxContainer = document.querySelector('.box-container')

const testBoxes = new Boxes(boxContainer, 20)
// eslint-disable-next-line no-unused-vars
const boxesArray = testBoxes.init()
animate(testBoxes, boxesArray)
