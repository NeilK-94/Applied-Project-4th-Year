import React, { Component } from 'react'

export class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.loginClicked = this.loginClicked.bind(this)
    }
    render() {
        return (
            <div>
                <button onClick={this.loginClicked}></button>
            </div>
        )
    }   
    loginClicked(){
        this.props.history.push('/jobs')   
    }
}

export default LoginComponent
