// src/store/index.ts

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice"; // Import reducer to-do list

const store = configureStore({
   reducer: {
      todo: todoReducer, // Add to-do list reducer
      // ...Tambahkan reducer lain jika Anda membutuhkannya di sini...
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
