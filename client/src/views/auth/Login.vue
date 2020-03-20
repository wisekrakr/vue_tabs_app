<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs6 offset-xs3>
        <v-toolbar dense dark>
          <v-toolbar-title>Sign In</v-toolbar-title>
          <v-subheader>Welcome back</v-subheader>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-form name="wise-tabs-form">
            <v-flex xs6 offset-xs3>
              <v-text-field label="Email" v-model="email" />
            </v-flex>
            <v-flex xs6 offset-xs3>
              <v-text-field label="Password" type="password" v-model="password" />
            </v-flex>

            <div v-html="error" class="error" />

            <button @click="loginUser" class="btn med-btn">Login</button>
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
    email: "",
    password: "",
    error: null
  }),
  methods: {
    async loginUser() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);

        this.$router.push({
          name: "home"
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
