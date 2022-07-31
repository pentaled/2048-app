import styled from 'styled-components'
import { INDICES } from '../Utils/constants'

const Grid = styled.div`
    position: absolute;
    z-index: 2;
`
const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`

const Column = styled.div`
    width: 106px;
    height: 106px;
    margin-right: 15px;
    float: left;
    border-radius: 3px;
    background: #CBC1B6;
`

const BoardGrid = () => {
    const grid = INDICES.map((rowId) => {
        return (
            <Row key={rowId}>
                {INDICES.map((colId) => {
                    return (
                        <Column key={colId}>{colId}</Column>
                    )
                })}
            </Row>
        )
    })
    return (
        <Grid>
            {grid}
        </Grid>
    )
}

export default BoardGrid