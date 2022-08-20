import { INDICES, WINNER } from "./constants"
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

export const getRow = (tiles, row) => {
    return tiles.filter((item) => item.row === row)
}

export const getCol = (tiles, col) => {
    return tiles.filter((item) => item.col === col)
}

const moveUp = (tiles) => {
    return INDICES.map((i) => {
        return shiftTiles(getCol(tiles, i), 'up')
    }).flat()
}

const moveDown = (tiles) => {
    return INDICES.map((i) => {
        return shiftTiles(getCol(tiles, i), 'down')
    }).flat()
}

const moveLeft = (tiles) => {
    return INDICES.map((i) => {
        return shiftTiles(getRow(tiles, i), 'left')
    }).flat()
}

const moveRight = (tiles) => {
    return INDICES.map((i) => {
        return shiftTiles(getRow(tiles, i), 'right')
    }).flat()
}

export const MAP_MOVE_FUNCTION = {
    'up': moveUp,
    'down': moveDown,
    'right': moveRight,
    'left': moveLeft
}

const isVerticalDirection = (direction) => {
    return (direction === 'left' || direction == "right") ? false : true
}

const isDefaultDirection = (direction) => {
    return (direction === 'left' || direction === "up") ? true : false
}

const setTileCoordinate = (tile, newPosition, direction) => {
    if (isVerticalDirection(direction)) {
        tile.row = newPosition
        tile.coordinateY = getCoordinate(newPosition)
    } else {
        tile.col = newPosition
        tile.coordinateX = getCoordinate(newPosition)
    }
    return tile
}

const getTileCoordinate = (tile, direction) => {
    if (isVerticalDirection(direction)) {
        return tile.row
    }
    return tile.col
}

const shiftTiles = (tiles, direction) => {
    if (tiles.length === 0) {
        return []
    }
    let result = JSON.parse(JSON.stringify(tiles))
    result.sort((item1, item2) => getTileCoordinate(item1, direction) - getTileCoordinate(item2, direction))
    const startPosition = isDefaultDirection(direction) ? 0 : 4 - result.length
    for (let i = 0; i < result.length; i++) {
        setTileCoordinate(result[i], startPosition + i, direction)
    }

    if (isDefaultDirection(direction)) {
        result.reverse()
    }

    let i = result.length - 1
    while (i >= 1) {
        if (result[i].value === result[i - 1].value && result[i].value !== WINNER) {
            for (let j = 0; j <= i - 1; j++) {
                const shift = isDefaultDirection(direction) ? -1 : 1
                setTileCoordinate(result[j], getTileCoordinate(result[j], direction) + shift, direction)
            }
            i -= 2
            continue
        }
        i--
    }

    return result
}
