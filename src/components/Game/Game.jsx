import React, { useState } from 'react'
import styled from 'styled-components'
import { Board } from '../Board'
// import { Header } from './Header'

const Wrapper = styled.div`
    width: 500px;
    margin: 0 auto;
`

const Game = () => {
    const data = [
        {
            id: 1,
            x: 104,
            y: 104,
            value: 2,
        }
    ]
    const [tiles, setTiles] = useState([])
    const [score, setScore] = useState(1000)

    return (
        <Wrapper>
            <Board tiles={data}></Board>
        </Wrapper>

    )
}

export default Game