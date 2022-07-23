import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ScoreBoard } from './ScoreBoard'
import { Button } from './Button'

const Wrapper = styled.div`
    display: flex;
    color: #776E65;
    flex-direction: column;
    margin: 20px 0;
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.div`
    width: 140px;
    height: 140px;
    line-height: 140px;
    color: #f9f6f2;
    background: #edc22e;
    border-radius: 6px;
    text-align: center;
    font-size: 42px;
    font-weight: 600;
`
const Description = styled.div`
    font-size: 22px;
    font-weight: 600;
    margin-top: 20px;
`

export const Header = ({ startGame, score }) => {
    return (
        <Wrapper>
            <Row>
                <Title>2048</Title>
                <Column>
                    <ScoreBoard score={score} />
                    <Button id="newGame" onClick={startGame}>New Game</Button>
                </Column>
            </Row>
            <Row>
                <Description>Join the numbers to get 2048!</Description>
            </Row>
        </Wrapper>
    )
}

Header.propTypes = {
    startGame: PropTypes.func.isRequired,
    score: PropTypes.number.isRequired
}
