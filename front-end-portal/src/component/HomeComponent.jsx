import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-awesome-modal';

import JobDataService from '../service/JobDataService';
import AuthenticationService from '../service/AuthenticationService';

class HomeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            jobs: [],
            searchQuery: 'Cisco',
            hasSearchFailed: false,
            hasDeleteSucceeded: false,
            visible : false,
            deleteSuccessful: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.searchClicked = this.searchClicked.bind(this);
        this.updateJobClicked = this.updateJobClicked.bind(this);
        this.deleteJobClicked = this.deleteJobClicked.bind(this)
        this.refreshJobs = this.refreshJobs.bind(this)
    }    

    openModal() {
        this.setState({
            visible : true,
            hasDeleteSucceeded: false,
            deleteSuccessful: false
        });
    }
    closeModal() {
        let username = AuthenticationService.getLoggedUser()
        this.setState({
            visible : false,
            hasDeleteSucceeded: false
        });
    }
    refreshJobs() {
        JobDataService.retrieveJobByEmployer(this.state.searchQuery)    //  Make call to the REST API
            .then(  //  Decide what to do once call is made succesfully
                response => {
                    //console.log(response);
                    this.setState({ jobs: response.data })  //  When response comes back with data, update the state.
                    if(this.state.deleteSuccessful){
                        this.setState({ hasDeleteSucceeded: true })
                    }
                },                
            )   //  .catch handles unsuccessful. Add later
    }

    deleteJobClicked(id) {
        let username = AuthenticationService.getLoggedUser()

        JobDataService.deleteJob(username, id)
            .then(
                response => {
                    this.state.deleteSuccessful = true;
                    this.state.hasDeleteSucceeded = true;
                    this.refreshJobs()
                    this.closeModal()
                }
            )
    }
    updateJobClicked(id){
        this.props.history.push(`/jobs/${id}`)
    }

    searchClicked(){
        this.state.hasDeleteSucceeded = false
        JobDataService.retrieveJobByEmployer(this.state.searchQuery)
        .then(  //  Decide what to do once call is made succesfully
            response => {
                //console.log(response.data);
                this.setState({ jobs: response.data })
                if(response.data.length < 1){
                    this.setState({ hasSearchFailed: true })
                }
                else if(response.data.length > 0){
                    this.setState({ hasSearchFailed: false })
                }
            })
    }
        
    handleChange(event){
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }

    render() {
        return (
           <>
                <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-5">Welcome</h1>
                    <hr className="my-4"></hr>
                    <p className="lead">Welcome {this.props.match.params.username}. You can view the latest jobs <Link to="/jobs">here.</Link></p>
                </div>
                </div>
                <div className="container">
                    {this.state.hasSearchFailed && <div className="alert alert-warning">Failed Search</div>}
                    {this.state.hasDeleteSucceeded && <div className="alert alert-warning">Succesfully deleted the job posting</div>}
                    <h4>Search a job</h4>
                    <p>You can search for jobs from a certain employer.</p>
                    <div className="container">
                    <input type="text" name="searchQuery" value={this.state.searchQuery} onChange={this.handleChange}></input>
                    <button className="btn btn-success" onClick={this.searchClicked}>Search</button>
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
                                            <td><button className="btn btn-success" onClick={() => this.openModal(job.jobTitle)}>View</button></td>
                                                <Modal visible={this.state.visible} width="500" height="400" effect="fadeInRight" onClickAway={() => this.closeModal()}>
                                                    <tr><div className="popup">
                                                        <td><h3>{job.jobTitle}</h3></td>
                                                        <h4>{job.employer}</h4>
                                                        <p>Some Contents</p>
                                                        <button className="btn btn-info" onClick={() => this.closeModal()}>Close</button>
                                                        <button className="btn btn-warning" onClick={() => this.deleteJobClicked(job.id)}>Delete</button>
                                                        <button className="btn btn-success" onClick={() => this.updateJobClicked(job.id)}>Update</button>
                                                    </div></tr>
                                                </Modal>
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
}

export default HomeComponent