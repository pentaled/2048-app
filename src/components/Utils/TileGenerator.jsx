import { array } from "prop-types"
import { TILE_WIDTH, TILE_GUTTER, BOARD_SIZE } from "./constants"

export const generateTiles = (tilesCount = 2) => {
    let tiles = []
    while (tilesCount > 0) {
        tiles = [...tiles, createRandomTile(tiles)]
        tilesCount--
    }
    return tiles
}

export const createRandomTile = (tiles) => {
    let rand = Math.floor(Math.random() * 16)
    let position = getPosition(rand)

    while (isOverlapping(tiles, position)) {
        rand = rand === 15 ? 0 : rand + 1;
        position = getPosition(rand)
    }

    const value = Math.round(Math.random()) > 0 ? 4 : 2;
    return {
        id: getNextId(tiles),
        value: value,
        col: position.x,
        row: position.y,
        coordinateX: getCoordinate(position.x),
        coordinateY: getCoordinate(position.y),
        type: "new"
    }
}

const isOverlapping = (tiles, position) => {
    return tiles.some((item) => item.col === position.x && item.row === position.y)
}

const getPosition = (random) => {
    const x = Math.floor(random / BOARD_SIZE)
    const y = random % BOARD_SIZE
    return { x, y }
}

export const getCoordinate = (position) => {
    return (position * TILE_WIDTH) + (position * TILE_GUTTER)
}

export const getNextId = (tiles) => {
    return getMaxId(tiles) + 1
}

const getMaxId = (tiles) => {
    const ids = tiles.map(item => {
        return item.id;
    });
    return Math.max.apply(Math, [0, ...ids]);
};