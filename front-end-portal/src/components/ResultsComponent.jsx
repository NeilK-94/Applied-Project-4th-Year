import React, { Component } from 'react'
import Modal from 'react-awesome-modal';
import JobDataService from '../service/JobDataService';
import AuthenticationService from '../service/AuthenticationService';
import { withRouter } from 'react-router-dom';

class ResultsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            jobs: [],
            hasSearchFailed: false,
            hasDeleteSucceeded: false,
            visible : false,
            deleteSuccessful: false
        }
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
        JobDataService.retrieveJobByEmployer(this.props.searchQueryEmployer)    //  Make call to the REST API
            .then(  //  Decide what to do once call is made succesfully
                response => {
                    console.log(response);
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

    render() {
        return (
            <div>
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
                                this.props.response.map(    //  map allows you to loop around items
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
            </div>
        )
    }
}

export default withRouter (ResultsComponent);
 