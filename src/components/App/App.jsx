import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/Filter";
import { ContactForm } from "../Form/Form";

import { StyledMainTitle, StyledTitle, Wrapper } from "./App.styled";

const STORAGE_KEY = 'contacts';

const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  const addNewContact = (newContact) => {
    const { name } = newContact
    const isExist = contacts.find(person => person.name === name.trim())

    if (isExist) {
      alert(`${name} is already in contacts.`)
      return false
    }

    const finallyNewContact = {
      id: nanoid(),
      ...newContact
    }

    setContacts(prevState => [finallyNewContact, ...prevState])
    return true
  }

  const onChangeFilter = ({ target: { value } }) => {
    setFilter(value)
  }

  const onDeleteBtnClick = (id) => {
    setContacts((prevState) => prevState.filter(person => person.id !== id))
  }

  const handlerFilterContacts = (e) => {
    const normalizeName = filter.toLowerCase().trim()
    const isContacts = (contacts !== []);
    return isContacts && contacts.filter(person => person.name?.toLowerCase().includes(normalizeName))
  }

  const filteredContacts = handlerFilterContacts();

  return (
    <Wrapper>
      <StyledMainTitle>Phonebook</StyledMainTitle>
      <ContactForm
        addNewContact={addNewContact}
      />
      <StyledTitle>Contact List</StyledTitle>
      <Filter
        onChangeFilter={onChangeFilter}
        filter={filter}
      />
      <ContactList
        onDeleteBtnClick={onDeleteBtnClick}
        filteredContacts={filteredContacts}
      />
    </Wrapper>
  )
};

export { App };

