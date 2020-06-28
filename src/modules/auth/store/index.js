import auth from '../services/auth'
import token from '../helpers/token'
import router from "../../../router"

export default ({
  namespaced: true,
  state: {
    hasErrors: false,
    errorMessage: '',
    form: {
        email: '',
        password: ''
    }
  },
  mutations: {
    setForm(state, form){
        state.hasErrors = false;
        state.form.email = form.email;
        state.form.password = form.password;
    },
    errors(state, errors){
      state.hasErrors = true;
      state.errorMessage = errors.errors.message;
    }
  },
  actions: {
    login: async ({commit, state}) => {

        try {
            const response = await auth.login(state.form.email, state.form.password);

            if( response ){
              token.login(response.token, response.user);
              router.push('/company');
            }

        } catch (errors) {
            commit("errors", errors);
        }
    },
  }
})
