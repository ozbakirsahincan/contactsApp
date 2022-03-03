import { useState, useEffect } from "react";
import "./styles.css";

import Forms from "./Forms";
import List from "./List";

function Contacts() {
  const [contacts, setContacts] = useState([
    { fullname: "Ahmet", phone_number: "12345" },
    { fullname: "mehmet", phone_number: "34560" },
    { fullname: "mustafa", phone_number: "56789" },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Forms addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
