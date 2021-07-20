import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

import Home from "./Home";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import AdminPostInformation from "./components/Admin/PostInformation";
import AdminPostClassifieds from "./components/Admin/PostClassifieds";
import Posters from "./components/Posters/Posters";
import PostersPostClassifieds from "./components/Posters/PostClassifieds";
import Information from "./components/Information/Information";
import Classifieds from "./components/Classifieds/Classifieds";

import "./App.css";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const history = useHistory();
  return (
    <div>
      <nav className="Navbar">
        {isAuth ? (
          <Button onClick={() => setIsAuth(false)}>Logout</Button>
        ) : (
          <div>
            <Button onClick={() => history.push("/login")}>Login</Button>
            <Button
              onClick={() => history.push("/signup")}
              style={{ marginLeft: "10px" }}
            >
              Sign Up
            </Button>
          </div>
        )}
      </nav>
      <Switch>
        <Route exact path="/signup" component={Signup}></Route>
        <Route
          exact
          path="/login"
          render={() => <Login setIsAuth={setIsAuth} />}
        ></Route>
      </Switch>
      {isAuth ? (
        <Switch>
          <Route exact path="/" component={Home}></Route>
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
          <Route exact path="/classifieds" component={Classifieds}></Route>
        </Switch>
      ) : null}
    </div>
  );
};

export default App;
