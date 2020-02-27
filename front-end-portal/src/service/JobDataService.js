//   data service method to call the REST API using AXIOS framework
import axios from 'axios'

const API_URL = 'http://localhost:8080'
const USER_API_URL = `${API_URL}/users/`
const GET_ALL_JOBS_URL = `${API_URL}/jobs/`

class JobDataService {    
    retrieveAllJobs() {
        return axios.get(`${GET_ALL_JOBS_URL}`);   //  Call the /jobs endpoint to retrieve all jobs
    }
    retrieveJob(id, description) {
        return axios.get(`${GET_ALL_JOBS_URL}${id}`, description);
    }
    deleteJob(id) {
        return axios.delete(`${GET_ALL_JOBS_URL}${id}`);
    }
}
export default new JobDataService() //  create an instance of JobDataService and make it available for other components.