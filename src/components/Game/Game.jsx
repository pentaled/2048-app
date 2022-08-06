import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Board } from '../Board'
import { Header } from './Header'
import { generateTiles } from '../Utils/TileGenerator'
import { MAP_MOVE_FUNCTION, getDirection } from '../Utils/TileControl'
import { mergeTiles, areEqual } from '../Utils/TileMerger'

const Wrapper = styled.div`
    width: 500px;
    margin: 0 auto;
`

const Game = () => {
    const [tiles, setTiles] = useState([])
    const [score, setScore] = useState(100)
    useEffect(() => {
        const handleKeyPress = (e) => {
            const direction = getDirection(e.key)
            if (direction) {
                const moveTiles = MAP_MOVE_FUNCTION[direction]
                let newTiles = moveTiles(tiles)
                if (!areEqual(tiles, newTiles)) {
                    newTiles = mergeTiles(newTiles)
                    setTiles(newTiles)
                }
            }
        }

        document.addEventListener('keydown', handleKeyPress)

        return () => {
            document.removeEventListener('keydown', handleKeyPress)
        }
    })

    const startGame = () => {
        const data = generateTiles(8)
        setTiles(data)
        console.log('start game.....')
    }

    return (
        <Wrapper>
            <Header startGame={startGame} score={score} />
            <Board tiles={tiles}></Board>
        </Wrapper>

    )
}

export default Game