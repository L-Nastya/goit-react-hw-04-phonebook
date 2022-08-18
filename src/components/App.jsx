import { React } from "react";
import { useState, useEffect } from "react";
import shortid from "shortid";
import styled from "styled-components";
import Section from "./Section/Section";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";


const App = () => {
  const [contacts, setContacts] = useState(() => JSON.parse(window.localStorage.getItem("list")) ?? [],);
  const [filter, setFilter] = useState('');
  
  const addContact = (name,number) => {
    const newContact = {
        id: shortid.generate(),
        name,
        number,
    } 
     if (contacts.find(contact => contact.name === name)) {
            alert("This contact is already in your list") 
            return
         };
    setContacts(prevState => ([...prevState, newContact]));
  };
   const deleteContact = contactId => {
    setContacts(prevState => (prevState.filter(contact => contact.id !== contactId)));
  };
   const changeFilter = event => {
   setFilter(event.currentTarget.value);
  };

  const getVisibleTodos = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  useEffect(() => {
      window.localStorage.setItem('list', JSON.stringify(contacts))
    
  }, [contacts]);
 
 const visibleTodos = getVisibleTodos();
    return (
      <SectionStyle>
    <Section title="PhoneBook">
         <ContactForm onSubmit={addContact} />
       </Section>
        <Section title="Contacts">
          <Filter
            value={filter}
            onChange={changeFilter}
          />
         <ContactList
            contacts={visibleTodos}
            onDelete={deleteContact}
           />
        </Section>
        </SectionStyle>
  );
  }
 

export default App

const SectionStyle = styled.div`
  width: 50%;
  box-sizing: border-box;
  padding: 15px;
  margin: 70px auto;
  box-shadow:  0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
  background-color: #ebdacf;

`;