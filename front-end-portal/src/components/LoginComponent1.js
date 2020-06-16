import React, { useState } from 'react'
import AuthenticationService from '../service/AuthenticationService';
import { Redirect } from "react-router-dom";

export const LoginComponent1 = () => {
    const [userName, setUserName] = useState('Neil');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    var [failedLogin, setLoginStatus] = useState(false);


    const handler = {
        userName: setUserName,
        password: setPassword
    }
      
    const handleChange = (event) => {
        handler[event.target.name](event.target.value)
    }

    const loginClicked = () => {
        const history = useHistory();
        //  Sends the values entered to the axios functions in the AuthenticatedService file
        AuthenticationService.executeJwtAuthenticationService(userName, password)
        .then((response) => {
            //  Then call the loginJwt function which adds the username and jwt token to local storage
            AuthenticationService.registerSuccessfulLoginForJwt(userName, response.data.token)
            //  Move the user to the homepage
            setRedirect(true);

            //  Problem here with pushing due to no longer being able to use history.push
            if(redirect) {
                return <Redirect to='/home/${userName}' />
               } else {
                return (
                   <LoginComponent1 />
                )
               }
            // history.push(`/home/${userName}`)
        }
        )}


    const enterPressed = (event) => {
        let code = event.keyCode || event.which;
        code === 13 && loginClicked()
    }

    return (
        <div className="container">
            <h1>Login</h1>
            <div className="container">
                {failedLogin && <div className="alert alert-warning alert-dismissible fade show" role="alert">Failed Login</div>}
                User Name: <input className= "userNameBox" type="text" placeholder="Neil" name="username" value={userName} onChange={handleChange} onKeyPress={enterPressed}></input>
                Password: <input className= "userNameBox" type="password" id="myInput" name="password" value={password} onChange={handleChange} onKeyPress={enterPressed}></input>
                <hr></hr>
                <div data-testid="button">
                    <button className="btn btn-success" id="myBtn" onClick={loginClicked}>Login</button>
                </div>
            </div>
            <section className="container">
            <div className="jumbotron">
            <div className="container">
                <h1 className="display-5">The Developer's Job Site</h1>
                <hr className="my-4"></hr>
                <h3>Welcome to the job sight aimed specifically towards developer! </h3>
                <hr className="my-4"></hr>
                <p className="lead">On this site you can search and apply for current software developer jobs in your area as well as post your own job vacancies.</p>
            </div>
            </div>
        </section>
        </div>
    )
}
export default LoginComponent1
