<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs6 offset-xs3>
        <v-toolbar dense dark>
          <v-toolbar-title>Sign Up</v-toolbar-title>
          <v-subheader>Create an account</v-subheader>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-form name="wise-tabs-form" autocomplete="off">
            <v-flex xs6 offset-xs3>
              <v-text-field label="Username" v-model="username" />
            </v-flex>
            <v-flex xs6 offset-xs3>
              <v-text-field label="Email" v-model="email" />
            </v-flex>
            <v-flex xs6 offset-xs3>
              <v-text-field
                label="Password"
                type="password"
                v-model="password"
                autocomplete="new-password"
              />
            </v-flex>

            <div v-html="error" class="error" />

            <button @click="registerUser" class="btn med-btn">Register</button>
          </v-form>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthenticationService from "../../services/AuthenticationService";
export default {
  data: () => ({
    username: "",
    email: "",
    password: "",
    error: null
  }),
  methods: {
    async registerUser() {
      try {
        await AuthenticationService.register({
          username: this.username,
          email: this.email,
          password: this.password
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: var(--reddish);
}
</style>
