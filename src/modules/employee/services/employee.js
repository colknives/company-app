import api from "../helpers/api";
import token from '../helpers/token'

export default {
    getList () {

        return new Promise((resolve, reject) => {
            api.get(
                "api/employee/all",
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
    getDepartmentList () {

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
    addEmployee (firstname, lastname, departmentUuid, email) {

        return new Promise((resolve, reject) => {
            api.post(
                "api/employee/save",
                {
                    'firstname': firstname,
                    'lastname': lastname,
                    'department_uuid': departmentUuid, 
                    'email': email
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
    updateEmployee (uuid, firstname, lastname, departmentUuid, email) {

        return new Promise((resolve, reject) => {
            api.patch(
                "api/employee/update/" + uuid,
                {
                    'firstname': firstname, 
                    'lastname': lastname, 
                    'department_uuid': departmentUuid, 
                    'email': email
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
    deleteEmployee (uuid) {

        return new Promise((resolve, reject) => {
            api.delete(
                "api/employee/delete/" + uuid,
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