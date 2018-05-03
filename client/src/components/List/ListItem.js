import React from "react";

export const ListItem = props => (
  <li draggable="true" className="list-group-item">
    {props.children}
  </li>
);
