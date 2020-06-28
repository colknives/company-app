import api from "../helpers/api";
import token from '../helpers/token'

export default {
    getList () {

        return new Promise((resolve, reject) => {
            api.get(
                "api/department/all",
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
    getCompanyList () {

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
    addDepartment (name, companyUuid, description) {

        return new Promise((resolve, reject) => {
            api.post(
                "api/department/save",
                {
                    'name': name,
                    'company_uuid': companyUuid, 
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
    updateDepartment (uuid, name, companyUuid, description) {

        return new Promise((resolve, reject) => {
            api.patch(
                "api/department/update/" + uuid,
                {
                    'name': name, 
                    'company_uuid': companyUuid, 
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
    deleteDepartment (uuid) {

        return new Promise((resolve, reject) => {
            api.delete(
                "api/department/delete/" + uuid,
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