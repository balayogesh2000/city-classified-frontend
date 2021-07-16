import React from "react";
import { Switch, Route } from "react-router-dom";

import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import PostInformation from "./components/Admin/PostInformation/PostInformation";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/admin" component={Admin}></Route>
        <Route
          exact
          path="/admin/post-information"
          component={PostInformation}
        ></Route>
      </Switch>
    </div>
  );
};

export default App;
