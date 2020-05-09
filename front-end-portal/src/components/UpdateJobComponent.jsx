import React, { Component } from 'react';
import JobDataService from '../service/JobDataService';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import AuthenticationService from '../service/AuthenticationService';
/*  This component allows the user to both create a new job and update a current one
    It uses the Formik framework for the form.*/
class UpdateJobComponent extends Component {
  constructor(props) {
      super(props)

      this.state = {
        id: this.props.match.params.id,
        employer: this.props.match.employer,
        description: ''
      }
      this.onSubmit = this.onSubmit.bind(this)
      this.validate = this.validate.bind(this)
      this.backButton = this.backButton.bind(this)

  }
  componentDidMount() {
    if (this.state.id === -1) {
        console.log("Not mounting, (Create job)")
        return;
    }
    let username = AuthenticationService.getLoggedUser()

    JobDataService.retrieveJob(username, this.state.id)
    .then(response => this.setState({
        description: response.data.description,
        employer: response.data.employer,
        jobTitle: response.data.jobTitle,
        county: response.data.county
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
    if (!values.jobTitle) {
        errors.jobTitle = 'Enter a job title'
    }
    if (!values.employer) {
        errors.employer = 'Enter an employer'
    }
    return errors
  }

  //    When save is clicked
  onSubmit(values) {
    let job = {
        id: this.state.id,
        employer: values.employer,
        jobTitle: values.jobTitle,
        description: values.description,
        county: values.county
    }

    if (this.state.id === -1) {
        JobDataService.createJob(job.jobTitle, job.employer, this.state.id, job)
            .then(() => this.props.history.push('/jobs'))
    } else {
        JobDataService.updateJob(job.jobTitle, job.employer, this.state.id, job)
            .then(() => this.props.history.push('/jobs'))
    }
  }
  //    Go back in the router
  backButton(){
    this.props.history.goBack();
  }

  render() {
    let { county, description, employer, jobTitle } = this.state
    return (
        <div>            
            <h3>Update {this.state.employer}'s {this.state.jobTitle} Job</h3>
            <div className="container">
                <Formik
                    initialValues={{county, description, employer, jobTitle}}
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
                                <label>Employer</label>
                                <Field className="form-control" type="text" name="employer" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Job Title</label>
                                <Field className="form-control" type="text" name="jobTitle" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Location</label>
                                <Field className="form-control" type="text" name="county" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Description</label>
                                <Field className="form-control" type="text" name="description" />
                            </fieldset>
                            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div className="btn-group mr-2" role="group" aria-label="First group">
                                    <button className="btn btn-success" type="submit">Save</button>
                                </div>
                                <div className="btn-group mr-2" role="group" aria-label="Second group">
                                    <button className="btn btn-sm" type="back  " onClick={this.backButton}>Back</button>
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
export default UpdateJobComponent