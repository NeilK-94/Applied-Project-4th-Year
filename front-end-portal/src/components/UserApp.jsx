import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ListJobsComponent1 from "./ListJobsComponent1";
import UpdateJobComponent from "./UpdateJobComponent";
import LoginComponent from "./LoginComponent";
import LogoutComponent from "./LogoutComponent";
import ErrorComponent from "./ErrorComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import HomeComponent1 from "./HomeComponent1";
import AuthenticatedRoute from "./AuthenticatedRoute";
import "../App.css";
/*  This component acts as the hub of the application.*/
export class UserApp extends Component {
  render() {
    return (
      <div className="UserApp">
        <Router>
          <HeaderComponent />
          <Switch>
            <Route path="/" exact component={LoginComponent} />
            <Route path="/login" component={LoginComponent} />
            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
            <AuthenticatedRoute
              path="/home/:username"
              component={HomeComponent1}
            />
            <AuthenticatedRoute
              path="/jobs/:id"
              component={UpdateJobComponent}
            />
            <AuthenticatedRoute path="/jobs" component={ListJobsComponent1} />
            <Route component={ErrorComponent} />
          </Switch>
          <FooterComponent />
        </Router>
      </div>
    );
  }
}
export default UserApp;
