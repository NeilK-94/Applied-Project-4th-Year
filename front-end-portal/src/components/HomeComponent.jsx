import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchComponent from './SearchComponent'


class HomeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            jobs: [],
            searchQueryEmployer: 'Cisco',
            searchQueryLocation: 'Galway',
            hasSearchFailed: false,
            hasDeleteSucceeded: false,
            visible : false,
            selected: 0,
            deleteSuccessful: false
        }
    }    
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