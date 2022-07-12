import { useState, useEffect } from "react";
import "./App.css";
import { Button, Input, InputLabel, FormControl } from "@mui/material";
import Todo from "./Components/Todo";
import { db } from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(
    //this code here... fires when the app.js loads
    () => {
      db.collection("todos")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setTodos(
            snapshot.docs.map((doc) => ({ id: doc.id, task: doc.data().task }))
          );
        });
    },
    []
  );

  const addTodo = (event) => {
    //this will fire off when click the button
    event.preventDefault(); //will stop refresh
    console.log("fuck off");
    db.collection("todos").add({
      task: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="app">
      <h1>Hello Clever Programmer 🚀 </h1>
      <FormControl>
        <InputLabel> ✅ Write a Todo </InputLabel>
        <Input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </FormControl>
      <Button
        disabled={!input}
        variant="contained"
        type="submit"
        onClick={addTodo}
      >
        Add Todo
      </Button>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
