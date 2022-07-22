import PropTypes from 'prop-types'
import Tile from './Tile'

const List = ({ tiles }) => {
    return (
        <>
            {tiles.map((item) => {
                return (
                    <Tile key={item.id} value={item.value} x={item.x} y={item.y}/>
                )
            })}
        </>
    )
}

const Tiles = ({ tiles }) => {
    // action
    return  (
        <List tiles={tiles}/>
    )
}

List.propTypes = {
    tiles: PropTypes.array.isRequired
}

Tiles.propTypes = {
    tiles: PropTypes.array.isRequired
}

export default Tiles