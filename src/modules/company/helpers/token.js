export default {

    //Check if logged in
    isLoggedIn () {

        if(this.getToken()){
            return true;
        }

        return false;
    },
    //Get Token
    getToken() {
        return localStorage.getItem("token");
    },

    login(token, user) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
    },

    //Remove all local storage
    logout() {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }
}