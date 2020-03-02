import React, { Component } from 'react';
import JobDataService from '../service/JobDataService';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class JobComponent extends Component {
  constructor(props) {
      super(props)

      this.state = {
        id: this.props.match.params.id,
          description: ''
      }
      this.onSubmit = this.onSubmit.bind(this)
      this.validate = this.validate.bind(this)
  }
  componentDidMount() {
      console.log(this.state.id)
      if (this.state.id == -1) {
          return
      }
      JobDataService.retrieveJob(this.state.employer, this.state.id)
      .then(response => this.setState({
          description: response.data.description
          }))
  }

  validate(values) {
    let errors = {}
    if (!values.description) {
        errors.description = 'Enter a description'
    } else if (values.description.length < 5) {
        errors.description = 'Enter atleast 5 characters in description'
    }
    return errors
  }

  onSubmit(values) {
    let employer = this.state.employer
    let job = {
        id: this.state.id,
        description: values.description
    }
    if (this.state.id === -1) {
        JobDataService.createJob(employer, job)
            .then(() => this.props.history.push('/jobs'))
    } else {
        JobDataService.updateJob(employer, this.state.id, job)
            .then(() => this.props.history.push('/jobs'))
    }
    console.log(values);
  }

  render() {
    let { description, id } = this.state
    return (
        <div>
            <h3>Job</h3>
            <div className="container">
                <Formik
                    initialValues={{}}
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
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description" />
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}
}
export default JobComponent