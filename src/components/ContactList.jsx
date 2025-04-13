import Contact from "./Contact";
import css from "./ContactsStyle/ContactList.module.css";
import { useSelector } from "react-redux";
// import { selectContacts } from "../redux/contactsSlice";
// import { selectFilter } from "../redux/filtersSlice";
import { selectFilteredContacts } from "../redux/contactsSlice";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.listItem}>
      {filteredContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
