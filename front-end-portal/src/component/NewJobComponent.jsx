import React, { Component } from 'react';
import JobDataService from '../service/JobDataService';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class NewJobComponent extends Component {
  constructor(props) {
      super(props)

      this.state = {
        id: this.props.match.params.id,
        employer: this.props.match.employer,
        description: ''
      }
      this.onSubmit = this.onSubmit.bind(this)
      this.validate = this.validate.bind(this)
  }
  componentDidMount() {

      if (this.state.id === -1) {
          return
      }
      JobDataService.retrieveJob(this.state.employer, this.state.id)
      .then(response => this.setState({
          description: response.data.description,
          employer: response.data.employer,
          jobTitle: response.data.jobTitle
          }))
  }

  //    Error handling for form
  validate(values) {
    let errors = {}
    if (!values.description) {
        errors.description = 'Enter a description'
    } else if (values.description.length < 5) {
        errors.description = 'Description must be at least 5 characters long'
    }
    return errors
  }

  onSubmit(values) {
    let employer = this.state.employer
    let id = this.state.id
    let jobTitle = this.state.jobTitle
    let job = {
        id: this.state.id,
        employer: this.state.employer,
        jobTitle: this.state.jobTitle,
        description: values.description
    }
    //  For create, if getting promise error check params in data service. 

    if (this.state.id === -1) { //  going to need to add an id for new job. increment it? I think we need a new state altogether so may have to just create a new component. Can duplicate most of the code 
        JobDataService.createJob(jobTitle, employer, job)
            .then(() => this.props.history.push('/jobs'))
    } else {
        JobDataService.updateJob(jobTitle, employer, id, job)
            .then(() => this.props.history.push('/jobs'))
    }
    console.log(values);
  }

  render() {
    let { description, id, employer, jobTitle } = this.state
    return (
        <div>            
            <h3>Create A Job</h3>
            <div className="container">
                <Formik
                    initialValues={{id: id, description: description, employer: employer, jobTitle: jobTitle}}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}    
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="description" component="div"
                                    className="alert alert-warning" />
                                <fieldset className="form-group">
                                    <label>Id</label>
                                    <Field className="form-control" type="text" name="id" disabled />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Employer</label>
                                    <Field className="form-control" type="text" name="employer" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Job Title</label>
                                    <Field className="form-control" type="text" name="jobTitle" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description" />
                                </fieldset>
                                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                    <div class="btn-group mr-2" role="group" aria-label="First group">
                                        <button className="btn btn-success" type="submit">Save</button>
                                    </div>
                                    <div class="btn-group mr-2" role="group" aria-label="Second group">
                                        <button className="btn btn-sm" type="back">Back</button>
                                    </div>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}
}
export default NewJobComponent