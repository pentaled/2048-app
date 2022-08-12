import styled from 'styled-components'
import PropTypes from 'prop-types'
import './animation.css'

const typeSwitch = (type) => {
    switch (type) {
        case "merged": 
            return "animation: grow 200ms ease 100ms;"
        default:
            return "animation: appear 300ms ease 100ms;"
    }
    //merged: "animation: grow 200ms ease 100ms;"
    // new: "animation: appear 300ms ease 100ms;"
}

const colorSwitch = (value) => {
    switch (value) {
        case 2: 
            return "background: #eee4da;"
        case 4:
            return "background: #eee1c9;"
        case 8:
            return "color: #f9f6f2; background: #f3b27a;"
        case 16:
            return "color: #f9f6f2; background: #f69664;"
        case 32:
            return "color: #f9f6f2; background: #f77c5f;"
        case 64:
            return "color: #f9f6f2; background: #f75f3b;"
        case 128:
            return "color: #f9f6f2; background: #edd073;"
        case 256:
            return "color: #f9f6f2; background: #edcc62;"
        case 512:
            return "color: #f9f6f2; background: #edc950;"
        case 1024:
            return "color: #f9f6f2; background: #edc53f;"
        case 2048:
            return "color: #f9f6f2; background: #edc22e;"
        default:
            return "background: #eee4da;"
    }
}

const Wrapper = styled.div`
    position: absolute;
    width: 106px;
    height: 106px;
    line-height: 106px;
    float: left;
    color: ''#edc53f'';
    border-radius: 3px;
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
    font-size: ${ 
        props => props.value > 1000 ? '35px' : '45px'
    };
    animation-fill-mode: backwards;
    ${({ value }) => colorSwitch(value)}
    ${({ type }) => typeSwitch(type)}
`

const Tile = ({ value, x, y }) => {

    return (
        <Wrapper style={{ transform: `translate(${x}px, ${y}px)` }}>
            <Inner value={value}>
                {value}
            </Inner>
        </Wrapper>
    )
}

Tile.defaultProps = {
    value: 2,
    type: "new",
    x: 0,
    y: 0
}

Tile.propTypes = {
    value: PropTypes.number,
    type: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
}

export default Tile