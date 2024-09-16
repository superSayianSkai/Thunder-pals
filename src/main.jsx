import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./components/Global/AppContext.jsx";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import firebaseConfig from "./firebase/firebaseconfig.js";
import store from "../src/context/store";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <Provider store={store}>
        <App />
        <ToastContainer />
      </Provider>
    </AppProvider>
  </React.StrictMode>
);
