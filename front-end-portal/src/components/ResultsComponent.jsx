import React, { Component } from 'react'
import JobDataService from '../service/JobDataService';
//import AuthenticationService from '../service/AuthenticationService';
import ApplyComponent from './ApplyComponent'
import { withRouter } from 'react-router-dom';

class ResultsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            jobs: [],
            hasSearchFailed: false,
            hasDeleteSucceeded: false,
            deleteSuccessful: false,
            addModalShow: false,
        }
        this.refreshJobs = this.refreshJobs.bind(this)
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
    
    checkApplied(applied){
        if(applied === true){
            return <img src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png" width="25px" height="30px" alt="applied tick"/>
        }
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
                                <th>Applied</th>
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
                                            {/* <td>{job.applied + ''}</td> */}
                                            <td>
                                                {this.checkApplied(job.applied)}
                                            </td>
                                            <td><button className="btn btn-info"
                                                onClick={() => {
                                                // Use a computed property name to make it unique based on the ID
                                                this.setState({ ['show_'+job.id]: true })
                                                }}>Info</button></td>
                                            <ApplyComponent 
                                                show={this.state['show_'+job.id]}
                                                onHide={() => {
                                                    // Follow the same process for closing
                                                    this.setState({ ['show_'+job.id]: false}) 
                                                }}  
                                                id={job.id}
                                                title={job.jobTitle}
                                                employer={job.employer}
                                                county={job.county}
                                                description={job.description}
                                            />
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
 