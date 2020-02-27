//  Component for listing all users

import React, { Component } from 'react';
import UserDataService from '../service/UserDataService';

class ListUsersComponent extends Component {

    constructor(props) {
        super(props)
         //  To display users, need to make them available to the component. We add users to the state of the component and initialize it in the constructor.
        this.state = { 
            users: [],
            message: null
        }
        this.refreshUsers = this.refreshUsers.bind(this)
        this.deleteUserClicked = this.deleteUserClicked.bind(this)
        this.updateUserClicked = this.updateUserClicked.bind(this)
        this.addUserClicked = this.addUserClicked.bind(this)

    }

    componentDidMount() {   //  React makes componentDidMount be called as soon as the component is mounted
        this.refreshUsers(); //  Call refreshUsers
    }

    refreshUsers() {
        UserDataService.retrieveAllUsers()    //  Make call to the REST API
            .then(  //  Decide what to do once call is made
                response => {
                    console.log(response);
                    this.setState({ users: response.data })  //  When response comes back with data, update the state.
                }
            )
    }

    deleteUserClicked(id) {
        UserDataService.deleteUser(id)
            .then(
                response => {
                    console.log(response);
                    this.setState({ message: `Succesfully deleted the user posting` })
                    this.refreshUsers()
                }
            )
    }
    updateUserClicked(employer) {
        this.props.history.push(`/users/${employer}`)
    }
    addUserClicked() {
        this.props.history.push(`/users/-1`) 
    }

    render() {
        return (
            <div className="container">
                <h3>All Users</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                <br></br>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addUserClicked}>Add</button>
                    </div>
                    <br></br>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Employer</th>
                                <th>User Title</th>
                                <th>Description</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {   
                                this.state.users.map(    //  map allows you to loop around items
                                    user =>  //  a key is used to identify a row
                                        <tr key={user.id}>
                                            <td>{user.employer}</td>
                                            <td>{user.userTitle}</td>
                                            <td>{user.description}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateUserClicked(user.employer)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteUserClicked(user.id)}>Delete</button></td>
                                        </tr>
                                )   //  will need to change user.employer to user.id
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ListUsersComponent