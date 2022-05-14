import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "./App.css";

import Router from "./routes"

import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Router />
    </div>
  );
}

export default App;
