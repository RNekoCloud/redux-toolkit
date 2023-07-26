//mengimport ReactDom dari "react-dom/client" untuk rendering aplikasi
import ReactDOM from "react-dom/client";
//mengimpor Komponen App dari "./App"
import { App } from "./App";
//mengimpor store yang telah dikonfigurasi dari "./Store"
import store from "./Store";
//mengimpor Provider dari "react-redux" untuk menyediakan store pada seluruh komponen aplikasi
import { Provider } from "react-redux";
//mengimpor file css global "./index.css"
import "./index.css";

//menggunakan ReactDom.createRoot() untuk rendering komponen App ke dalam elemen id "root"
//dengan menyediakan store melalui Provider
ReactDOM.createRoot(document.getElementById("root")!).render(
   //menggunakan Provider untuk memberikan akses ke store pada seluruh komponen di dalam <App />
   <Provider store={store}>
      <App />
      {/* Komponen App akan di-render dengan akses ke store melalui Provider*/}
   </Provider>
);
