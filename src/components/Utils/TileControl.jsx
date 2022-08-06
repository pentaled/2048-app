import { INDICES, TILE_WIDTH, TILE_GUTTER, BOARD_SIZE } from "./constants"
import { getCoordinate } from "./TileGenerator"

export const getDirection = (key) => {
    switch (key) {
        case 'ArrowUp':
            return 'up'
        case 'ArrowDown':
            return 'down'
        case 'ArrowRight':
            return 'right'
        case 'ArrowLeft':
            return 'left'
        default:
            return null
    }
}

const getRow = (tiles, row) => {
    return tiles.filter((item) => item.row === row)
}

const getCol = (tiles, col) => {
    return tiles.filter((item) => item.col === col)
}

const moveUp = (tiles) => {
    return INDICES.map((i) => {
        return shiftVertically(getCol(tiles, i), 'up')
    }).flat()
}

const moveDown = (tiles) => {
    return INDICES.map((i) => {
        return shiftVertically(getCol(tiles, i), 'down')
    }).flat()
}

const moveLeft = (tiles) => {
    return INDICES.map((i) => {
        return shiftHorizontally(getRow(tiles, i), 'left')
    }).flat()
}

const moveRight = (tiles) => {
    return INDICES.map((i) => {
        return shiftHorizontally(getRow(tiles, i), 'right')
    }).flat()
}

export const MAP_MOVE_FUNCTION = {
    'up': moveUp,
    'down': moveDown,
    'right': moveRight,
    'left': moveLeft
}

const getTileColumn = (item) => {
    return item.col
}

const setTileColumn = (tile, col) => {
    tile.col = col
    tile.coordinateX = getCoordinate(col)
    return tile
}

const getTileRow = (tile) => {
    return tile.row
}

const setTileRow = (tile, row) => {
    tile.row = row
    tile.coordinateY = getCoordinate(row)
    return tile
}

const shiftHorizontally = (tiles, direction) => {
    if (tiles.length === 0) {
        return []
    }
    let result = JSON.parse(JSON.stringify(tiles))
    result.sort((item1, item2) => getTileColumn(item1) - getTileColumn(item2))
    const startPosition = direction === 'left' ? 0 : 4 - result.length
    for (let i = 0; i < result.length; i++) {
        setTileColumn(result[i], startPosition + i)
    }

    if (direction === 'left') {
        result.reverse()
    }

    let i = result.length - 1
    while (i >= 1) {
        if (result[i].value === result[i - 1].value) {
            for (let j = 0; j <= i - 1; j++) {
                const shift = direction === 'left' ? -1 : 1
                setTileColumn(result[j], getTileColumn(result[j]) + shift)
            }
            i -= 2
            continue
        }
        i--
    }

    return result
}

const shiftVertically = (tiles, direction) => {
    if (tiles.length === 0) {
        return []
    }
    let result = JSON.parse(JSON.stringify(tiles))
    result.sort((item1, item2) => getTileRow(item1) - getTileRow(item2))
    const startPosition = direction === 'up' ? 0 : 4 - result.length
    for (let i = 0; i < result.length; i++) {
        setTileRow(result[i], startPosition + i)
    }

    if (direction === "up") {
        result.reverse()
    }

    let i = result.length - 1;
    while (i >= 1) {
        if (result[i].value === result[i - 1].value) {
            for (let j = 0; j <= i - 1; j++) {
                const shift = direction === "up" ? -1 : 1;
                setTileRow(result[j], getTileRow(result[j]) + shift);
            }
            i -= 2;
            continue;
        }

        i--;
    }
    return result
}