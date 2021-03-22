import { getInputDirection} from './input.js'

let newSegments = 0
export const snakeSpeed = 6 //How many times the snake moves per second. 
//Snake will be represented as x and y position. 
const snakeBody = [{ x: 11, y: 11}]

export function update () {
  addSegments()
  const inputDirection = getInputDirection()
  for (let i = snakeBody.length - 2; i >= 0 ; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] } //snake segment moves to where it's parent postion is. 
  }

  snakeBody[0].x += inputDirection.x
  snakeBody[0].y += inputDirection.y //as why increases, snake goes down. 
}

export function draw (gameBoard) {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  })
}

export function growSnake(amount) {
  newSegments += amount
}

export function onSnake(position, { ignoreHead = false} = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false
    return equalPositions(segment, position)
  })
}

export function snakeHead() {
  return snakeBody[0]
}

export function snakeIntersection() {
  return onSnake(snakeBody[0], {ignoreHead: true})
}


function equalPositions(position1, position2) {
  return position1.x === position2.x && position1.y === position2.y
}

function addSegments () {
  for (let i = 0; i<newSegments; i++) {
    snakeBody[snakeBody.length] = { ...snakeBody[snakeBody.length - 1]}
  }
  newSegments = 0
}


