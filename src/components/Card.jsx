import React from "react";
import Avatar from "./Avatar";
// import Phone from "./details/Phone";
// import Email from "./details/Email";
import Detail from "./Detail"

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        {/* <img className="circle-img" src={props.img} alt="avatar_img" /> */}
        <Avatar img={props.img}/>
      </div>
      <div className="bottom">
        {/* SENZA COMPONENTI */}
        {/* <p className="info">{props.tel}</p> */}
        {/* <p className="info">{props.email}</p> */}

        {/* CON 2 COMPONENTI SPECIFICI, PHONE E EMAIL */}
        {/* <Phone tel={props.tel} />    */}
        {/* <Email email={props.email} />    */}

        {/* UN SOLO COMPONENTE 'GLOBALE'*/}
        <Detail detailInfo={props.tel}/>
        <Detail detailInfo={props.email}/>
      </div>
    </div>
  );
}

export default Card;