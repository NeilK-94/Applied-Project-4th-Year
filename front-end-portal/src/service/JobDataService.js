//   data service method to call the REST API using AXIOS framework
import axios from 'axios'

const API_URL = 'http://localhost:8080'
const GET_ALL_JOBS_URL = `${API_URL}/jobs/`

class JobDataService {    
    retrieveAllJobs() {
        return axios.get(`${GET_ALL_JOBS_URL}`);   //  Call the /jobs endpoint to retrieve all jobs
    }
    retrieveJob(employer, id) {
        return axios.get(`${GET_ALL_JOBS_URL}${id}`);
    }
    deleteJob(id) {
        return axios.delete(`${GET_ALL_JOBS_URL}${id}`);
    }
    updateJob(jobTitle, employer, id, job) {
        return axios.put(`${GET_ALL_JOBS_URL}${id}`, job);
    }
    createJob(jobTitle, employer, id, job) {
        return axios.post(`${GET_ALL_JOBS_URL}`, job);
    }
}
export default new JobDataService() //  create an instance of JobDataService and make it available for other components.