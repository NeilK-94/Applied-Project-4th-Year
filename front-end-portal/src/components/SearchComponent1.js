import React, { useState } from "react";
import JobDataService from "../service/JobDataService";
import ResultsComponent from "./ResultsComponent";

export const SearchComponent1 = () => {
  const [searchQuery, setSearchQuery] = useState("SAP");
  const [message, setMessage] = useState("");
  const [selected, setSelected] = useState(0); // dont like this method, use a boostrap tab or something
  const [job, setJob] = useState([]);

  const search = (buttonName) => {
    //setMessage("");

    switch (buttonName) {
      case 0:
        JobDataService.retrieveJobByEmployer({ searchQuery })
          .then((response) => {
            setJob(response.data);
            setMessage("");
          })
          .catch(() => {
            setMessage("Failed Search");
          });
        break;
      case 1:
        JobDataService.retrieveJobByJobTitle({ searchQuery })
          .then((response) => {
            setJob(response.data);
            setMessage("");
          })
          .catch(() => {
            setMessage("Failed Search");
          });
        break;
      case 2:
        JobDataService.retrieveJobByLocation({ searchQuery })
          .then((response) => {
            setJob(response.data);
            setMessage("");
          })
          .catch(() => {
            setMessage("Failed Search");
          });
        break;

      default:
        break;
    }
  };

  const handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  //let selected = this.state.selected;
  return (
    <div>
      <div className="container">
        {message && <div className="alert alert-warning">Failed Search</div>}
        <h4>Search a job</h4>
        <p>You can search for jobs from a certain employer or by location.</p>
        <div className="container">
          <span id="toggle">
            <button
              className="btn btn-secondary"
              id="reloadButton"
              onClick={() => setSelected(0)}
            >
              {" "}
              Employer{" "}
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setSelected(1)}
            >
              {" "}
              Location{" "}
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setSelected(2)}
            >
              {" "}
              Job Title{" "}
            </button>
          </span>
          {selected === 0 && (
            <div id="employer">
              <input
                type="text"
                data-testid="search-button"
                placeholder="SAP"
                name="searchQuery"
                value={searchQuery}
                onChange={handleChange}
              ></input>
              <button className="btn btn-success" onClick={search(0)}>
                Search
              </button>
            </div>
          )}
          {selected === 1 && (
            <div id="county">
              <input
                type="text"
                name="searchQuery"
                value={searchQuery}
                onChange={handleChange}
              ></input>
              <button className="btn btn-success" onClick={search(2)}>
                Search
              </button>
            </div>
          )}
          {selected === 2 && (
            <div id="jobTitle">
              <input
                type="text"
                name="searchQuery"
                value={searchQuery}
                onChange={handleChange}
              ></input>
              <button className="btn btn-success" onClick={search(1)}>
                Search
              </button>
            </div>
          )}
        </div>
      </div>
      <ResultsComponent response={job} searchQuery={searchQuery} />
    </div>
  );
};

export default SearchComponent1;
