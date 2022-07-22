import styled from 'styled-components'

const Wrapper = styled.div`
    width: 116px;
    height: 40px;
    margin-left: auto;
    margin-top: 20px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
    color: white;
    background-color:rgb(141, 122, 105);
`
/*

    color: white*/

const Button = () => {
    return (
        <Wrapper>New Game</Wrapper>
    )
}

export default Button