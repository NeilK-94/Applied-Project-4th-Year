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
        // if(this.state.username === "Neil" && this.state.password === "password"){
        //     //  Send username and password to authentication service
        //     AuthenticationService.registerLogin(this.state.username, this.state.password)
        //     this.setState(
        //         {
        //             SuccessfulLogin: true,
        //             hasLoginFailed: false,
        //         }
        //     )
        //     this.props.history.push(`/home/${this.state.username}`)
        // } else{
        //     this.setState(
        //         {
        //             hasLoginFailed: true,
        //             SuccessfulLogin: false
        //         }
        //     )
        // }
        // AuthenticationService.executeBasicAuthenticationService(this.state.username, this.state.password)
        // .then(
        //     () => {
        //         AuthenticationService.registerLogin(this.state.username, this.state.password)
        //         this.setState({ SuccessfulLogin: true, hasLoginFailed: false})  //  dont need!!!!!!!!!!!!!!!!!!
        //         this.props.history.push(`/home/${this.state.username}`)
        //     }
        // ).catch( ()=> {
        //     this.setState({hasLoginFailed: true})
        //     this.setState({SuccessfulLogin: false})
        // })*/

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
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} onKeyPress={this.enterPressed.bind(this)}></input>
                    Password: <input type="password" id="myInput" name="password" value={this.state.password} onChange={this.handleChange} onKeyPress={this.enterPressed.bind(this)}></input>
                    <button className="btn btn-success" id="myBtn" onClick={this.loginClicked}>Login</button>
                </div>
                <section className="container">
                <div className="jumbotron">
                <div className="container">
                    <h1 className="display-5">Welcome</h1>
                    <hr className="my-4"></hr>
                    <p className="lead">HOW NOOOOOOOW!</p>
                </div>
                </div>
            </section>
            </div>
        )
    }
}

export default LoginComponent