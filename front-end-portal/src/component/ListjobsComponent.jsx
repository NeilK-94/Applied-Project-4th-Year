//  Component for listing all jobs

import React, { Component } from 'react';
import JobDataService from '../service/JobDataService';

class ListJobsComponent extends Component {

    constructor(props) {
        super(props)
         //  To display jobs, need to make them available to the component. We add jobs to the state of the component and initialize it in the constructor.
        this.state = { 
            jobs: [],
            message: null
        }
        this.refreshJobs = this.refreshJobs.bind(this)
        this.deleteJobClicked = this.deleteJobClicked.bind(this)
        this.updateJobClicked = this.updateJobClicked.bind(this)
        this.addJobClicked = this.addJobClicked.bind(this)

    }

    componentDidMount() {   //  React makes componentDidMount be called as soon as the component is mounted
        this.refreshJobs(); //  Call refreshJobs
    }

    refreshJobs() {
        JobDataService.retrieveAllJobs()    //  Make call to the REST API
            .then(  //  Decide what to do once call is made
                response => {
                    console.log(response);
                    this.setState({ jobs: response.data })  //  When response comes back with data, update the state.
                }
            )
    }

    deleteJobClicked(employer) {
        JobDataService.deleteJob(employer)
            .then(
                response => {
                    this.setState({ message: `Succesfully deleted the job posting` })
                    this.refreshJobs()
                }
            )
    }
    updateJobClicked(employer) {
        this.props.history.push(`/jobs/${employer}`)
    }
    addJobClicked() {
        this.props.history.push(`/jobs/-1`) 
    }

    render() {
        return (
            <div className="container">
                <h3>All Jobs</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                <br></br>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addJobClicked}>Add</button>
                    </div>
                    <br></br>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Employer</th>
                                <th>Job Title</th>
                                <th>Description</th>
                                <th>Update</th>
                                <th>Delete</th>
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
                                            <td><button className="btn btn-success" onClick={() => this.updateJobClicked(job.employer)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteJobClicked(job.employer)}>Delete</button></td>
                                        </tr>
                                )   //  will need to change job.employer to job.id
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ListJobsComponent