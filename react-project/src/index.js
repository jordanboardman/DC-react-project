import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
import App from "./App";
import About from "./pages/About";
import AddFavorites from "./pages/AddFavorites";
import JordansFavorites from "./pages/JordansFavorites";
// import { reducer } from "./reducers/reducer";
import Header from "./components/layout/Header";
import BaseLayout from "./components/layout/BaseLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/favorites" element={<AddFavorites />} />
          <Route path="/jordan" element={<JordansFavorites />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BaseLayout>
    </Router>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
