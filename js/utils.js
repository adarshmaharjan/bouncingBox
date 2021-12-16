// eslint-disable-next-line no-unused-vars
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min
  return num
}

// maps style
// eslint-disable-next-line no-unused-vars
function mapStyle(element, style) {
  const keys = Object.keys(style)
  keys.forEach((key) => {
    // eslint-disable-next-line no-param-reassign
    element.style[key] = style[key]
  })
}

// collision detect

// eslint-disable-next-line no-unused-vars
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
