<template>
  <img src="@/assets/logo.avif" alt="Logo" class="logo" />
  <h1>Sign Up</h1>
  <div class="register">
    <input v-model="username" type="text" placeholder="Username" />
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button type="submit" v-on:click="signUp">Sign Up</button>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
export default {
  name: 'SignUp',
  data() {
    return {
      username: '',
      email: '',
      password: '',
    }
  },
  methods: {
    async signUp() {
      const result = await axios.post('http://localhost:3000/users', {
        name: this.username,
        email: this.email,
        password: this.password,
      })
      console.warn(result)
      if (result.status === 201) {
        alert('User created successfully!')
        localStorage.setItem('user-info', JSON.stringify(result.data))
      } else {
        alert('Error creating user')
      }
    },
  },
}
</script>

<style>
.logo {
  width: 100px;
  height: auto;
  display: block;
  margin: 0 auto;
}
h1 {
  color: whitesmoke;
  font-size: 2em;
  text-align: center;
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
</style>
