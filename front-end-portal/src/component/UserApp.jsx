//  Path routes will go here.
//  /   /jobs   /jobs:id/

import React, { Component } from 'react';
import ListJobsComponent from './ListJobsComponent';
import UpdateJobComponent from './UpdateJobComponent';
import NewJobComponent from './NewJobComponent';
// import ListUsersComponent from './ListUsersComponent';
// import UserComponent from './UserComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//  Will change so '/' has a welcome, index page. from there you're pointed to others
class UserApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Developer Jobs</h1>
                    <Switch>
                        <Route path="/" exact component={ListJobsComponent} />
                        <Route path="/jobs" exact component={ListJobsComponent} />
                        <Route path="/jobs/:id" component={UpdateJobComponent} />
                        <Route path="/jobs/create/" component={NewJobComponent} />
                        {/* <Route path="/users" component={ListUsersComponent} />
                        <Route path="/users/:id" component={UserComponent} /> */}
                    </Switch>
                </>
            </Router>
        )
    }
}
export default UserApp