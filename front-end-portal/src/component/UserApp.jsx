//  Path routes will go here.

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ListJobsComponent from './ListJobsComponent';
import UpdateJobComponent from './UpdateJobComponent';
//import NewJobComponent from './NewJobComponent';
// import ListUsersComponent from './ListUsersComponent';
// import UserComponent from './UserComponent';
import LoginComponent from './LoginComponent'
import LogoutComponent from './LogoutComponent'
import ErrorComponent from './ErrorComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import HomeComponent from './HomeComponent'
import AuthenticatedRoute from './AuthenticatedRoute'


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
                            <AuthenticatedRoute path="/home/:username" component={HomeComponent} />
                            <AuthenticatedRoute path="/jobs/:id" component={UpdateJobComponent} />
                            {/*<AuthenticatedRoute path="/jobs/create/:id" component={NewJobComponent} />*/}
                            <AuthenticatedRoute path="/jobs" component={ListJobsComponent} />
                            {/* <Route path="/users" component={ListUsersComponent} />
                            <Route path="/users/:id" component={UserComponent} /> */}
                            <Route component={ErrorComponent} />
                        </Switch>
                    <FooterComponent />    
                </Router>
            </div>
        )
    }
}
export default UserApp