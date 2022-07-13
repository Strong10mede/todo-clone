import React, { useState } from "react";
import {
  Button,
  Modal,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material/";
import "./Todo.css";
import { db } from "../firebase";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./Todo.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  textAlign: "center",
  padding: "1rem",
};

function Todo({ text }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo = () => {
    //update todo with the new input text
    db.collection("todos").doc(text.id).set({ task: input }, { merge: true });
    //merge prevents to overwrite what was in their, it will not create a new task but change the task with text.id
    handleClose();
  };
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div style={{ ...style }} className="modal__div">
          <h2 className="h2__modal">Type here to edit the task</h2>
          <input
            className="modal__input"
            style={{
              marginRight: "0.5rem",
              height: "30.5px",
              borderRadius: 6,
              marginBottom: "0.75rem",
              width: "40%",
            }}
            value={input}
            placeholder={text.task}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            className="modal__button"
            style={{
              marginLeft: "0.5rem",
              width: "40%",
            }}
            variant="contained"
            onClick={updateTodo}
          >
            UPDATE TODO
          </Button>
        </div>
      </Modal>
      <List className="todo__list">
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={text.task} secondary="dummy deadline ::⏰ " />
        </ListItem>
        <button style={{ marginRight: "0.5rem" }} onClick={handleOpen}>
          EDIT
        </button>
        <DeleteForeverIcon
          style={{ cursor: "pointer" }}
          onClick={(event) => db.collection("todos").doc(text.id).delete()}
        />
      </List>
    </>
  );
}

export default Todo;
