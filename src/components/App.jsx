import "./App.css";
// import initialContacts from "../contacts.json";

import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import SearchBox from "./SearchBox";
// import { useState, useEffect } from "react";

function App() {
 

  return (
    <div>
      <h1>Phonebook</h1>
      <p></p>
      <ContactForm />
      <SearchBox/>

      <ContactList />
    </div>
  );
}

export default App;
