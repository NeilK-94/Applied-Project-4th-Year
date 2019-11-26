//  Component for listing all jobs

import React, { Component } from 'react';
import JobDataService from '../service/JobDataService';

const USER = 'Cisco'

class ListjobsComponent extends Component {

    constructor(props) {
        super(props)
         //  To display jobs, need to make them available to the component. We add jobs to the state of                 the component and initialize it in the constructor.
        this.state = { 
            jobs: [],
            message: null
        }
        this.refreshJobs = this.refreshJobs.bind(this)
    }
    componentDidMount() {   //  React makes componentDidMount be called as soon as the component is mounted
        this.refreshJobs(); //  Call refreshJobs
    }
    refreshJobs() {
        JobDataService.retrieveAllJobs(USER)    //  Make call to the REST API
            .then(  //  Decide what to do once call is made
                response => {
                    console.log(response);
                    this.setState({ jobs: response.data })  //  When response comes back with data, update the state.
                }
            )
    }

    render() {
        return (
            <div className="container">
                <h3>All Jobs</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.jobs.map(    //  map allows you to loop around items
                                    job =>  //  a key is used to identify a row
                                        <tr key={job.id}>
                                            <td>{job.id}</td>
                                            <td>{job.description}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ListjobsComponent