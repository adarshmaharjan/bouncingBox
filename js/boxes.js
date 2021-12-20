// eslint-disable-next-line no-unused-vars
class Boxes {
  constructor(parentContainer, noOfBoxes) {
    this.boxes = []
    this.noOfBoxes = noOfBoxes
    // this.boxesLength = this.boxes.length
    this.parentContainer = parentContainer
  }

  createBoxes() {
    const containerStyle = {
      height: `${100}vh`,
      width: `${100}vw`,
      backgroundColor: `#171717`,
      position: `relative`,
    }
    // eslint-disable-next-line no-undef
    mapStyle(this.parentContainer, containerStyle)
    while (this.boxes.length < this.noOfBoxes) {
      // eslint-disable-next-line no-undef
      const box = new Box(this.parentContainer)
      this.boxes.push(box)
    }
    return this.boxes
  }

  animate() {
    // not able to make it work in oop
    const boxesLength = this.boxes.length
    // const that = this
    function loop() {
      for (let i = 0; i < boxesLength; i += 1) {
        this.boxes[i].createBox()
        // Beware this might crash you device
        this.boxes[i].collisionDetect(this.boxes)
        this.boxes[i].moveBox()
      }
      requestAnimationFrame(loop.bind(this))
    }
    loop.bind(this)()
  }

  init() {
    this.createBoxes()
    this.animate()
    return this
  }
}
