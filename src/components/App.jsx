import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import SearchBox from "./SearchBox";
import { fetchContacts } from "../redux/contactsOps";
import {
  selectContacts,
  selectIsLoading,
  selectIsError,
} from "../redux/contactsSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    if (contacts.length === 0) {
      dispatch(fetchContacts());
    }
  }, []);

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
      {isLoading && <p>Loading</p>}
      <ContactList />
      {isError && <p>Error</p>}
    </div>
  );
}

export default App;
