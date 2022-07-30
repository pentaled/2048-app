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

const moveUp = (tiles) => {
    console.log('moveUp')
    return tiles
}

const moveDown = (tiles) => {
    console.log('moveDown')
    return tiles
}

const moveLeft = (tiles) => {
    console.log('moveLeft')
    return INDICES.map((i) => {
        return shiftHorizontally(getRow(tiles, i), 'left')
    }).flat()
}

const moveRight = (tiles) => {
    console.log('moveRight')
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
    return result

}