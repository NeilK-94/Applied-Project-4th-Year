//  Path routes will go here.

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ListJobsComponent from './ListJobsComponent';
import UpdateJobComponent from './UpdateJobComponent';
import NewJobComponent from './NewJobComponent';
// import ListUsersComponent from './ListUsersComponent';
// import UserComponent from './UserComponent';
import LoginComponent from './LoginComponent'
import LogoutComponent from './LogoutComponent'
import ErrorComponent from './ErrorComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import HomeComponent from './HomeComponent'


export class UserApp extends Component {
    render() {
        return (
            <div className="UserApp">
                <Router>
                    <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <Route path="/logout" component={LogoutComponent} />
                            <Route path="/home/:userName" component={HomeComponent} />
                            <Route path="/jobs" component={ListJobsComponent} />
                            <Route path="/jobs/:id" component={UpdateJobComponent} />
                            <Route path="/jobs/create/:id" component={NewJobComponent} />
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