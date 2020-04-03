import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import JobDataService from '../service/JobDataService';
import AuthenticationService from '../service/AuthenticationService';

class HomeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            searchQuery: 'Cisco',
        }
        this.handleChange = this.handleChange.bind(this);
        this.searchClicked = this.searchClicked.bind(this);

    }

    render() {
        return (
           <>
                <h1>Welcome</h1>
                <div className="container">
                    Welcome {this.props.match.params.username}. You can view the latest jobs <Link to="/jobs">here.</Link>
                    <br></br>
                    <h4>Search a job</h4>
                    <p>You can search for jobs from a certain employer.</p>
                    <div className="container">
                    <input type="text" name="searchQuery" value={this.state.searchQuery} onChange={this.handleChange}></input>
                    <button className="btn btn-success" onClick={this.searchClicked}>Login</button>
                    </div>   
                </div>
            </>
        )
    }

    searchClicked(){
        JobDataService.retrieveJobByEmployer(this.state.searchQuery)
        .then(  //  Decide what to do once call is made succesfully
            response => {
                console.log(response);
            })
        }
            
    

    handleChange(event){
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }
}

export default HomeComponent