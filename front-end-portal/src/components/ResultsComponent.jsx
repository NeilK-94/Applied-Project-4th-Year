import React, { Component } from 'react'
import ApplyComponent from './ApplyComponent'
import { withRouter } from 'react-router-dom';
/*  This component is a child of 'SearchComponent' and displays the results of that search in a table*/
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
    }

    //  If applied is true, display image from url
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
                                            <td>{this.checkApplied(job.applied)}</td>
                                            <td>
                                                <button className="btn btn-info"
                                                onClick={() => {
                                                // Use a computed property name to make it unique based on the ID
                                                this.setState({ ['show_'+job.id]: true })
                                                }}>Info</button>
                                            </td>
                                            <td>
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
                                                    //applied={job.applied}
                                                />
                                            </td>
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
 