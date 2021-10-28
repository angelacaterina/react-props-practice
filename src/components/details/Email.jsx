import React from "react";

function Email(props) {
  return (
    <p className="info">{props.email}</p>
  );
}

export default Email;

// EMAIL: componente SPECIFICO per richiamare le email, {props.email}