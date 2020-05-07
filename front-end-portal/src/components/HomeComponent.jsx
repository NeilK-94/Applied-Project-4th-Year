import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchComponent from './SearchComponent'
/*  This component just greets the user. It has child components that perform services*/
class HomeComponent extends Component {
    render() {
        return (
           <>
                <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-5">The Developer's Job Site</h1>
                    <hr className="my-4"></hr>
                    <p className="lead">Welcome {this.props.match.params.username}. You can view the latest jobs <Link to="/jobs">here.</Link></p>
                </div>
                </div>
                <SearchComponent />                
            </>
        )
    }
}
export default HomeComponent