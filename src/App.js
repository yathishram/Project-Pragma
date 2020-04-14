import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

import NavBar from "./components/layout/NavBar";
import Home from "./components/landing/home";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AboutPage from "./components/dashboard/About";
import FileActionsPage from "./components/sendreceivepage/sendReceivePage";
import Faq from "./components/dashboard/faq";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/about" component={AboutPage} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/fun" component={FileActionsPage} />
            <Route path="/faq" component={Faq} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
