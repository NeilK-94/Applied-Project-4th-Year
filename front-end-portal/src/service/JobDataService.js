//   data service method to call the REST API using AXIOS framework
import axios from 'axios'
import { GET_ALL_JOBS_URL } from '../Constants'
import { CREATE_JOB_URL } from '../Constants'

class JobDataService {
    retrieveAllJobs() {
        return axios.get(`${GET_ALL_JOBS_URL}`);
    }
    retrieveJob(employer, id) {
        return axios.get(`${GET_ALL_JOBS_URL}${id}`);
    }
    deleteJob(username, id) {   //  Name of user and id to delete
        return axios.delete(`${GET_ALL_JOBS_URL}${id}`);
    }
    updateJob(jobTitle, employer, id, job) {
        return axios.put(`${GET_ALL_JOBS_URL}${id}`, job);
    }
    createJob(jobTitle, employer, id, job) {
        return axios.post(`${CREATE_JOB_URL}`, job);    //  put user id here as url path
    }
}
export default new JobDataService() //  create an instance of JobDataService and make it available for other components.