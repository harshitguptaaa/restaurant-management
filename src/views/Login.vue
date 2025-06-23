<template>
  <h1>Welcome to the Restaurant Management System</h1>
  <img src="@/assets/logo.avif" alt="Logo" class="logo" />
  <div class="register">
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button type="submit" v-on:click="login">Login</button>
    <p>
      Don't have an account?
      <router-link to="/">Sign Up</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import axios from 'axios'

export default {
  name: 'Login-Page',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      try {
        const result = await axios.get(
          `http://localhost:3000/users?email=${this.email}&password=${this.password}`,
        )
        if (result.data.length > 0) {
          alert('Login successful!')
          localStorage.setItem('user-info', JSON.stringify(result.data[0]))
          this.$router.push('/home') // redirect after login
        } else {
          alert('Invalid email or password')
        }
      } catch (err) {
        console.error('Login error:', err)
        alert('Login failed')
      }
    },
  },
}
</script>

<style scoped>
h1 {
  color: whitesmoke;
  font-size: 2em;
  text-align: center;
}
.logo {
  width: 100px;
  height: auto;
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 20px;
}
.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
  border: 2px solid red;
}
.register button {
  width: 300px;
  height: 40px;
  display: block;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
  background-color: red;
  color: white;
  cursor: pointer;
}
.register button:hover {
  background-color: darkred;
}
.register p {
  text-align: center;
  color: whitesmoke;
}
.register p a {
  color: red;
  text-decoration: none;
}
.register p a:hover {
  text-decoration: underline;
}
</style>
