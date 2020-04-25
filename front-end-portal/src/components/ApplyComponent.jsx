import React, { Component } from 'react'
import * as ReactBootstrap from 'react-bootstrap';

export class ApplyComponent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <ReactBootstrap.Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                <ReactBootstrap.Modal.Header closeButton>
                    <ReactBootstrap.Modal.Title id="contained-modal-title-vcenter">
                    Apply for job
                    </ReactBootstrap.Modal.Title>
                </ReactBootstrap.Modal.Header>
                <ReactBootstrap.Modal.Body>
                    <h4>{this.props.jobTitle}</h4>
                    <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                    </p>
                </ReactBootstrap.Modal.Body>
                <ReactBootstrap.Modal.Footer>
                   <button className="btn btn-warning" onClick={this.props.onHide}>Close</button>
                </ReactBootstrap.Modal.Footer>
                </ReactBootstrap.Modal>
            </div>
        )
    }
}

export default ApplyComponent
