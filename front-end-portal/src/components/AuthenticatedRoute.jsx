import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthenticationService from '../service/AuthenticationService'
/*  This component is used to ensure only logged in users can access the site.
    They can't bypass the login by typing a url in the address bar  */ 
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
