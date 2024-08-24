import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

// export default function ContactList({ contacts }) {
//   return (
//     <ul className={css.list}>
//       {contacts.map(({ id, name, number }) => {
//         return <Contact key={id} name={name} number={number} id={id} />;
//       })}
//     </ul>
//   );
// }

export default function TaskList({ contacts }) {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact name={contact.name} number={contact.number} />
        </li>
      ))}
    </ul>
  );
}
