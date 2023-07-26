//mengimpor fungsi configureStore dari Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

//mengimpor reducer dari slider 'counter' yang telah kita buat sebelumnya
import counterReducer from "./counterSlice";

//konfigurasi store menggunakan configureStore
const store = configureStore({
   reducer: {
      //menyediakan root reducer untuk store

      counter: counterReducer, //menggunakan reducer 'counter' untuk mengelola state 'counter'
      //...tambahkan reducer lain jika membutuhkan aksi
   },
});

//menggunakan TypeScript untuk menetapkan tipe RootState sebagai tipe dari state pada store
export type RootState = ReturnType<typeof store.getState>;

//menggunakan TypeScript untuk menentukan tipe AppDispatch sebagai tipe dari dispatch pada store
export type AppDispatch = typeof store.dispatch;

//mengekspor store yang telah dikonfigurasi dan siap digunakan dalam aplikasi
export default store;
