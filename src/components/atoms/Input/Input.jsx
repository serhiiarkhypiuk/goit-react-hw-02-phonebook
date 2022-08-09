import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components";

const Input = ({ type, name, value, onChange, title, required, pattern }) => {
  return (
    <StyledInput
      type={type}
      name={name}
      pattern={pattern}
      title={title}
      required={required}
      value={value}
      onChange={onChange}
      autoComplete="off"
    />
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  required: PropTypes.bool,
  pattern: PropTypes.string
}

const StyledInput = styled.input`
  height: 2rem;
  width: 75%
`

export default Input