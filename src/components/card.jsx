
import React from "react";
import "./card.css";

const isOperator = val => {
  return !isNaN(val) || val === "." || val === "=";
};

export const Card = props => (
  <div
    className={`card-wrapper ${
      isOperator(props.children) ? null : "operator"
    }`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);