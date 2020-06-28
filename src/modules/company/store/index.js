import company from '../services/company'

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
        description: ''
    },
    list: []
  },
  mutations: {
    setUuid(state, uuid){
      state.uuid = uuid;
    },
    setForm(state, form){
      state.hasErrors = false;
      state.hasSuccess = false;
      state.form.name = form.name;
      state.form.description = form.description;
    },
    setList(state, list){
      state.hasErrors = false;
      state.list = list;
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
            const response = await company.getList();

            if( response ){
              commit('setList', response.data)
            }

        } catch (errors) {
            commit("errors", errors);
        }
    },
    addCompany: async ({commit, dispatch, state}) => {

      try {

          const response = await company.addCompany(
            state.form.name,
            state.form.description
          );

          if( response ){
            commit('success', response);
            dispatch('getCompany');
          }

      } catch (errors) {
          commit("errors", errors);
      }
    },
    updateCompany: async ({commit, dispatch, state}) => {

      try {

          const response = await company.updateCompany(
            state.uuid,
            state.form.name,
            state.form.description
          );

          if( response ){
            commit('success', response);
            dispatch('getCompany');
          }

      } catch (errors) {
          commit("errors", errors);
      }
    },
    deleteCompany: async ({commit, dispatch, state}) => {

      try {

          const response = await company.deleteCompany(
            state.uuid
          );

          if( response ){
            commit('success', response);
            dispatch('getCompany');
          }

      } catch (errors) {
          commit("errors", errors);
      }
    },
  }
})
