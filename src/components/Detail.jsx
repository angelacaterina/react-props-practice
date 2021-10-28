import React from "react";

function Detail(props) {
  return (
    <p className="info">{props.detailInfo}</p>
  );
}

export default Detail;

// Detail: componente creato per sostituire i <p className="info"></p>
// in questo caso è stato aggiunto {props.detailInfo}, che funge da contenitore
// per le {props.tel} e {props.email}, in modo da avere un unico componente per poi 
// smistarlo con le informazini che ci servono 