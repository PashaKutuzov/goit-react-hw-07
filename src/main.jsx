import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "modern-normalize";
import "./index.css";
import App from "./components/App";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider loading={null} store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
