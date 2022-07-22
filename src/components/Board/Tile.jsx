import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
    position: absolute;
    width: 106px;
    height: 106px;
    line-height: 106px;
    float: left;
    border-radius: 3px;
    background: rgba(238, 228, 218, 0.35);
    box-shadow: 0 0 30px 10px rgb(243 215 116 / 0%),
    inset 0 0 0 1px rgb(255 255 255 / 0%);
    transition: 100ms ease-in-out;
    transition-property: transform;
    z-index: 100;
`

const Inner = styled.div`
    border-radius: 3px;
    text-align: center;
    font-weight: bold;
    z-index: 10;
    font-size: 45px;
    animation-fill-mode: backwards;
`

const Tile = ({ value, x, y }) => {
    return (
        <Wrapper style={{ transform: `translate(${x}px, ${y}px)` }}>
            <Inner>
                {value}
            </Inner>
        </Wrapper>
    )
}

Tile.defaultProps = {
    value: 2,
    x: 0,
    y: 0
}

Tile.propTypes = {
    value: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
}

export default Tile