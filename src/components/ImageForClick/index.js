import React from "react";
import "./style.css";

function ImageForClick(props) {
    return (
        <div
          role="img"
          aria-label="image clicked"
          onClick={() => props.handleClick(props.id)}
          style={{ backgroundImage: `url("${props.image}")` }}
          className={`image-clicked${props.shake ? " shake" : ""}`}
        />
    );
};

export default ImageForClick;