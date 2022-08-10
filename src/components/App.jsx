import React, { Component } from "react"
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
    filter: ""
  }
  
  onSubmit = ( data ) => {
    if (this.state.contacts.find((contact) => contact.name === data.name)) {
      alert(`${data.name} is already in contacts`)
      return
    }

    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts]
    }))
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
        <ContactForm onSubmit={this.onSubmit} />
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