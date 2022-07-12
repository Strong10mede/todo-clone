import React from "react";
import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material/";
import "./Todo.css";
import { db } from "../firebase";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
function Todo({ text }) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={text.task} secondary="dummy deadline ::⏰ " />
      </ListItem>
      <DeleteForeverIcon
        style={{ cursor: "pointer" }}
        onClick={(event) => db.collection("todos").doc(text.id).delete()}
      />
    </List>
  );
}

export default Todo;
