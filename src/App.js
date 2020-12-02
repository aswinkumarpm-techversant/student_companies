import React from "redux"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";

function App() {
  return <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/Register" component={Register} />
      </Switch>
    </BrowserRouter>
  </>
}

export default connect(null)(App)