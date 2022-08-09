import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components";

const Button = ({ btnText }) => {
  return <StyledButton type="submit">{btnText}</StyledButton>
}

Button.propTypes = {
  btnText: PropTypes.string.isRequired
}

export const StyledButton = styled.button`
  padding: 1rem;
  border-radius: 15px;
  margin-top: 0.5rem;
  border: 3px solid white;
  background-color: rgba(201, 240, 273, 0.7);
  cursor: pointer;
  font-size: 16px
`

export default Button