import React from "react";
// import ReactDOM, { render } from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./assets/utility/StateProvider";
import reducer, { initialState } from "./assets/utility/reducer";
import { HashRouter, BrowserRouter } from "react-router-dom";
// ReactDOM.render(
//   <React.StrictMode>
//     <HashRouter>
//       <StateProvider initialState={initialState} reducer={reducer}>
//         <App />
//       </StateProvider>
//     </HashRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
