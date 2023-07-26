// src/store/todoSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
   id: number;
   text: string;
   done: boolean;
}

interface TodoState {
   todos: Todo[];
}

const initialState: TodoState = {
   todos: [],
};

const todoSlice = createSlice({
   name: "todo",
   initialState,
   reducers: {
      addTodo: (state, action: PayloadAction<string>) => {
         const newTodo: Todo = {
            id: Date.now(),
            text: action.payload,
            done: false,
         };
         state.todos.push(newTodo);
      },
      toggleTodo: (state, action: PayloadAction<number>) => {
         const todo = state.todos.find((todo) => todo.id === action.payload);
         if (todo) {
            todo.done = !todo.done;
         }
      },
      deleteTodo: (state, action: PayloadAction<number>) => {
         state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      },
   },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
