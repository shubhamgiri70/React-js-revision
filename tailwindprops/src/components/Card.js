import React from "react";

function Card(props) {
  return (
    <ul className="card">
      <li>
        <img src={props.user.imgLink} alt={props.user.username} />
        <h2>{props.user.username}</h2>
        <span>{props.user.profession}</span>
        <small>{props.user.age}</small>
        <p>{props.user.bio}</p>
      </li>
    </ul>
  );
}

export default Card;
