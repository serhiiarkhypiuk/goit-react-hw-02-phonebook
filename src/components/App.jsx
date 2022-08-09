import React, { Component } from "react"
// import styled from "styled-components"
import { nanoid } from "nanoid"
import ContactForm from "./organisms/Form/Form"
import Title from "./atoms/Title/Title"
import Filter from "./atoms/Input/Input"
import ContactsList from "./atoms/ContactsList/ContactsList"
import styled from "styled-components"

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: "",
    number: "",
    filter: ""
  }
  
  onSubmit = ( event ) => {
    event.preventDefault()
    
    if (this.state.contacts.find((contact) => contact.name === this.state.name)) {
      alert(`${this.state.name} is already in contacts`)
      this.setState({
        name: "",
        number: ""
      })
      return
    }

    this.setState({
      contacts: [
        ...this.state.contacts,
        { id: 'id-' + nanoid(1), name: this.state.name, number: this.state.number }],
      name: "",
      number: "",
    })
  }

  onChange = (event, field) => {
    this.setState({ [field]: event.target.value })
  }

  onSearch = ( event ) => {
    const searchQuery = event.target.value
    this.setState({
      filter: searchQuery
    })
    console.log(searchQuery)
  }
  
  deleteContact = ( contactId ) =>
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== contactId),
  })
  
  render() {
    const normalizedFilter = this.state.filter.toLowerCase()
    const displayedContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))

    return (
      <StyledWrapper>
        <Title headerTitle="Phonebook" />
        <ContactForm onSubmit={this.onSubmit} state={this.state} onChange={this.onChange} />
        <Title headerTitle="Contacts" />
        <Title headerTitle="Find contacts by name" />
        <Filter
          type="text"
          name="search"
          value={this.state.filter}
          onChange={this.onSearch}
          required={false}
        /> {displayedContacts.length === 0 && this.state.filter.length > 0
          ? (<p>No results for your search</p>)
          : <ContactsList displayedContacts={displayedContacts} onClick={this.deleteContact} />
          }
      </StyledWrapper>
    )
  }
}

const StyledWrapper = styled.div`
  width: 25vw;
  max-width: 25vw;
  margin: 10vh 25vw;
  padding: 1rem;
  background-color: rgba(201, 240, 243, 0.7);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export default App