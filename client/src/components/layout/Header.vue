<template>
  <v-toolbar fixed dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-spacer></v-spacer>

    <router-link to="/">
      <v-toolbar-title>Wise Tabs</v-toolbar-title>
    </router-link>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn icon v-if="!$store.state.isUserLoggedIn" to="/register">
        <v-icon>mdi-account-plus</v-icon>
      </v-btn>

      <v-btn icon v-if="!$store.state.isUserLoggedIn" to="/login">
        <v-icon>mdi-login-variant</v-icon>
      </v-btn>

      <v-btn icon v-if="$store.state.isUserLoggedIn" @click="logoutUser" to="/">
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    async logoutUser() {
      try {
        this.$store.dispatch("setToken", null);
        this.$store.dispatch("setUser", null);
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style scoped>
.v-toolbar {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://wallpapertag.com/wallpaper/full/3/c/4/852442-surreal-desktop-backgrounds-1920x1080-lockscreen.jpg")
      no-repeat center center;
}
.v-toolbar__title {
  color: #fff;
}
a {
  text-decoration: none;
}
</style>
