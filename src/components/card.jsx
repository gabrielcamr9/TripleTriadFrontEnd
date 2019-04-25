
import React from "react";
import "./card.css";

export const Card = props => (
  <div className='card-wrapper'>
    <p className='a'>
    {`${props.info.name}
        ${props.info.up} 
${props.info.left}             ${props.info.right}
        ${props.info.down}`}
    </p>
  </div>
);