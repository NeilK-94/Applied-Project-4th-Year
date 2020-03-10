import React, { Component } from 'react';
//import JobDataService from '../service/JobDataService';
//import { Formik, Form, Field, ErrorMessage } from 'formik';

class NewJobComponent extends Component {

  constructor(props){
    super(props)
    this.state = {
      id: this.props.match.params.id,
    }

  }
    render() {
        return (
          <div className="shopping-list">
            <h1>Shopping List for {this.props.name}</h1>
            <ul>
              <li>Instagram</li>
              <li>WhatsApp</li>
              <li>Oculus</li>
            </ul>
          </div>
        );
      }
    }
export default NewJobComponent