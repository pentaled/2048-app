import { WINNER } from "./constants"
import { getRow, getCol } from "./TileControl"

export const getGameStatus = (tiles) => {
    if (isGameWon(tiles)) {
        return "WIN"
    }

    if (isGameOver(tiles)) {
        return "GAME_OVER"
    }

    return "IN_PROGRESS"
}

const isGameWon = (tiles) => {
    return tiles.some((x) => x.value === WINNER);
}

const movePossible = (arr1, arr2, getCoordinate, direction) => {
    return arr1.some((x) =>
        arr2.some(
            (y) => getCoordinate(x, direction) === getCoordinate(y, direction) && x.value === y.value
        )
    );
}

const getCoordinate = (tile, direction) => {
    if (direction === 'x') {
        return tile.coordinateX
    }
    return tile.coordinateY
}

const isGameOver = (tiles) => {
    if (tiles.length < 16) {
        return false
    }

    for (let i = 0; i < 3; i++) {
        if (movePossible(
            getRow(tiles, i, 'x'),
            getRow(tiles, i + 1, 'x'),
            getCoordinate
        ) || movePossible(
            getCol(tiles, i, 'y'),
            getCol(tiles, i + 1, 'y'),
            getCoordinate
        )) {
            return false
        }
    }

    return true
}

