import React from "react";
import Front from "./Components/frontComponent";
import Home from "./Components/homeComponent";
import Create from "./Components/createComponent";
import Grade from "./Components/gradeComponent";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Front} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/createTask" component={Create} />
      <Route exact path="/grading" component={Grade} />
    </BrowserRouter>
  );
}

export default App;
