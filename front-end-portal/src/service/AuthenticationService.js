import axios from 'axios'
import { BASIC_AUTH_API_URL } from '../Constants'
import { JWT_AUTH_API_URL } from '../Constants'

export const SESSION_USER_NAME = "User"

class AuthenticationService {
    //  Basic Authentication *********************************
    executeBasicAuthenticationService(username, password){
        return axios.get(`${BASIC_AUTH_API_URL}`,
        {headers: {authorization: this.createBasicAuthToken(username, password)}});
    }
    createBasicAuthToken(username, password){
        //  Create standard authentication header. Use base63 encoding
        return "Basic " + window.btoa(username + ":" + password)
    }
    //  Basic Authentication *********************************

    executeJwtAuthenticationService(username, password) {
        return axios.post(`${JWT_AUTH_API_URL}`, {
            username,
            password
        })
    }
    createJWTToken(token) {
        return 'Bearer ' + token
    }

    //  Add user name to session storage
    registerLogin(username, password){
        sessionStorage.setItem(SESSION_USER_NAME, username);
        this.axiosInterceptor(this.createBasicAuthToken(username, password));
    }

    registerSuccessfulLoginForJwt(username, token) {
        sessionStorage.setItem(SESSION_USER_NAME, username)
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }
    //  Remove user name from session storage
    logout(){
        sessionStorage.removeItem(SESSION_USER_NAME);
    }
    getLoggedUser() {
    //  Get the currently logged in user
        let username = sessionStorage.getItem(SESSION_USER_NAME)
        if(username===null) return ''
        return username
    }
    //  Check if a user is logged in
    isLoggedIn(){
        let user = sessionStorage.getItem(SESSION_USER_NAME);

        if(user === null) return false
        return true
    }

    //  This function intercepts all axios request being sent to the backend and adds an authorization header to it
    //  The username and password are sent to it from the login 
    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()