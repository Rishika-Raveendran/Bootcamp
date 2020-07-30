import React from "react";
import Front from "./Components/frontComponent";
import Home from "./Components/homeComponent";
import Create from "./Components/createComponent";
import Grade from "./Components/gradeComponent";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Front} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/createTask" component={Create} />
      <Route exact path="/grading" component={Grade} />
      <Redirect to="/home" />
    </BrowserRouter>
  );
}

export default App;
