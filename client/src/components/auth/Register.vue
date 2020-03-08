<template>
  <div>
    <h1>Register as User</h1>

    <input type="email" v-model="email" name="email" placeholder="email" />
    <br />
    <input type="password" v-model="password" name="password" placeholder="password" />
    <br />
    <button @click="registerUser">Register</button>
  </div>
</template>

<script>
import AuthenticationService from "../../services/AuthenticationService";
export default {
  name: "Register",
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
    async registerUser() {
      const res = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
      console.log(res.data);
    }
  }
};
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
