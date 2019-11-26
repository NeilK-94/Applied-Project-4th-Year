//  Path routes will go here.
//  /   /jobs   /jobs:id/

import React, { Component } from 'react';
import ListjobsComponent from './ListjobsComponent';

class UserApp extends Component {
    render() {
        return (<>
              <h1>User Application</h1>
              <ListjobsComponent />
            </>
        )
    }
}
export default UserApp