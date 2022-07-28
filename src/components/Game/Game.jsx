import { Board } from '../Board'
import { Header } from './Header'
import styled from 'styled-components'
import React, { useState } from 'react'
import { generateTiles } from '../Utils/TileGenerator'

const Wrapper = styled.div`
    width: 500px;
    margin: 0 auto;
`
const Game = () => {
    const [tiles, setTiles] = useState([])
    const [score, setScore] = useState(1000)
    
    const startGame = () => {
        const data = generateTiles(2)
        setTiles(data)
        console.log("bla")
    }

    return (
        <Wrapper>
            <Header startGame={startGame} score={score}/>
            <Board tiles={tiles}></Board>
        </Wrapper>
    )
}

export default Game