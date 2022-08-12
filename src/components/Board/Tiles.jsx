import PropTypes from 'prop-types'
import Tile from './Tile'

const List = ({ tiles }) => {
    return (
        <>
            {tiles.map((item) => {
                return (
                    <Tile key={item.id} value={item.value} type={item.value} x={item.coordinateX} y={item.coordinateY}/>
                )
            })}
        </>
    )
}

const Tiles = ({ tiles }) => {
    const sortedTiles = tiles.sort((t1, t2) => t1.id - t2.id)
    return (
        <List tiles={sortedTiles}/>
    )
}

List.propTypes = {
    tiles: PropTypes.array.isRequired
}

Tiles.propTypes = {
    tiles: PropTypes.array.isRequired
}

export default Tiles