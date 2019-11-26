//  data service method to call the REST API using AXIOS framework

import axios from 'axios'
const USER = 'Cisco'
const JOB_API_URL = 'http://localhost:8080'
const USER_API_URL = `${JOB_API_URL}/users/${USER}` //  Makes call reusable

class JobDataService {
    
    retrieveAllJobs(name) {
        return axios.get(`${USER_API_URL}/jobs`);   //  Call the REST API with the GET method.
    }

    //  Add delete jobs method
}
export default new JobDataService() //  create an instance of JobDataService and make it available for other components.