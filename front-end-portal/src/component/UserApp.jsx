//  Path routes will go here.
//  /   /jobs   /jobs:id/

import React, { Component } from 'react';
import ListJobsComponent from './ListJobsComponent';
import JobComponent from './JobComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class UserApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>User Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListJobsComponent} />
                        <Route path="/jobs" exact component={ListJobsComponent} />
                        <Route path="/jobs/:employer" component={JobComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}
export default UserApp