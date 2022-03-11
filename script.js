import Grid from "./Grid.js";
import Tile from "./Tile.js";
const gameBoard = document.getElementById("game-board")
const grid = new Grid(gameBoard)
console.log(grid.randomEmptyCell())

// for two random number to appear on the board
grid.randomEmptyCell().tile = new Tile(gameBoard)
grid.randomEmptyCell().tile = new Tile(gameBoard)