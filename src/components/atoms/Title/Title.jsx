import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components";

const Title = ({ headerTitle }) => {
  return <StyledTitle>{headerTitle}</StyledTitle>
}

Title.propTypes = {
  headerTitle: PropTypes.string.isRequired
}

const StyledTitle = styled.h2`
  font-style: italic
`
export default Title