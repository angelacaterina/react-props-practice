import React from "react";
import Avatar from "./Avatar";
import Card from "./Card";
import contacts from "../contacts";

// funzione per creare un nuovo componente della Card
function createCard(contact){
  return <Card
    key={contact.id}
    name={contact.name}
    img={contact.imgURL}
    tel={contact.phone}
    email={contact.email}
  />
}
// key: deve essere univoco per ogni componente mappato, per questo gli viene asseganto il valore dell' id

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media-exp1.licdn.com/dms/image/C4E03AQGEGjbJULQ_BA/profile-displayphoto-shrink_200_200/0/1618306439081?e=1639612800&v=beta&t=FGWuj5EkfBCuG1MHnmO-3yV0HIqsilX8oV6WMMgdrzk"/>
      {/* SENZA MAPPATURA */}
      {/* <Card 
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card 
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card 
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}

      {/* MAPPATURA DEI COMPONENTI, LOOP */}
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
