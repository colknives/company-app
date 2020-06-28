import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import auth from './modules/auth/module'
import company from './modules/company/module'
import department from './modules/department/module'
import employee from './modules/employee/module'

Vue.config.productionTip = false

//Add Auth Module
store.registerModule('auth', auth.store)
router.addRoutes(auth.routes)

//Add Company Module
store.registerModule('company', company.store)
router.addRoutes(company.routes)

//Add Department Module
store.registerModule('department', department.store)
router.addRoutes(department.routes)

//Add Employee Module
store.registerModule('employee', employee.store)
router.addRoutes(employee.routes)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
