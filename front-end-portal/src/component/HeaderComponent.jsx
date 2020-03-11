import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://github.com/NeilK-94?tab=repositories" className="navbar-brand">Neil Kyne</a></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/home/Neil">Home</Link></li>
                        <li><Link className="nav-link" to="/jobs">Jobs</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link className="nav-link" to="/login">Login</Link></li>
                        <li><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                    
                </nav>
            </header>
        )
    }
}

export default HeaderComponent
