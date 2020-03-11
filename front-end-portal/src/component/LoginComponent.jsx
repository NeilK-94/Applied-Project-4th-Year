import React, { Component } from 'react'

class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            userName: 'Neil',
            password: '',
            hasLoginFailed: false,
            SuccessfulLogin: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);

    }
    render(){
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Failed Login</div>}
                    User Name: <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange}></input>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
    //  This is a generic change handler rather than having to have a method for each element!
    handleChange(event){
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }

    loginClicked(){
        if(this.state.userName === "Neil" && this.state.password === "password"){
            this.setState(
                {
                    SuccessfulLogin: true,
                    hasLoginFailed: false,
                }
            )
            this.props.history.push(`/home/${this.state.userName}`)
        } else{
            this.setState(
                {
                    hasLoginFailed: true,
                    SuccessfulLogin: false
                }
            )
        
            
        }
    }
}

export default LoginComponent