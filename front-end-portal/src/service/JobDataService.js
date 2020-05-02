//   data service method to call the REST API using AXIOS framework
import axios from 'axios'
//import { GET_ALL_JOBS_URL, CREATE_JOB_URL, EMPLOYER_URL } from '../Constants'
import { HEROKU_URL, HEROKU_EMP, HEROKU_LOC, HEROKU_JOB, HEROKU_APPLY, APPLY_URL, EMPLOYER_URL } from '../Constants'


class JobDataService {
    /*  --- Localhost:3000 Connections --- 
    // retrieveAl}lJobs() {
    //     return axios.get(`${GET_ALL_JOBS_URL}`);
    // }
    // retrieveJob(employer, id) {
    //     return axios.get(`${GET_ALL_JOBS_URL}${id}`);
    // }
    // deleteJob(username, id) {   //  Name of user and id to delete
    //     return axios.delete(`${GET_ALL_JOBS_URL}${id}`);
    // }
    // updateJob(jobTitle, employer, id, job) {
    //     return axios.put(`${GET_ALL_JOBS_URL}${id}`, job);
    // }
    // createJob(jobTitle, employer, id, job) {
    //     return axios.post(`${CREATE_JOB_URL}`, job);    //  put user id here as url path
    // }
    // retrieveJobByEmployer(employer) {
    //     return axios.get(`${EMPLOYER_URL}?employer=${employer}`);
    // }
    // retrieveJobByLocation(county) {
    //     return axios.get(`${LOCATION_URL}?county=${county}`);
    // }
    // retrieveJobByJobTitle(jobTitle) {
    //     return axios.get(`${JOBTITLE_URL}?jobTitle=${jobTitle}`);
    // }
    */
    /* --- Heroku Connections --- */
    retrieveAllJobs() {
        return axios.get(`${HEROKU_URL}`);
    }
    
    retrieveJob(employer, id) {
        return axios.get(`${HEROKU_URL}${id}`);
    }
    
    deleteJob(username, id) {   //  Name of user and id to delete
        return axios.delete(`${HEROKU_URL}${id}`);
    }
    
    updateJob(jobTitle, employer, id, job) {
        return axios.put(`${HEROKU_URL}${id}`, job);
    }
    
    createJob(jobTitle, employer, id, job) {
        return axios.post(`${HEROKU_URL}`, job);    //  put user id here as url path
    }
    
    retrieveJobByEmployer(employer) {
        return axios.get(`${HEROKU_EMP}?employer=${employer}`);
    }
    
    retrieveJobByLocation(county) {
        return axios.get(`${HEROKU_LOC}?county=${county}`);
    }
    
    retrieveJobByJobTitle(jobTitle) {
        return axios.get(`${HEROKU_JOB}?jobTitle=${jobTitle}`);
    }
    applyJob(id, applied, job) {
        return axios.put(`${HEROKU_APPLY}${id}`, job);
    }
}
export default new JobDataService() //  create an instance of JobDataService and make it available for other components.