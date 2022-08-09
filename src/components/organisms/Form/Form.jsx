import React from "react";
import Button from "components/atoms/Button/Button";
import Input from "components/atoms/Input/Input";
import Title from "components/atoms/Title/Title";
import PropTypes from "prop-types"
import styled from "styled-components";

const ContactForm = ({ onSubmit, state, onChange }) => {
  const nameRegExp = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  const phoneRegexp = "\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"

    return (
      <StyledForm onSubmit={onSubmit}>
        <Title headerTitle="Name"/>
        <Input
          type="text"
          name="name"
          value={state.name}
          onChange={(event) => onChange(event, "name")}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required={true}
          pattern={nameRegExp}
        />
        <Title headerTitle="Number"/>
        <Input
          type="tel"
          name="number"
          value={state.number}
          onChange={(event) => onChange(event, "number")}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required={true}
          pattern={phoneRegexp}
        />
        <Button btnText="Add contact" />
      </StyledForm>
  )
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
`

export default ContactForm