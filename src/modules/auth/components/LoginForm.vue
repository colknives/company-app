<template>
<v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <div>
                  <v-alert type="error" dismissible v-if="hasErrors">{{ errorMessage }}</v-alert>
                </div>
                <v-form>
                  <v-text-field
                    label="Email"
                    name="email"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="form.email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="form.password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="submit">Login</v-btn>
              </v-card-actions>
            </v-card>
</template>

<script>

import { mapState } from "vuex";

export default {
  name: 'LoginForm',
  computed: mapState("auth", [
      "hasErrors",
      "errorMessage"
  ]),
  data: function() {
    return {
        form: {
            email: '',
            password: ''
        }
    };
  },
  methods: {
      submit: function(){
          this.$store.commit("auth/setForm", this.form);
          this.$store.dispatch("auth/login");
      }
  },
}
</script>
