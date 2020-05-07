import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthenticationService from '../service/AuthenticationService'
import { withRouter } from 'react-router';
/*  This component represents the navbar in my application. It uses react router doms 'link'
    to navigate the user around the application.    */
export class HeaderComponent extends Component {
    render() {
        const isLoggedIn = AuthenticationService.isLoggedIn()
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://github.com/NeilK-94?tab=repositories" className="navbar-brand">Neil Kyne</a></div>
                    <ul className="navbar-nav">
                        {isLoggedIn && <li><Link className="nav-link" to="/home/Neil">Home</Link></li>}
                        {isLoggedIn && <li><Link className="nav-link" to="/jobs">Jobs</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                    
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent);
