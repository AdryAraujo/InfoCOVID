import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TelaLogin from "./telas/TelaLogin";
import TelaPrincipal from "./telas/TelaPrincipal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" component={TelaLogin} />
        <Route exact path="/" component={TelaPrincipal} />
      </Routes>
    </Router>
  );
}

export default App;
