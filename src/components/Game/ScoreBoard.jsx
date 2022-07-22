import styled from 'styled-components'

const Wrapper = styled.div`
    width: 116px;
    height: 85px;
    background: #CBC1B6;
    margin-left: auto;
    border-radius: 3px;
    display: flex;
    justify-content: center;
`
const Title = styled.div`
    font-weight: 650;
    font-size: 14px;
    position: relative;
    top: 10px;
    left: 33px;
    color: #f5f0eb;
`
const Number = styled.div`
    font-weight: bold;
    position: relative;
    top: 35px;
    right: 20px;
    font-size: 26px;
    height: 28px;
    bottom: 20px;
    color: white;
`

const ScoreBoard = () => {
    return (
        <Wrapper>
            <Title>
                Score 
            </Title>
            <Number>
                1000
            </Number>
        </Wrapper>
    )
}

export default ScoreBoard