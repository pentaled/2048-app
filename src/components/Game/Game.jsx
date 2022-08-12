import { Board } from '../Board'
import { Header } from './Header'
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { generateTiles } from '../Utils/TileGenerator'
import { getDirection, MAP_MOVE_FUNCTION } from '../Utils/TileControl'
import { mergeTiles, areEqual } from '../Utils/TileMerger'

const Wrapper = styled.div`
    width: 500px;
    margin: 0 auto;
`
const Game = () => {
    const [tiles, setTiles] = useState([])
    const [score, setScore] = useState(1000)
    const startGame = () => {
        const data = generateTiles(8)
        setTiles(data)
    }

    useEffect( () => {
        const handleKeyPress = (e) => {
            console.log('key pressed', e.key)
            const direction = getDirection(e.key)
            if(direction) {
                const moveTiles = MAP_MOVE_FUNCTION[direction]
                let newTiles = moveTiles(tiles)
                if (!areEqual(tiles, newTiles)) {
                    newTiles = mergeTiles(newTiles)
                    setTiles(newTiles)
                }
            }

            console.log('direction', direction)
        }
        document.addEventListener('keydown', handleKeyPress)
        
        return () => {
            document.removeEventListener('keydown', handleKeyPress)//Callback function
        }
    })

    return (
        <Wrapper>
            <Header startGame={startGame} score={score}/>
            <Board tiles={tiles}></Board>
        </Wrapper>
    )
}

export default Game