import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  //manejar el Zoom
  const [checked, setChecked] = useState(false);

  const handleCambio = () => {
    setChecked((prev) => !prev);
  };

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  // function expand() {
  //   setChecked(true);
  // }

  return (
    <div>
      <form className="create-note">
        {checked && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onChange={handleChange}
          onClick={handleCambio}
          value={note.content}
          placeholder="Take a note..."
          rows={checked ? "3" : "1"}
        />
        <Zoom in={checked}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
