import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ todos, SetTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <ToDo
            text={todo.text}
            key={todo.id}
            todos={todos}
            todo={todo}
            setTodos={SetTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
