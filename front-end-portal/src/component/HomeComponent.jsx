import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactSearchBox from 'react-search-box'

class HomeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
          searchQuery: 'Facebook...'
        }
    }

    data = [
        {
          key: 'john',
          value: 'John Doe',
        },
        {
          key: 'jane',
          value: 'Jane Doe',
        },
        {
          key: 'mary',
          value: 'Mary Phillips',
        },
        {
          key: 'robert',
          value: 'Robert',
        },
        {
          key: 'karius',
          value: 'Karius',
        },
      ]

    render() {
        let searchQuery = this.state
        return (
           <>
                <h1>Welcome</h1>
                <div className="container">
                    Welcome {this.props.match.params.username}. You can view the latest jobs <Link to="/jobs">here.</Link>
                    <br></br>
                    <h4>Search a job</h4>
                    <p>You can search for jobs from a certain employer.</p>
                    <div className="container">
                    <ReactSearchBox
                        placeholder="Placeholder"
                        value="Doe"
                        data={this.data}
                        callback={record => console.log(record)}
                    />
                    </div>


                    
                </div>
            </>
        )
    }
}

export default HomeComponent