 
<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <router-link to="/company" style="text-decoration:none">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-home-account</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Company
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/department" style="text-decoration:none">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Department</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/employee" style="text-decoration:none">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-account-tie</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Employee</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="logout()">Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Department</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>

import token from '../helpers/token';
import router from '../../../router';

export default {
  name: 'Header',
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
  methods: {
    logout() {
      token.logout();
      router.push('/');
    }
  }
}
</script>