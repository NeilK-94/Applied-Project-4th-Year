//   data service method to call the REST API using AXIOS framework
import axios from 'axios'

const API_URL = 'http://localhost:8080'
const GET_ALL_USERS_URL = `${API_URL}/users/`

class UserDataService {    
    retrieveAllUsers() {
        return axios.get(`${GET_ALL_USERS_URL}`);   //  Call the /users endpoint to retrieve all users
    }
    retrieveUser(id, description) {
        return axios.get(`${GET_ALL_USERS_URL}${id}`, description);
    }
    deleteUser(id) {
        return axios.delete(`${GET_ALL_USERS_URL}${id}`);
    }
}
export default new UserDataService() //  create an instance of UserDataService and make it available for other components.