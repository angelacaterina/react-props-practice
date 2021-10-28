import React from "react";

function Phone(props) {
  return (
    <p className="info">{props.tel}</p>
  );
}

export default Phone;

// PHONE: componente SPECIFICO per richiamare il numero di telefono, {props.tel}