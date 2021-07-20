import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import AdminPostInformation from "./components/Admin/PostInformation";
import AdminPostClassifieds from "./components/Admin/PostClassifieds";
import Posters from "./components/Posters/Posters";
import PostersPostClassifieds from "./components/Posters/PostClassifieds";
import Information from "./components/Information/Information";

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
          component={AdminPostInformation}
        ></Route>
        <Route
          exact
          path="/admin/post-classifieds"
          component={AdminPostClassifieds}
        ></Route>
        <Route exact path="/posters" component={Posters}></Route>
        <Route
          exact
          path="/posters/post-classifieds"
          component={PostersPostClassifieds}
        ></Route>
        <Route exact path="/information" component={Information}></Route>
      </Switch>
    </div>
  );
};

export default App;
