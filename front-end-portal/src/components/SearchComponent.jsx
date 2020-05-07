import React, { Component } from 'react'
import JobDataService from '../service/JobDataService';
import ResultsComponent from './ResultsComponent'
/*  This component has three buttons, each passing
    data to their respective axios methods in jobDataService    */
export class SearchComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            jobs: [],
            searchQueryEmployer: 'SAP',
            searchQueryLocation: 'Galway',
            searchQueryJobTitle: 'Front End Developer',
            hasSearchFailed: false,
            selected: 0,
        }
        this.handleChange = this.handleChange.bind(this);
        this.searchEmployerClicked = this.searchEmployerClicked.bind(this);
        this.searchLocationClicked = this.searchLocationClicked.bind(this);
        this.searchJobTitleClicked = this.searchJobTitleClicked.bind(this);
    } 

    searchEmployerClicked(){
        this.setState({ hasSearchFailed: false })
        JobDataService.retrieveJobByEmployer(this.state.searchQueryEmployer)
        .then(  //  Decide what to do once call is made succesfully
            response => {
                this.setState({ jobs: response.data })
                this.setState({ hasSearchFailed: false })
            }).catch(() => {
                this.setState({ hasSearchFailed: true })
            })
    }
    searchLocationClicked(){
        this.setState({ hasSearchFailed: false })
        JobDataService.retrieveJobByLocation(this.state.searchQueryLocation)
        .then(  //  Decide what to do once call is made succesfully
            response => {
                this.setState({ jobs: response.data })
                this.setState({ hasSearchFailed: false })
            }).catch(() => {
                this.setState({ hasSearchFailed: true })
            })
    }
    searchJobTitleClicked(){
        this.setState({ hasSearchFailed: false })
        JobDataService.retrieveJobByJobTitle(this.state.searchQueryJobTitle)
        .then(  //  Decide what to do once call is made succesfully
            response => {
                this.setState({ jobs: response.data })
                this.setState({ hasSearchFailed: false })
            }).catch(() => {
                this.setState({ hasSearchFailed: true })
            })
    }  

    handleChange(event){
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }
    render() {
        let selected = this.state.selected
        return (
            <div>
                <div className="container">
                    {this.state.hasSearchFailed && <div className="alert alert-warning">Failed Search</div>}
                    <h4>Search a job</h4>
                    <p>You can search for jobs from a certain employer or by location.</p>
                    <div className="container">
                    <span id="toggle">
                        <button className="btn btn-secondary" onClick={() => this.setState({ selected: 0 })}> Employer </button>
                        <button className="btn btn-secondary" onClick={() => this.setState({ selected: 1 })}> Location </button>
                        <button className="btn btn-secondary" onClick={() => this.setState({ selected: 2 })}> Job Title </button>     
                    </span>
                        {(selected === 0) && <div id="employer">
                        <input type="text" data-testid="search-button" placeholder="SAP" name="searchQueryEmployer" value={this.state.searchQueryEmployer} onChange={this.handleChange}></input>
                        <button className="btn btn-success" onClick={this.searchEmployerClicked}>Search</button></div>}
                        {(selected === 1) && <div id="county">
                        <input type="text" name="searchQueryLocation" value={this.state.searchQueryLocation} onChange={this.handleChange}></input>
                        <button className="btn btn-success" onClick={this.searchLocationClicked}>Search</button></div>}
                        {(selected === 2) && <div id="jobTitle">
                        <input type="text" name="searchQueryJobTitle" value={this.state.searchQueryJobTitle} onChange={this.handleChange}></input>
                        <button className="btn btn-success" onClick={this.searchJobTitleClicked}>Search</button></div>}
                    </div>
                    </div>
                <ResultsComponent response={this.state.jobs} searchQueryEmployer={this.state.searchQueryEmployer}/>
            </div>
        )
    }
}

export default SearchComponent