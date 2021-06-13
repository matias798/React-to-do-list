import React,{useState} from "react";
import './App.css';
// Importing components
import Form from "./components/Form"
import TodoList from "./components/ToDoList"

function App() {
const [inputText,setInputText]= useState("");
 const [toDos,SetToDos]=useState([]);
return (
    <div>
    <header> to do list {inputText}</header>  
   < Form toDos={toDos} SetToDos={SetToDos} inputText={inputText} setInputText={setInputText}/>
   < TodoList todos={toDos} SetTodos={SetToDos}  />
   </div> )}

export default App;
