import React, { Component } from 'react';
import JobDataService from '../service/JobDataService';
import {withRouter} from 'react-router';

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
      JobDataService.retrieveJob("", this.state.employer)
          .then(response => this.setState({
              description: response.data.description
          }))
  }
  render() {
      let { description, employer } = this.state
      return (
          <div>
              <h3>Job</h3>
              <div>{employer}</div>
              <div>{description}</div>
          </div>
      )
  }
}
export default JobComponent