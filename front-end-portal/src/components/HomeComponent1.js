import React from "react";
import { Link } from "react-router-dom";
import SearchComponent from "./SearchComponent";

export const HomeComponent1 = (props) => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-5">The Developer's Job Site</h1>
          <hr className="my-4"></hr>
          <p className="lead">
            Welcome {props.match.params.username}. You can view the latest jobs{" "}
            <Link to="/jobs">here.</Link>
          </p>
        </div>
      </div>
      <SearchComponent />
    </>
  );
};
export default HomeComponent1;
