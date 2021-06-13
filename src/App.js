import React, { useState, useEffect } from "react";
import "./App.css";
// Importing components
import Form from "./components/Form";
import TodoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [toDos, SetToDos] = useState([]);
  const [status, SetStatus] = useState("all");
  const [filteredTodos, SetFilteredTodos] = useState([]);

  //  functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        SetFilteredTodos(toDos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        SetFilteredTodos(toDos.filter((todo) => todo.completed === false));
        break;
      default:
        SetFilteredTodos(toDos);
        break;
    }
  };

  useEffect(() => {
    filterHandler();
  }, [toDos, status]);

  return (
    <div>
      <header> to do list </header>
      <Form
        toDos={toDos}
        SetToDos={SetToDos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={SetStatus}
      />

      <TodoList
        todos={toDos}
        SetTodos={SetToDos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
