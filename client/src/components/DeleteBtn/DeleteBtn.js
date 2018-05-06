import React from "react";
import "./DeleteBtn.css";


const DeleteBtn = props => (
  <span className="delete-btn" role="img" aria-label="trashcan" {...props}>
    🗑️
  </span>
);

export default DeleteBtn;
