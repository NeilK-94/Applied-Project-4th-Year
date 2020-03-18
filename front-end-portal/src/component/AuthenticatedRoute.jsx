import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService'
import { BrowserRouter as Redirect, Route } from 'react-router-dom';


export class AuthenticatedRoute extends Component {
    render() {
        if(AuthenticationService.isLoggedIn()){
            return <Route {...this.props}/>    //  Spread operator. This way don't have to individually define each property
        } else{
            return <Redirect to="/login"/>
        }
    }
}

export default AuthenticatedRoute
