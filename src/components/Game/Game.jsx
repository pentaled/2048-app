import { Board } from '../Board'
import Header from './Header'
import styled from 'styled-components'
import React, { useState } from 'react'
// make the Css for the header part shown in the screen shoot in downloads {header}
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
    //const [tiles, setTiles] = useState([])
    const [score, setScore] = useState(1000)// <Header score={score}/>
    return (
        <Wrapper>
            <Header score={score}/>
            <Board tiles={data}></Board>
        </Wrapper>
    )
}

export default Game