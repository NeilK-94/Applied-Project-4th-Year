import axios from 'axios'

const AUTH_API_URL = 'http://localhost:8080/basicauth'

class AuthenticationService {
    executeBasicAuthenticationService(userName, password){
        return axios.get(`${AUTH_API_URL}`,
        {headers: {authorization: this.createBasicAuthToken(userName, password)}});
    }

    createBasicAuthToken(userName, password){
        //  Create standard authentication header. Use base63 encoding
        return "Basic " + window.btoa(userName + ":" + password)
    }

    //  Add user name to session storage
    registerLogin(userName, password){
        sessionStorage.setItem("User", userName);
        this.axiosInterceptor(this.createBasicAuthToken(userName, password));
    }
    //  Remove user name from session storage
    logout(){
        sessionStorage.removeItem("User");
    }
    getLoggedUser() {
    //  Get the currently logged in user
        let userName = sessionStorage.getItem("User")
        if(userName===null) return ''
        return userName
    }
    //  Check if a user is logged in
    isLoggedIn(){
        let user = sessionStorage.getItem("User");

        if(user === null) return false
        return true
    }

    //  This function intercepts all axios request being sent to the backend and adds an authorization header to it
    //  The username and password are sent to it from the login 
    axiosInterceptor(basicAuthHeader){
        axios.interceptors.request.use(
            (config) => {
                if(this.isLoggedIn()){
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
        
    }
}

export default new AuthenticationService()