// Intentionally missing prop types
import React from "react";

export function Card(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      {props.children}
    </div>
  );
}
