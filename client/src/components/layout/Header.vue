<template>
  <div>
    <v-app-bar dark>
      <v-app-bar-nav-icon
        hide-on-scroll
        @click="drawer = true"
      ></v-app-bar-nav-icon>

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

        <v-btn
          icon
          v-if="$store.state.isUserLoggedIn"
          @click="logoutUser"
          to="/"
        >
          <v-icon>mdi-export</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/songs">
            <v-list-item-icon>
              <v-icon>mdi-search-web</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Browse</v-list-item-title>
          </v-list-item>

          <v-list-item to="/songs/add-song" v-if="$store.state.isUserLoggedIn">
            <v-list-item-icon>
              <v-icon>mdi-music-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Add Song</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="$store.state.isUserLoggedIn">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  }),
  methods: {
    async logoutUser() {
      try {
        this.$store.dispatch("setToken", null);
        this.$store.dispatch("setUser", null);

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
