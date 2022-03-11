const CELL_COL = 4
const CELL_SIZE = 20
const CELL_GAP = 2

export default class Grid {
    // decleration of private variable which cannot be acessed outside the grid class;
    #cells

    constructor(gridElement) {
        gridElement.style.setProperty("--cell-col", CELL_COL)
        gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`)
        gridElement.style.setProperty("--cell-gap", `${CELL_GAP}vmin`)
        this.#cells = createCellElements(gridElement).map((cellElement, index) => {
            return new Cell(cellElement, index % CELL_COL, Math.floor(index / CELL_COL))
        })
        // console.log(this.cells)
        // createCellElements(gridElement)
    }
    get #emptyCells() {
        return this.#cells.filter(cell => cell.tile == null)
    }

    randomEmptyCell() {
    const randomIndex = Math.floor(Math.random() * this.#emptyCells.length)
        return this.#emptyCells[randomIndex]
    }
}


class Cell {
    // decleration of private variable which cannot be acessed outside the cell class;
    #cellElement
    #x
    #y
    #tile

    constructor(cellElement, x, y) {
        this.#cellElement = cellElement
        this.#x = x
        this.#y = y
    }
    get tile() {
        return this.#tile
    }
    set tile(value) {
        this.#tile=value
        if(value == null) return

        // responsible for the movement of tile
        this.#tile.x = this.#x
        this.#tile.y= this.#y
    }
}

function createCellElements(gridElement) {
    const cells = []
    for (let i = 0; i < CELL_COL * CELL_COL; i++) {
        const cell = document.createElement("div")
        cell.classList.add("cells")
        cells.push(cell)
        gridElement.append(cell)
    }
    return cells
}