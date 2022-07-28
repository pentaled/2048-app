import styled from 'styled-components'
import PropTypes from 'prop-types'

const ActionButton = styled.button`
  background-color: #8f7a66;
  border: none;
  border-radius: 3px;
  padding: 12px 20px;
  color: #f9f6f2;
  cursor: pointer;
  font-weight: bold;
`

export const Button = ({ id, children, onClick }) => {
    return (
        <ActionButton
            id={id}
            onClick={onClick}
        >
            {children}
        </ActionButton>
    );
};

Button.propTypes = {
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}