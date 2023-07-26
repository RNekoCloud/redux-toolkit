// src/components/TodoList.tsx

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../Store/index.todo";
import { addTodo, toggleTodo, deleteTodo } from "../Store/todoSlice";

const TodoList = () => {
   const todos = useSelector((state: RootState) => state.todo.todos);
   const dispatch = useDispatch<AppDispatch>();
   const [newTodoText, setNewTodoText] = useState("");

   const handleAddTodo = () => {
      if (newTodoText.trim() !== "") {
         dispatch(addTodo(newTodoText));
         setNewTodoText("");
      }
   };

   const handleToggleTodo = (id: number) => {
      dispatch(toggleTodo(id));
   };

   const handleDeleteTodo = (id: number) => {
      dispatch(deleteTodo(id));
   };

   return (
      <div>
         <input
            type='text'
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
         />
         <button onClick={handleAddTodo}>Add Todo</button>
         <ul>
            {todos.map((todo) => (
               <li key={todo.id}>
                  <span
                     style={{
                        textDecoration: todo.done ? "line-through" : "none",
                     }}
                     onClick={() => handleToggleTodo(todo.id)}
                  >
                     {todo.text}
                  </span>
                  <button onClick={() => handleDeleteTodo(todo.id)}>
                     Delete
                  </button>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default TodoList;
