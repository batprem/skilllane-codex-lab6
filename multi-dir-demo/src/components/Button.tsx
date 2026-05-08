// Intentionally missing prop types — for Lab 6B subagent to find
import React from "react";

export function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`btn btn-${props.variant}`}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
}

export function IconButton(props) {
  return (
    <button onClick={props.onClick} aria-label={props.label}>
      {props.icon}
    </button>
  );
}

export function LinkButton(props) {
  return <a href={props.href}>{props.children}</a>;
}
