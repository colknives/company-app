import department from '../services/department'

export default ({
  namespaced: true,
  state: {
    hasErrors: false,
    errorMessage: '',
    hasSuccess: false,
    successMessage: '',
    uuid: '',
    form: {
        name: '',
        company_uuid: '',
        description: ''
    },
    list: [],
    companyList: []
  },
  mutations: {
    setUuid(state, uuid){
      state.uuid = uuid;
    },
    setForm(state, form){
      state.hasErrors = false;
      state.hasSuccess = false;
      state.form.name = form.name;
      state.form.company_uuid = form.company_uuid;
      state.form.description = form.description;
    },
    setList(state, list){
      state.hasErrors = false;
      state.list = list;
    },
    setCompanyList(state, list){
      state.hasErrors = false;
      state.companyList = list;
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
    getCompany: async ({commit}) => {

      try {
          const response = await department.getCompanyList();

          if( response ){
            commit('setCompanyList', response.data)
          }

      } catch (errors) {
          commit("errors", errors);
      }
  },
    getDepartment: async ({commit}) => {

        try {
            const response = await department.getList();

            if( response ){
              commit('setList', response.data)
            }

        } catch (errors) {
            commit("errors", errors);
        }
    },
    addDepartment: async ({commit, dispatch, state}) => {

      try {

          const response = await department.addDepartment(
            state.form.name,
            state.form.company_uuid,
            state.form.description
          );

          if( response ){
            commit('success', response);
            dispatch('getDepartment');
          }

      } catch (errors) {
          commit("errors", errors);
      }
    },
    updateDepartment: async ({commit, dispatch, state}) => {

      try {

          const response = await department.updateDepartment(
            state.uuid,
            state.form.name,
            state.form.company_uuid,
            state.form.description
          );

          if( response ){
            commit('success', response);
            dispatch('getDepartment');
          }

      } catch (errors) {
          commit("errors", errors);
      }
    },
    deleteDepartment: async ({commit, dispatch, state}) => {

      try {

          const response = await department.deleteDepartment(
            state.uuid
          );

          if( response ){
            commit('success', response);
            dispatch('getDepartment');
          }

      } catch (errors) {
          commit("errors", errors);
      }
    },
  }
})
