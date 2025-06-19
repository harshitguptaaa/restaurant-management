<template>
  <div>
    <h1>Welcome to the Restaurant Management System</h1>
    <p>Please sign up or log in to continue.</p>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Home-vue',
  data() {
    return {
      message: 'Welcome to the Restaurant Management System',
    }
  },
  mounted() {
    console.log(this.message)
  },
}
</script>
