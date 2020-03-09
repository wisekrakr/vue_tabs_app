<template>
  <v-toolbar fixed dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-spacer></v-spacer>

    <router-link to="/">
      <v-toolbar-title>Wise Tabs</v-toolbar-title>
    </router-link>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <router-link to="/register">
        <v-btn icon>
          <v-icon>mdi-account-plus</v-icon>
        </v-btn>
      </router-link>

      <router-link to="/login">
        <v-btn icon>
          <v-icon>mdi-login-variant</v-icon>
        </v-btn>
      </router-link>

      <router-link to="/logout">
        <v-btn icon>
          <v-icon>mdi-export</v-icon>
        </v-btn>
      </router-link>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style scoped>
.v-toolbar {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://wallpapertag.com/wallpaper/full/3/c/4/852442-surreal-desktop-backgrounds-1920x1080-lockscreen.jpg")
      no-repeat center center;
}
.v-toolbar__title {
  color: #fff;
  text-align: center;
  left: 50vw;
  top: 50hw;
}
a {
  text-decoration: none;
}
</style>