import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HomeComponent extends Component {
    render() {
        return (
           <>
                <h1>Welcome</h1>
                <div className="container">
                    Welcome {this.props.match.params.username}. You can view the latest jobs <Link to="/jobs">here.</Link>
                </div>
            </>
        )
    }
}

export default HomeComponent