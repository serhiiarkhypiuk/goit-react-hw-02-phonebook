import React, { Component } from "react";
import Button from "components/atoms/Button/Button";
import Input from "components/atoms/Input/Input";
import Title from "components/atoms/Title/Title";
import styled from "styled-components";
import { nanoid } from "nanoid";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  }

  onChange = ( event ) => {
    const { name, value } = event.currentTarget
    this.setState({ [name]: value })
  }

  handleAddContact = ( event ) => {
    event.preventDefault()

    const addedContact = {
      id: 'id-' + nanoid(2),
      name: this.state.name,
      number: this.state.number,
    }

    this.props.onSubmit(addedContact)
    this.resetContactForm()
  }

  resetContactForm = () => {
    this.setState({ name: "", number: "" })
  }
  
  render() {
    const nameRegExp = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    // eslint-disable-next-line
    const phoneRegexp = "\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    const { name, number } = this.state

    return (
      <StyledForm onSubmit={this.handleAddContact}>
        <Title headerTitle="Name" />
        <Input
          type="text"
          name="name"
          value={name}
          onChange={this.onChange}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required={true}
          pattern={nameRegExp}
        />
        <Title headerTitle="Number" />
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={this.onChange}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required={true}
          pattern={phoneRegexp}
        />
        <Button btnText="Add contact" />
      </StyledForm>
    )
  }
}

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
`

export default ContactForm