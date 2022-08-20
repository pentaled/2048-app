import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Board } from '../Board'
import { Header } from './Header'
import { generateTiles, createRandomTile } from '../Utils/TileGenerator'
import { MAP_MOVE_FUNCTION, getDirection } from '../Utils/TileControl'
import { mergeTiles, areEqual } from '../Utils/TileMerger'
import { getGameStatus } from '../Utils/GameStatus'
import { Results } from './Results'

const Wrapper = styled.div`
    width: 500px;
    margin: 0 auto;
`

const Game = () => {
    const [tiles, setTiles] = useState([])
    const [score, setScore] = useState(0)
    const [gameStatus, setGameStatus] = useState('NEW_GAME')
    const [isPressed, setPressed] = useState(false)

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!isPressed) {
                setPressed(true)
                const direction = getDirection(e.key)
                const currentGameStatus = getGameStatus(tiles)
                setGameStatus(currentGameStatus)

                if (direction && gameStatus == "IN_PROGRESS") {
                    const moveTiles = MAP_MOVE_FUNCTION[direction]
                    let newTiles = moveTiles(tiles)
                    if (!areEqual(tiles, newTiles)) {
                        newTiles = mergeTiles(newTiles, updateScore)
                        newTiles = [...newTiles, createRandomTile(newTiles)]
                        setTiles(newTiles)
                    }
                }
                setPressed(false)
            }
        }

        document.addEventListener('keydown', handleKeyPress)

        return () => {
            document.removeEventListener('keydown', handleKeyPress)
        }
    })

    const startGame = () => {
        const data = generateTiles(2)
        setTiles(data)
        setGameStatus('IN_PROGRESS')
    }

    const updateScore = (points) => {
        setScore(score + points)
    }

    return (
        <Wrapper>
            <Header startGame={startGame} score={score} />
            <Board tiles={tiles}>
                {(gameStatus == "WIN" || gameStatus == "GAME_OVER")
                    && <Results status={gameStatus} startGame={startGame} />}
            </Board>
        </Wrapper>

    )
}

export default Game