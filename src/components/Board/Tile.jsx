import styled from 'styled-components'
import PropTypes from 'prop-types'

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
    background: ${ 
        props => props.value === 2 ? '#eee4da' : 
        props.value === 4 ? '#eee1c9' :    
        props.value === 8 ? '#f3b27a' : 
        props.value === 16 ? '#f69664' : 
        props.value === 32 ? '#f77c5f' :
        props.value === 64 ? '#f75f3b' :
        props.value === 128 ? '#edd073' :
        props.value === 256 ? '#edcc62' :
        props.value === 512 ? '#edc950' :
        props.value === 1024 ? '#edc53f' : '#edc22e'
    };
    color: '#edc53f';
    z-index: 10;
    font-size: ${ 
        props => props.value > 1000 ? '35px' : '45px'
    };
    animation-fill-mode: backwards;
`
// by using {value} to change the colour codes HW
//background: rgba(238, 228, 218, 0.35);
// 2:"background: #eee4da;";
// 4:"background: #eee1c9;";
//color: ${
//     props => props.value > 5 ? 'black' : 'f9f6f2'
// };
// 8:"color: #f9f6f2; background: #f3b27a;";
// 16:"color: #f9f6f2; background: #f69664;";
// 32:"color: #f9f6f2; background: #f77c5f;";
// 64:"color: #f9f6f2; background: #f75f3b;";
// 128:"color: #f9f6f2; background: #edd073;";
// 256:"color: #f9f6f2; background: #edcc62;";
// 512:"color: #f9f6f2; background: #edc950;";
// 1024:"color: #f9f6f2; background: #edc53f;";
// 2048:"color: #f9f6f2; background: #edc22e;";
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
    x: 0,
    y: 0
}

Tile.propTypes = {
    value: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
}

export default Tile