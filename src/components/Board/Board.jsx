import styled from 'styled-components'
import PropTypes from 'prop-types'
import BoardGrid from './BoardGrid'
import Tiles from './Tiles'

const Wrapper = styled.div`
    position: relative;
    padding-top: 15px;
    padding-left: 15px;
    cursor: default;
    background: #B9ADA1;
    border-radius: 6px;
    width: 500px;
    height: 500px;
    box-sizing: border-box;
    touch-action: none;
`

const Board = ({ tiles }) => {
    return (
        <Wrapper>
            <Tiles tiles={tiles}/>
            <BoardGrid/>
        </Wrapper>
    )
}

Board.propTypes = {
    tiles: PropTypes.array.isRequired
}

export default Board