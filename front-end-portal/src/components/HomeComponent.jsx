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
            searchQueryEmployer: 'Cisco',
            searchQueryLocation: 'Galway',
            searchQueryJobTitle: 'Front End Developer',
            hasSearchFailed: false,
            hasDeleteSucceeded: false,
            visible : false,
            selected: 0,
            deleteSuccessful: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.searchEmployerClicked = this.searchEmployerClicked.bind(this);
        this.searchLocationClicked = this.searchLocationClicked.bind(this);
        this.searchJobTitleClicked = this.searchJobTitleClicked.bind(this);
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
        this.setState({
            visible : false,
            hasDeleteSucceeded: false
        });
    }
    refreshJobs() {
        JobDataService.retrieveJobByEmployer(this.state.searchQueryEmployer)    //  Make call to the REST API
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
                    this.setState({ deleteSuccessful: true })
                    this.setState({ hasDeleteSucceeded: true })

                    // this.state.deleteSuccessful = true;
                    // this.state.hasDeleteSucceeded = true;
                    this.refreshJobs()
                    this.closeModal()
                }
            )
    }
    updateJobClicked(id){
        this.props.history.push(`/jobs/${id}`)
    }

    //  Too much repeat code with these 3 methods, can be more efficient. Like handle change method.
    searchEmployerClicked(){
        this.setState({ hasDeleteSucceeded: false })
        //this.state.hasDeleteSucceeded = false
        JobDataService.retrieveJobByEmployer(this.state.searchQueryEmployer)
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
    searchLocationClicked(){
        this.setState({ hasDeleteSucceeded: false })
        //this.state.hasDeleteSucceeded = false
        JobDataService.retrieveJobByLocation(this.state.searchQueryLocation)
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
    searchJobTitleClicked(){
        this.setState({ hasDeleteSucceeded: false })
        //this.state.hasDeleteSucceeded = false
        JobDataService.retrieveJobByJobTitle(this.state.searchQueryJobTitle)
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
        let selected = this.state.selected
        return (
           <>
                <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-5">The Developer's Job Site</h1>
                    <hr className="my-4"></hr>
                    <p className="lead">Welcome {this.props.match.params.username}. You can view the latest jobs <Link to="/jobs">here.</Link></p>
                </div>
                </div>
                {/*  Component ********** */}
                <div className="container">
                    {this.state.hasSearchFailed && <div className="alert alert-warning">Failed Search</div>}
                    {this.state.hasDeleteSucceeded && <div className="alert alert-warning">Succesfully deleted the job posting</div>}
                    <h4>Search a job</h4>
                    <p>You can search for jobs from a certain employer or by location.</p>
                    <div className="container">
                    <span id="toggle">
                        <button className="btn btn-secondary" onClick={() => this.setState({ selected: 0 })}> Employer </button>
                        <button className="btn btn-secondary" onClick={() => this.setState({ selected: 1 })}> Location </button>
                        <button className="btn btn-secondary" onClick={() => this.setState({ selected: 2 })}> Job Title </button>     
                    </span>
                        {(selected === 0) && <div id="employer">
                        <input type="text" name="searchQueryEmployer" value={this.state.searchQueryEmployer} onChange={this.handleChange}></input>
                        <button className="btn btn-success" onClick={this.searchEmployerClicked}>Search</button></div>}
                        {(selected === 1) && <div id="location">
                        <input type="text" name="searchQueryLocation" value={this.state.searchQueryLocation} onChange={this.handleChange}></input>
                        <button className="btn btn-success" onClick={this.searchLocationClicked}>Search</button></div>}
                        {(selected === 2) && <div id="jobTitle">
                        <input type="text" name="searchQueryJobTitle" value={this.state.searchQueryJobTitle} onChange={this.handleChange}></input>
                        <button className="btn btn-success" onClick={this.searchJobTitleClicked}>Search</button></div>}
                    </div>
                    </div>
                    {/*  Component ********** */}
                    <br></br>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Employer</th>
                                <th>Job Title</th>
                                <th>Location</th>
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
                                            <td>{job.county}</td>
                                            <td>{job.description}</td>
                                            <td><button className="btn btn-success" onClick={() => this.openModal(job.jobTitle)}>View</button></td>
                                                <Modal visible={this.state.visible} width="500" height="400" effect="fadeInRight" onClickAway={() => this.closeModal()}>
                                                    <tr><div className="popup">
                                                        <td><h3>{job.jobTitle}</h3></td>
                                                        <h4>{job.employer}</h4>
                                                        <h4>{job.county}</h4>
                                                        <p>{job.description}</p>
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
                    {/*  Component ********** */}
                
            </>
        )
    }
}

export default HomeComponent