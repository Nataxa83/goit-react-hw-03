import ContactList from "./components/ContactList/ContactList";
import initialContacts from "./components/contacts.json";
import { useState } from "react";
import SearchBox from "./components/SearchBox/SearchBox";

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );
  return (
    <>
      <h1>Phonebook</h1>
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} />
    </>
  );
}
