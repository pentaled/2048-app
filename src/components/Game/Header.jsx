import ScoreBoard from './ScoreBoard'
import Button from './Button'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 500px;
    margin: 0 auto;
    margin-top: 20px;
`
const Text = styled.div`
    height: 70px;
    display: flex;
    font-weight: 650;
    align-items: center;
    margin-right: auto;
    font-size: 21px;
    color:rgb(103, 100, 95);
`

const Logo = styled.div`
    height: 144px;
    width: 148px;
    display: flex;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    background: #ebcd75;
    border-radius: 5px;
    float: left;
    font-size: 40px;
    color: white
`
const Header = ({ score }) => {
    return (
        <Wrapper>
            <Logo>2048</Logo>
            <ScoreBoard>{score}</ScoreBoard>
            <Button/>
            <Text>Join the numbers to get 2048!</Text>
        </Wrapper>
    )
}

export default Header