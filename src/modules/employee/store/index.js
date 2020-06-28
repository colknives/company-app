import employee from '../services/employee'

export default ({
  namespaced: true,
  state: {
    hasErrors: false,
    errorMessage: '',
    hasSuccess: false,
    successMessage: '',
    uuid: '',
    form: {
        firstname: '',
        lastname: '',
        department_uuid: '',
        email: ''
    },
    list: [],
    departmentList: []
  },
  mutations: {
    setUuid(state, uuid){
      state.uuid = uuid;
    },
    setForm(state, form){
      state.hasErrors = false;
      state.hasSuccess = false;
      state.form.firstname = form.firstname;
      state.form.lastname = form.lastname;
      state.form.department_uuid = form.department_uuid;
      state.form.email = form.email;
    },
    setList(state, list){
      state.hasErrors = false;
      state.list = list;
    },
    setDepartmentList(state, list){
      state.hasErrors = false;
      state.departmentList = list;
    },
    errors(state, errors){
      state.hasErrors = true;
      state.hasSuccess = false;
      state.errorMessage = errors.errors.message;
    },
    success(state, success){
      state.hasErrors = false;
      state.hasSuccess = true;
      state.successMessage = success.message;
    }
  },
  actions: {
    getDepartment: async ({commit}) => {

      try {
          const response = await employee.getDepartmentList();

          if( response ){
            commit('setDepartmentList', response.data)
          }

      } catch (errors) {
          commit("errors", errors);
      }
  },
    getEmployee: async ({commit}) => {

        try {
            const response = await employee.getList();

            if( response ){
              commit('setList', response.data)
            }

        } catch (errors) {
            commit("errors", errors);
        }
    },
    addEmployee: async ({commit, dispatch, state}) => {

      try {

          const response = await employee.addEmployee(
            state.form.firstname,
            state.form.lastname,
            state.form.department_uuid,
            state.form.email
          );

          if( response ){
            commit('success', response);
            dispatch('getEmployee');
          }

      } catch (errors) {
          commit("errors", errors);
      }
    },
    updateEmployee: async ({commit, dispatch, state}) => {

      try {
          const response = await employee.updateEmployee(
            state.uuid,
            state.form.firstname,
            state.form.lastname,
            state.form.department_uuid,
            state.form.email
          );

          if( response ){
            commit('success', response);
            dispatch('getEmployee');
          }

      } catch (errors) {
          commit("errors", errors);
      }
    },
    deleteEmployee: async ({commit, dispatch, state}) => {

      try {

          const response = await employee.deleteEmployee(
            state.uuid
          );

          if( response ){
            commit('success', response);
            dispatch('getEmployee');
          }

      } catch (errors) {
          commit("errors", errors);
      }
    },
  }
})
