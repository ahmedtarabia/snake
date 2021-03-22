import {onSnake, growSnake} from './snake.js'
import { randomGridPosition } from './grid.js'
let apple = getRandomApplePosition() //0 is outside the grid. 
const growthSegment = 3

export function update () {
  if(onSnake(apple)) {
    growSnake(growthSegment)
    apple = getRandomApplePosition()
  }
}

export function draw (gameBoard) {
  const appleElement = document.createElement('div')
  appleElement.style.gridRowStart = apple.y
  appleElement.style.gridColumnStart = apple.x
  appleElement.classList.add('apple')
  gameBoard.appendChild(appleElement)
  
}

function getRandomApplePosition() { //checks to avoid placing apple where the snake is. 
  let newApplePosition 
  while (newApplePosition == null || onSnake(newApplePosition)) {
    newApplePosition = randomGridPosition()
  }
  return newApplePosition
}

