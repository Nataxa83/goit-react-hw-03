import ContactList from "./components/ContactList/ContactList";
import initialContacts from "./components/contacts.json";
import { useState } from "react";

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactList contacts={contacts} />
    </>
  );
}
