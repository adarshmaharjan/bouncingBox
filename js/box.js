/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
class Box {
  constructor(parentElem) {
    this.parentElem = parentElem // parent element of the box
    this.fullWidth = Number(
      window
        .getComputedStyle(this.parentElem)
        .getPropertyValue('width')
        .match(/(\d+)/)[0]
    )
    this.fullHeight = Number(
      window
        .getComputedStyle(this.parentElem)
        .getPropertyValue('height')
        .match(/(\d+)/)[0]
    )
    this.size = random(10, 20) // length and breadth of the square
    this.x = random(0 + this.size, this.fullWidth - this.size) // position X
    this.y = random(0 + this.size, this.fullHeight - this.size) // position Y
    this.velX = randVelocity(-7, 7)
    this.velY = randVelocity(-7, 7)
    this.color = `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`
    this.box = document.createElement('div')
  }

  // creates a box
  // eslint-disable-next-line consistent-return
  createBox() {
    const boxStyle = {
      height: `${this.size}px`,
      width: `${this.size}px`,
      position: `absolute`,
      top: `${this.y}px`,
      left: `${this.x}px`,
      backgroundColor: this.color,
    }

    mapStyle(this.box, boxStyle)

    if (this.parentElem) {
      this.parentElem.appendChild(this.box)
      return this.box
    }
  }

  moveBox() {
    if (this.x + this.size >= this.fullWidth) {
      this.velX = -this.velX
    }

    if (this.x - this.size <= 0) {
      this.velX = -this.velX
    }

    if (this.y + this.size >= this.fullHeight) {
      this.velY = -this.velY
    }

    if (this.y - this.size <= 0) {
      this.velY = -this.velY
    }

    this.x += this.velX
    this.y += this.velY
  }

  collisionDetect(boxes) {
    for (let i = 0; i < boxes.length; i += 1) {
      if (!(this === boxes[i])) {
        const rect1 = this.box.getBoundingClientRect()
        const rect2 = boxes[i].box.getBoundingClientRect()

        if (isCollision(rect1, rect2)) {
          // eslint-disable-next-line no-param-reassign
          boxes[i].box.style.backgroundColor = '#fff'
          this.box.style.backgroundColor = '#fff'

          // change direction
          this.velX = -this.velX
          this.velY = -this.velY

          // move to changed direction
          this.x += this.velX
          this.y += this.velY
        } else {
          setTimeout(() => {
            // eslint-disable-next-line no-param-reassign
            boxes[i].box.style.backgroundColor = boxes[i].color
            this.box.style.backgroundColor = this.color
          }, 1500)
        }
      }
    }
  }
}
