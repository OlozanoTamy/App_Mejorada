import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Icon } from "@mui/material";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
    console.log(DeleteIcon);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
