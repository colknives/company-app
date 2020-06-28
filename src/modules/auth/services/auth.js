import api from "../helpers/api";

export default {
    login (email, password) {

        return new Promise((resolve, reject) => {
            api.post(
                "api/auth/login",
                { 
                    "email":email,
                    "password": password 
                }
            )
            .then(response => {
                return resolve(response);
            })
            .catch((status, error) => {
                reject(status, error);
            });
        });
    }
}