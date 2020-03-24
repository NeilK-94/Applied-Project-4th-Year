class AuthenticationService {
    //  Add user name to session storage
    registerLogin(userName, password){
        sessionStorage.setItem("User", userName);
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
}

export default new AuthenticationService()