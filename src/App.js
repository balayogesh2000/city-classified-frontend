import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import PostInformation from "./components/Admin/PostInformation/PostInformation";

const App = () => {
  return (
    <div>
      <Switch>
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
