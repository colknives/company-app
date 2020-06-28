import api from "../helpers/api";
import token from '../helpers/token'

export default {
    getList () {

        return new Promise((resolve, reject) => {
            api.get(
                "api/company/all",
                {"Authorization":token.getToken()}
            )
            .then(response => {
                return resolve(response);
            })
            .catch((status, error) => {
                reject(status, error);
            });
        });
    },
    addCompany (name, description) {

        return new Promise((resolve, reject) => {
            api.post(
                "api/company/save",
                {
                    'name': name, 
                    'description': description
                },
                {"Authorization":token.getToken()}
            )
            .then(response => {
                return resolve(response);
            })
            .catch((status, error) => {
                reject(status, error);
            });
        });
    },
    updateCompany (uuid, name, description) {

        return new Promise((resolve, reject) => {
            api.patch(
                "api/company/update/" + uuid,
                {
                    'name': name, 
                    'description': description
                },
                {"Authorization":token.getToken()}
            )
            .then(response => {
                return resolve(response);
            })
            .catch((status, error) => {
                reject(status, error);
            });
        });
    },
    deleteCompany (uuid) {

        return new Promise((resolve, reject) => {
            api.delete(
                "api/company/delete/" + uuid,
                {"Authorization":token.getToken()}
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