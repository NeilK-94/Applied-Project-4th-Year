import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthenticationService from '../service/AuthenticationService'

class AuthenticatedRoute extends Component {
    render() {
        if (AuthenticationService.isLoggedIn()) {
            return <Route {...this.props} />    //  Spread operator. This way don't have to individually define each property
        } else {
            return <Redirect to="/login" />
        }

    }
}

export default AuthenticatedRoute
