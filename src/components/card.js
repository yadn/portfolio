import React from "react";
import './card.scss'

const Card = (props) => {

  return (
    <div className={`card ${props.className}`}>
      <div className={`card-icon ${props.className}`}>{props.icon}</div>
      <div className="card-description">
        <div className="topBar">
          <div className="left">
            <div className="left_title">{props.left_title}</div>
            <div className="left_subtitle">{props.left_subtitle}</div>
          </div>
          <div className="right">
            <div className="right_title">{props.right_title}</div>
            <div className="right_subtitle">{props.right_subtitle}</div>
          </div>
        </div>
        <div className="bottom">
          {props.bottom}
        </div>
      </div>
    </div>
  )


}

export default Card