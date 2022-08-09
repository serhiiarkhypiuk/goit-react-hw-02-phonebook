import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components";
import { StyledButton } from "../Button/Button";

const ListItem = ({ contact, onClick }) => {
  return (
    <StyledLI>{contact.name}: {contact.number}
      <StyledButton onClick={() => { onClick(contact.id) }} type="button">Delete</StyledButton>
    </StyledLI>
  )
}

ListItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

const StyledLI = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center
`

export default ListItem