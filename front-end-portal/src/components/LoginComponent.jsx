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
        // })

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
   
    render(){
        return (
            <div className="container">
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Failed Login</div>}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
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