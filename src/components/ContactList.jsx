import { selectContacts } from "../redux/contactsSlice";
import Contact from "./Contact";
import css from "./ContactsStyle/ContactList.module.css";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector(selectContacts);

  const filter = useSelector((state) => state.filters.name.toLowerCase());
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

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
