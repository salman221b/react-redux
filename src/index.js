import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

// Create root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
