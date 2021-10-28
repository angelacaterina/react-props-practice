import React from "react";
import Avatar from "./Avatar";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  console.log(contacts)
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media-exp1.licdn.com/dms/image/C4E03AQGEGjbJULQ_BA/profile-displayphoto-shrink_200_200/0/1618306439081?e=1639612800&v=beta&t=FGWuj5EkfBCuG1MHnmO-3yV0HIqsilX8oV6WMMgdrzk"/>
      <Card 
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
      />
    </div>
  );
}

export default App;
