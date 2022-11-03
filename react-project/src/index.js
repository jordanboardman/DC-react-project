import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
// import CountClass from "./components/CountClass"; //HERE JUST FOR REDUX HELP
// import CountHooks from "./components/CountHooks"; //HERE JUST FOR REDUX HELP
// import ViewCountClass from "./components/ViewCountClass"; //HERE JUST FOR REDUX HELP
// import ViewCountHooks from "./components/ViewCountHooks"; //HERE JUST FOR REDUX HELP
// import Contacts from "./components/Contacts"; //HERE JUST FOR REDUX HELP
import { reducer } from "./reducers/reducer";
import Header from "./components/layout/Header";
import BaseLayout from "./components/layout/BaseLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<App />} />
            {/* USE THESE ROUTES FOR YOUR OWN */}
            {/* <Route path="/count_class" element={<CountClass />} />
            <Route path="/count_hooks" element={<CountHooks />} />
            <Route path="/view_count_class" element={<ViewCountClass />} />
            <Route path="/view_count_hooks" element={<ViewCountHooks />} />
            <Route path="/contacts" element={<Contacts />} /> */}
          </Routes>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
