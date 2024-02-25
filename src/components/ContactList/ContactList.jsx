import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts }) {
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
