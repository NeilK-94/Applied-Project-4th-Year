import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import JobDataService from '../service/JobDataService';
import AuthenticationService from '../service/AuthenticationService';

class HomeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            jobs: [],
            searchQuery: 'Cisco',
        }
        this.handleChange = this.handleChange.bind(this);
        this.searchClicked = this.searchClicked.bind(this);
        this.viewJobClicked = this.viewJobClicked.bind(this);

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
                    <div>
                    <br></br>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Employer</th>
                                <th>Job Title</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {   
                                this.state.jobs.map(    //  map allows you to loop around items
                                    job =>  //  a key is used to identify a row
                                        <tr key={job.id}>
                                            <td>{job.employer}</td>
                                            <td>{job.jobTitle}</td>
                                            <td>{job.description}</td>
                                            <td><button className="btn btn-success" onClick={() => this.viewJobClicked(job.id)}>View</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    </div>
                </div>
            </>
        )
    }

    viewJobClicked(){

    }

    searchClicked(){
        JobDataService.retrieveJobByEmployer(this.state.searchQuery)
        .then(  //  Decide what to do once call is made succesfully
            response => {
                console.log(response.data);
                this.setState({ jobs: response.data })
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