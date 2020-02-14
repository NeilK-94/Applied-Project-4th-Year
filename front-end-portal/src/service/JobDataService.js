//  data service method to call the REST API using AXIOS framework

import axios from 'axios'
//    const USER = 'Cisco'
const JOB_API_URL = 'http://localhost:8080'
//  const USER_API_URL = `${JOB_API_URL}/users/${USER}` //  Will be done like this to make API more restful
const GET_ALL_JOBS_URL = `${JOB_API_URL}/jobs/`
class JobDataService {
    
    retrieveAllJobs(name) {
        return axios.get(`${GET_ALL_JOBS_URL}`);   //  Call the REST API with the GET method.
    }
    retrieveJob(name, employer) {
        return axios.get(`${JOB_API_URL}/jobs/${employer}`);
    }

    deleteJob(employer) {
        return axios.delete(`${JOB_API_URL}/delete/${employer}`);
    }
}
export default new JobDataService() //  create an instance of JobDataService and make it available for other components.