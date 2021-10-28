import React from "react";

function Avatar(props) {
  return (
    <img className="circle-img"
      src={props.img}
      alt="avatar_img"
    />
  );
}

export default Avatar;

// Avatar: componente SPECIFICO per richiamare l'immagine,
// <img className="circle-img" src={props.img} alt="avatar_img" />