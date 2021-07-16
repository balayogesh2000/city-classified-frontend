import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Switch>
    </div>
  );
};

export default App;
