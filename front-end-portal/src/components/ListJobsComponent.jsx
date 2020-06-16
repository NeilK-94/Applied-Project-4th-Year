import React, { Component } from 'react';
import JobDataService from '../service/JobDataService';
import AuthenticationService from '../service/AuthenticationService';
/*  This component lists all jobs on our mongo database */
class ListJobsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            jobs: [],
            message: null,
            sort: {
                column: null,
                direction: 'desc',
              }
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
            .then(  //  Decide what to do once call is made succesfully
                response => {
                    //console.log(response);
                    this.setState({ jobs: response.data })  //  When response comes back with data, update the state.
                }
            )   //  .catch handles unsuccessful. Add later
    }

    deleteJobClicked(id) {
        let username = AuthenticationService.getLoggedUser()
        //console.log(id + username)
        JobDataService.deleteJob(username, id)
            .then(
                response => {
                    console.log(response);
                    this.setState({ message: `Succesfully deleted the job posting` })
                    this.refreshJobs()
                }
            )
    }
    //  Push user to UpdateJobComponent as an update using jobId
    updateJobClicked(id) {
        this.props.history.push(`/jobs/${id}`)
    }
    //  Push user to UpdateJobComponent as a 'create' job 
    addJobClicked() {
        this.props.history.push(`/jobs/-1`)
    }
    //  If applied is true, display image from url
    checkApplied(applied){
        if(applied === true){
            return <img src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png" width="25px" height="30px" alt="applied tick"/>
        }
    }

    render() {
        return (
            <div className="container">
                <h3>All Jobs</h3>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                <br></br>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addJobClicked}>Add</button>
                    </div>
                    <br></br>
                    <div id="table-wrapper">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Employer</th>
                                <th>Job Title</th>
                                <th>Applied</th>
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
                                            <td>{this.checkApplied(job.applied)}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateJobClicked(job.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteJobClicked(job.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default ListJobsComponent