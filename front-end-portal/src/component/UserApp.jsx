//  Path routes will go here.
//  /   /jobs   /jobs:id/

import React, { Component } from 'react';
import ListjobsComponent from './ListjobsComponent';

class UserApp extends Component {
    render() {  //  render returns what needs to be displayed as part of the component
        return (<>
              <h1>User Application</h1>
              <ListjobsComponent />
            </>
        )
    }
}
export default UserApp