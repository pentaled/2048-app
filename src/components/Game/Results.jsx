import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    animation: fade-in 1200ms ease 500ms;
    animation-fill-mode: both;
    background-color: rgba(255, 255, 255, 0.7);
`

const Title = styled.p`
    font-size: 60px;
    font-weight: bold;
    color: #8f7a66;
    line-height: 60px;
    margin-top: 0;
    margin-bottom: 10px;
`

const ContinueButton = styled.button`
    margin-top: 15px;
    background-color: #8f7a66;
    border: none;
    border-radius: 3px;
    padding: 12px 20px;
    color: #f9f6f2;
    cursor: pointer;
    font-weight: bold;
`

export const Results = ({ status, startGame }) => {
    return (
        <Wrapper>
            <Title>
                {status === 'WIN' ? 'Congratulation! You win!' : 'Game Over!'}
            </Title>
            <ContinueButton onClick={startGame}>
                {status === 'WIN' ? 'Continue' : 'Try Again'}
            </ContinueButton>
        </Wrapper>
    )
}