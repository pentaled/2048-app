import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
}
`
const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: #bbada0;
  padding: 10px 15px;
  border-radius: 3px;
  text-align: center;
  min-width: 80px;
`

const ScoreLabel = styled.div`
  font-size: 13px;
  color: #eee4da;
`

const ScoreBody = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: white;
  padding: 8px 0;
`

export const ScoreBoard = ({ score }) => {
    return (
        <Wrapper>
            <ScoreContainer>
                <ScoreLabel>Score</ScoreLabel>
                <ScoreBody>{score}</ScoreBody>
            </ScoreContainer>
        </Wrapper>

    )
}

ScoreBoard.propTypes = {
    score: PropTypes.number.isRequired
}
