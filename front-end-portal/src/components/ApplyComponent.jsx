import React, { Component } from 'react'
import * as ReactBootstrap from 'react-bootstrap';
import JobDataService from '../service/JobDataService';

export class ApplyComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: 'Neil',
            password: '',
            hasApplied: false,
        }
        this.applyJob = this.applyJob.bind(this)
    }

    applyJob(){
        let job = {
            id: this.props.id,
            employer: this.props.employer,
            jobTitle: this.props.jobTitle,
            description: this.props.description,
            county: this.props.county,
            applied: this.props.applied
        }
        JobDataService.applyJob(this.props.id, this.props.applied, job)
            .then(() => {
                
                this.setState({ hasApplied: true })
                console.log(this.props)
            })
    }
    
    render() {
       // console.log("job: " , this.props.id)
        return (
            <div className="container">
                <ReactBootstrap.Modal
                    {...this.props}
                    show={this.props.show}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                <ReactBootstrap.Modal.Header closeButton>
                    <ReactBootstrap.Modal.Title id="contained-modal-title-vcenter">
                    {this.props.title}
                    </ReactBootstrap.Modal.Title>
                </ReactBootstrap.Modal.Header>
                <ReactBootstrap.Modal.Body>
                    {console.log("job: " , this.props.id)}
                    <h3>{this.props.employer}</h3>
                    <h4>Would you like to apply to this job?</h4>
                    <p>{this.props.description}</p>
                </ReactBootstrap.Modal.Body>
                <ReactBootstrap.Modal.Footer>
                {this.state.hasApplied && <div className="alert alert-success" role="alert">Applied for job</div>}
                   <button className="btn btn-primary" onClick={this.applyJob}>Apply</button>
                   <button className="btn btn-warning" onClick={this.props.onHide}>Close</button>
                </ReactBootstrap.Modal.Footer>
                </ReactBootstrap.Modal>
            </div>
        )
    }
}

export default ApplyComponent
