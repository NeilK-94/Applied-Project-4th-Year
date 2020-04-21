//   data service method to call the REST API using AXIOS framework
import axios from 'axios'
import { GET_ALL_JOBS_URL } from '../Constants'
import { CREATE_JOB_URL } from '../Constants'
const EMPLOYER_URL = 'http://localhost:8080/employer'
const LOCATION_URL = 'http://localhost:8080/location'
const JOBTITLE_URL = 'http://localhost:8080/title'
const HEROKU_URL = 'https://spring-portal-api.herokuapp.com/jobs/'
const HEROKU_EMP = 'https://spring-portal-api.herokuapp.com/employer'
const HEROKU_LOC = 'https://spring-portal-api.herokuapp.com/location'
const HEROKU_JOB = 'https://spring-portal-api.herokuapp.com/title'

class JobDataService {
    // retrieveAllJobs() {
    //     return axios.get(`${GET_ALL_JOBS_URL}`);
    // }
    retrieveAllJobs() {
        return axios.get(`${HEROKU_URL}`);
    }
    // retrieveJob(employer, id) {
    //     return axios.get(`${GET_ALL_JOBS_URL}${id}`);
    // }
    retrieveJob(employer, id) {
        return axios.get(`${HEROKU_URL}${id}`);
    }
    // deleteJob(username, id) {   //  Name of user and id to delete
    //     return axios.delete(`${GET_ALL_JOBS_URL}${id}`);
    // }
    deleteJob(username, id) {   //  Name of user and id to delete
        return axios.delete(`${HEROKU_URL}${id}`);
    }
    // updateJob(jobTitle, employer, id, job) {
    //     return axios.put(`${GET_ALL_JOBS_URL}${id}`, job);
    // }
    updateJob(jobTitle, employer, id, job) {
        return axios.put(`${HEROKU_URL}${id}`, job);
    }
    // createJob(jobTitle, employer, id, job) {
    //     return axios.post(`${CREATE_JOB_URL}`, job);    //  put user id here as url path
    // }
    createJob(jobTitle, employer, id, job) {
        return axios.post(`${HEROKU_URL}`, job);    //  put user id here as url path
    }
    // retrieveJobByEmployer(employer) {
    //     return axios.get(`${EMPLOYER_URL}?employer=${employer}`);
    // }
    retrieveJobByEmployer(employer) {
        return axios.get(`${HEROKU_EMP}?employer=${employer}`);
    }
    // retrieveJobByLocation(county) {
    //     return axios.get(`${LOCATION_URL}?county=${county}`);
    // }
    retrieveJobByLocation(county) {
        return axios.get(`${HEROKU_LOC}?county=${county}`);
    }
    // retrieveJobByJobTitle(jobTitle) {
    //     return axios.get(`${JOBTITLE_URL}?jobTitle=${jobTitle}`);
    // }
    retrieveJobByJobTitle(jobTitle) {
        return axios.get(`${HEROKU_JOB}?jobTitle=${jobTitle}`);
    }
}
export default new JobDataService() //  create an instance of JobDataService and make it available for other components.