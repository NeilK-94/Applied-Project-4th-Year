//  Path routes will go here.

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ListJobsComponent from './ListJobsComponent';
import UpdateJobComponent from './UpdateJobComponent';
import NewJobComponent from './NewJobComponent';
import ListUsersComponent from './ListUsersComponent';
import UserComponent from './UserComponent';
import LoginComponent from './LoginComponent'
import ErrorComponent from './ErrorComponent'


class UserApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Developer Jobs</h1>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/jobs" exact component={ListJobsComponent} />
                        <Route path="/jobs/:id" component={UpdateJobComponent} />
                        <Route path="/jobs/create/:id" component={NewJobComponent} />
                        <Route path="/users" component={ListUsersComponent} />
                        <Route path="/users/:id" component={UserComponent} />
                        <Route component={ErrorComponent} />

                    </Switch>
                </>
            </Router>
        )
    }
}
export default UserApp