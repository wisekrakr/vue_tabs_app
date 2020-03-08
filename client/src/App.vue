<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/register">Register</router-link>|
      <!-- <router-link to="/test">TEST</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=PT+Sans+Narrow&display=swap");
:root {
  --primary-color: #4ac7c2;
  --secondary-color: rgb(90, 82, 82);
  --orange-color: #ff6a05;
  --yellow-color: #f4b02f;
  --green-color: #197a64;
  --turqoise-color: #21bda9;
  --aqua-color: #7bf2bf;
  --light-color: rgb(202, 200, 200);
  --background-opacity: rgba(0, 0, 0, 0.7);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  overflow-x: hidden;
  font-family: "PT Sans Narrow", sans-serif;
  background: var(--light-color, 6);
}

#app {
  font-family: "PT Sans Narrow", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: var(--primary-color);
}

.btn {
  border: 0;
  margin-bottom: 0.3rem;
  color: #fff;
}
.btn:hover {
  transition: all 0.75s ease-out;
  background: var(--secondary-color);
  color: var(--primary-color);
  cursor: pointer;
}

.large-btn {
  background-color: var(--primary-color);
  border-width: large;
  border-radius: 1rem;
  padding: 0.9rem 1.5rem;
  white-space: normal;
}

.med-btn {
  background-color: var(--primary-color);
  border-width: medium;
  border-radius: 1rem;
  padding: 0.6rem 1.1rem;
}

.small-btn {
  background-color: var(--primary-color);
  border-width: medium;
  border-radius: 1rem;
  padding: 0.2rem 0.45rem;
}
</style>
