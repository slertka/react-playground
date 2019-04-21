import React from "react";
import "./Split.css";

function Split(props) {
  const className = `split ${props.className}`;
  return <div className={className}>{props.children}</div>;
}

export default Split;
