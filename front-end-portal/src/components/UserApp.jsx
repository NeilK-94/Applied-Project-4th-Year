import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ListJobsComponent from './ListJobsComponent';
import UpdateJobComponent from './UpdateJobComponent';
import LoginComponent from './LoginComponent'
import LoginComponent1 from './LoginComponent1'
import LogoutComponent from './LogoutComponent'
import ErrorComponent from './ErrorComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import HomeComponent from './HomeComponent'
import AuthenticatedRoute from './AuthenticatedRoute'
import '../App.css';
/*  This component acts as the hub of the application. t uses React Router to Route everything.*/
export class UserApp extends Component {
    render() {
        return (
            <div className="UserApp">
                <Router>
                    <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent1} />
                            <Route path="/login" component={LoginComponent1} />
                            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                            <AuthenticatedRoute path="/home/:username" component={HomeComponent} />
                            <AuthenticatedRoute path="/jobs/:id" component={UpdateJobComponent} />
                            <AuthenticatedRoute path="/jobs" component={ListJobsComponent} />
                            <Route component={ErrorComponent} />
                        </Switch>
                    <FooterComponent />    
                </Router>
            </div>
        )
    }
}
export default UserApp