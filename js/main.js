import { update as updateSnake, draw as drawSnake, snakeSpeed, snakeHead, snakeIntersection } from './snake.js'

import { update as updateApple, draw as drawApple } from './apple.js'

import { outsideGrid} from './grid.js'
//game loop - to update render (snake position / food etc. ) at a set of time.
let lastRenderTime = 0
const gameBoard = document.getElementById('game-grid')
let lost = false

function main(currentTime) {
if(lost) {
  if(confirm('You lost. Press Ok to restart')) {
    window.location = '/'
  }
  return
}

  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime)/ 1000
  if (secondsSinceLastRender < (1 / snakeSpeed)) return
  lastRenderTime = currentTime
    console.log('render')
    lastRenderTime = currentTime

//Logic for the game
    update() //moves the snake to correct position and checks if the snake ate the food or not by making it longer / or lost the game. 

    draw() //takes logic from updates and draws the snake in correct position and where the food should be. 
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateApple()
  checkFail()
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawApple(gameBoard)
}

function checkFail() {
  lost = outsideGrid(snakeHead()) || snakeIntersection()
}

