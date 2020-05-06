import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService';

class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: 'Neil',
            password: '',
            hasLoginFailed: false,
            SuccessfulLogin: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
        this.enterPressed = this.enterPressed.bind(this);  
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
        AuthenticationService
            .executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
                this.props.history.push(`/home/${this.state.username}`)
            }).catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })
    }

    /*  --- Method to allow the user to submit with 'enter' instead of clicking the button ---  */
    enterPressed(event) {
        var code = event.keyCode || event.which;
        if(code === 13) { //13 is the enter keycode
            console.log("Clicked")
            this.loginClicked()
        } 
    }
   
    render(){
        return (
            <div className="container">
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning alert-dismissible fade show" role="alert">Failed Login</div>}
                    User Name: <input type="text" placeholder="Neil" name="username" value={this.state.username} onChange={this.handleChange} onKeyPress={this.enterPressed.bind(this)}></input>
                    Password: <input type="password" id="myInput" name="password" value={this.state.password} onChange={this.handleChange} onKeyPress={this.enterPressed.bind(this)}></input>
                    <hr></hr>
                    <div data-testid="button">
                        <button className="btn btn-success" id="myBtn" onClick={this.loginClicked}>Login</button>
                    </div>
                </div>
                <section className="container">
                <div className="jumbotron">
                <div className="container">
                    <h1 className="display-5">The Developer's Job Site</h1>
                    <hr className="my-4"></hr>
                    <h3>Welcome to the developer's job site</h3>
                    <hr className="my-4"></hr>
                    <p className="lead">On this site you can search and apply for current software developer jobs in your area</p>
                </div>
                </div>
            </section>
            </div>
        )
    }
}

export default LoginComponent