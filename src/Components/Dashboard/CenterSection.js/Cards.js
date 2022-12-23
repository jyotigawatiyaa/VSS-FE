import React from "react";
import "./Center.css";

const Cards = (props) => {
  return (
    <div
      id="card"
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "13px", textAlign: "center" }} className="name">
        <b> {props.name}</b>
      </p>
      <p style={{ fontSize: "13px", textAlign: "center" }} className="value">
        <b>{props.value}</b>
      </p>
    </div>
  );
};

export default Cards;
