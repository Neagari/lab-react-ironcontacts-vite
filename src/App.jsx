import "./App.css";
import { useState } from "react";
import Contacts from "./contacts.json";
function compare_name(name_a, name_b) {
  return name_a.name.localeCompare(name_b.name);
}
// function compareNumbers(a, b) {
//   return a - b;
// }
const App = () => {
  const [contacts, setContacts] = useState(Contacts.slice(0, 5));
  const [remContacts, setRemContacts] = useState(Contacts.slice(6))
  console.log("contacts..",contacts);
const getRandom = ()=>{
  console.log("buttonnnnn");
  let randomIndex = Math.floor(Math.random() * remContacts.length);
  let randomContact = remContacts[randomIndex];
  setContacts([...contacts,randomContact]);
  let filterdContacts = randomContact.filter(oneContact=>{
    if(oneContact.name !== remContacts.name){
      return oneContact;
    }
  })
  setRemContacts(filterdContacts);
}
const sortedContacts = [...contacts].sort(compare_name)
  return (
    <div className="App">
      <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>wonOscar</th>
          <th>wonEmmy</th>
        </thead>
      {sortedContacts.map((contact)=>{
        return(
        <tr>
          <td>
            <img
              src={contact.pictureUrl}
              style={{height:"150px"}}
              alt="person"
            />
          </td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
          <td>{contact.wonOscar ? "🏆" : ""}</td>
          <td>{contact.wonEmmy ? "🏆" : ""}</td>
        </tr>
        )
      })}
      </table>
      <button onClick={getRandom}>Random</button>
    </div>
  );
};
export default App;


