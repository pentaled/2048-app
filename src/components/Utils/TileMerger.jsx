import { getNextId } from "./TileGenerator"

const areTilesEqual = (t1, t2) => {
    return (
        (t1 === null && t2 === null) ||
        ((t1 && Object.keys(t1)?.length) === (t2 && Object.keys(t2)?.length) &&
            Object.keys(t1).every((p) => t1[p] === t2[p]))
    );
}

export const areEqual = (a1, a2) => {
    return a1.every((x) => a2.some((y) => areTilesEqual(x, y)))
}

export const mergeTiles = (tiles) => {
    let id = getNextId(tiles)
    let newTiles = {}

    tiles.forEach(element => {
        const key = `${element.row}${element.col}`
        if (newTiles[key]) {
            const newValue = element.value * 2
            newTiles[key] = { ...element, id: id++, value: newValue, type: "merged" }
        } else {
            newTiles[key] = element
        }
    });

    return Object.values(newTiles)
}