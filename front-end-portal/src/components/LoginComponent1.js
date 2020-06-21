import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import AuthenticationService from "../service/AuthenticationService";

export const LoginComponent1 = () => {
  const [userName, setUserName] = useState("Neil");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  let history = useHistory();

  const handler = {
    userName: setUserName,
    password: setPassword,
  };

  const handleChange = (event) => {
    handler[event.target.name](event.target.value);
  };

  const loginClicked = () => {
    AuthenticationService.executeJwtAuthenticationService(userName, password)
      .then((response) => {
        AuthenticationService.registerSuccessfulLoginForJwt(
          { userName },
          response.data.token
        );
        history.push(`/home/${userName}`);
      })
      .catch(() => {
        setMessage("Failed login");
      });
  };

  const enterPressed = (event) => {
    let code = event.keyCode || event.which;
    code === 13 && loginClicked();
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <div className="container">
        {message && (
          <div className="alert alert-warning" role="alert">
            {message}
          </div>
        )}
        User Name:{" "}
        <input
          className="userNameBox"
          type="text"
          placeholder="Neil"
          name="username"
          value={userName}
          onChange={handleChange}
          onKeyPress={enterPressed}
        ></input>
        Password:{" "}
        <input
          className="userNameBox"
          type="password"
          id="myInput"
          name="password"
          value={password}
          onChange={handleChange}
          onKeyPress={enterPressed}
        ></input>
        <hr></hr>
        <div data-testid="button">
          <button className="btn btn-success" id="myBtn" onClick={loginClicked}>
            Login
          </button>
        </div>
      </div>
      <section className="container">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-5">The Developer's Job Site</h1>
            <hr className="my-4"></hr>
            <h3>
              Welcome to the job sight aimed specifically towards developer!{" "}
            </h3>
            <hr className="my-4"></hr>
            <p className="lead">
              On this site you can search and apply for current software
              developer jobs in your area as well as post your own job
              vacancies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default LoginComponent1;
