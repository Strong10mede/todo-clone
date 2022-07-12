import React from "react";
import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material/";
import "./Todo.css";
function Todo({ text }) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={text} secondary="dummy deadline ::⏰ " />
      </ListItem>
    </List>
  );
}

export default Todo;
