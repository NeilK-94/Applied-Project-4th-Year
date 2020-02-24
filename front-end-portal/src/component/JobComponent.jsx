import React, { Component } from 'react';
import JobDataService from '../service/JobDataService';
import { Formik, Form, Field, ErrorMessage } from 'formik';
//var employer = this.props.match.params.employer;

class JobComponent extends Component {
  constructor(props) {
      super(props)
      this.state = {
        employer: this.props.match.params.employer,
          description: ''
      }
  }
  componentDidMount() {
      console.log(this.state.employer)
      // eslint-disable-next-line
      if (this.state.employer == -1) {
          return
      }
      JobDataService.retrieveJob(this.state.employer, this.state.description)
          .then(response => this.setState({
              description: response.data.description
          }))
  }
  render() {
      let { description, employer } = this.state
      return (
          <div>
              <h3>Job</h3>
              {/* <div>{employer}</div>
              <h3>Description</h3>
              <div>{description}</div> */}
              <Formik>
                    {
                        (props) => (
                            <Form>
                                <fieldset className="form-group">
                                    <label>Employer</label>
                                    <Field className="form-control" type="text" name="employer" />
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
      )
  }
}
export default JobComponent