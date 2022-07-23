import React, { useState } from 'react'
import styled from 'styled-components'
import { Board } from '../Board'
import { Header } from './Header'
import { generateTiles } from '../Utils/TileGenerator'

const Wrapper = styled.div`
    width: 500px;
    margin: 0 auto;
`

const Game = () => {
    const [tiles, setTiles] = useState([])
    const [score, setScore] = useState(100)

    const startGame = () => {
        const data = generateTiles(4)
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