class AuthenticationService {
    //  Add user name to session storage
    registerLogin(userName, password){
        sessionStorage.setItem("User", userName);
    }
    //  Remove user name from session storage
    logout(){
        sessionStorage.removeItem("User");
    }
}

export default new AuthenticationService()