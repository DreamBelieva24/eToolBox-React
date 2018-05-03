import React from "react";
import "./Input.css";

export const Input = props => (
  <div className="ten twelfths">
  <div className="form-group" style={{ float: "left", marginBottom: 5 }} >
    <input className="form-control" {...props}  />
  </div>
  </div>
);
