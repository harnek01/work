import React from "react";
import "./stylingSheet.css";

export default function Button(props) {
  return (
    <div className="btn">
      <div className="btn-content">{props.content}</div>
    </div>
  );
}
