import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import JobDataService from "../service/JobDataService";
import AuthenticationService from "../service/AuthenticationService";

export const ListJobsComponent1 = () => {
  const [message, setMessage] = useState("");
  const [jobs, setJobs] = useState([]);

  /* useHistory hook needed to use router's 'push'
   * https://reacttraining.com/react-router/web/api/Hooks/usehistory
   */
  let history = useHistory();

  /* useEffect fills in for componentDidMount here. it takes a second argument '[]'
   * to ensure it only runs once. Otherwise would constantly send GET requests to API.
   */
  useEffect(() => {
    refreshJobs();
  }, []);

  const refreshJobs = () => {
    JobDataService.retrieveAllJobs()
      .then((response) => {
        setJobs(response.data);
      })
      .catch(() => {
        setMessage("Failed to load jobs");
      });
  };

  const deleteJobClicked = (id) => {
    let username = AuthenticationService.getLoggedUser();

    JobDataService.deleteJob(username, id)
      .then((response) => {
        console.log(response);
        setMessage("Successfully deleted the job posting");
        refreshJobs();
      })
      .catch(() => {
        setMessage("Failed to delete the job");
      });
  };

  const updateJobClicked = (id) => {
    history.push(`/jobs/${id}`);
  };

  const addJobClicked = () => {
    history.push(`/jobs/-1`);
  };

  //    Extract this out to parent component. pass in where needed as props
  const checkApplied = (applied) => {
    if (applied === true) {
      return (
        <img
          src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png"
          width="25px"
          height="30px"
          alt="applied tick"
        />
      );
    }
  };

  return (
    <div className="container">
      <h3>All Jobs</h3>
      {message && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}
      <div className="container">
        <br></br>
        <div className="row">
          <button className="btn btn-success" onClick={addJobClicked}>
            Add
          </button>
        </div>
        <br></br>
        <div id="table-wrapper">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Employer</th>
                <th>Job Title</th>
                <th>Applied</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td>{job.employer}</td>
                  <td>{job.jobTitle}</td>
                  <td>{checkApplied(job.applied)}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => updateJobClicked(job.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => deleteJobClicked(job.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListJobsComponent1;
