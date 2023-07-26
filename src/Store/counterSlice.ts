// mengimport fungsi createSlice dari Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

//mendefinisikan tipe state untuk slice ini
interface CounterState {
   count: number; //properti count dengan tipe number
}

//mendefinisikan nilai awal(initial state) untuk slice ini
const initialState: CounterState = {
   count: 0, //nilai awal untuk properti count adalah 0
};

//membuat slice dengan menggunakan fungsi createSlice
const counterSlice = createSlice({
   name: "counter", //nama untuk Slice ini, digunakan dalam menyimpan data pada store
   initialState, //menggunakan nilai initialState yang telah didefinisikan sebelumnya
   reducers: {
      //mendefinisikan aksi (action) untuk slice ini

      //aksi untuk melakukan penambahan 1 pada nilai count
      increment(state) {
         state.count += 1; //menambahkan 1 nilai ke property count
      },

      //aksi untuk melakukan pengurangan 1 dari nilai count
      decrement(state) {
         state.count -= 1; //mengurangi 1 nilai ke property count
      },
      //...tambahkan aksi lain jika ada
   },
});

//mengekspor aksi-aksi yang telah didefinisikan
export const { increment, decrement } = counterSlice.actions;

//mengekspor reducer dari slice ini, reducer akan mengelola perubahan
export default counterSlice.reducer;
