<template>
  <div class="side-bar">
    <h2>🍽️ RMS</h2>
    <ul>
      <li><router-link to="/home">Dashboard</router-link></li>
      <li><a href="#">Manage Orders</a></li>
      <li><a href="#">Table Reservations</a></li>
      <li><a href="#">Menu Items</a></li>
      <li><a href="#">Staff Management</a></li>
      <li><router-link to="/login">Logout</router-link></li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.side-bar {
  width: 220px;
  height: 100vh;
  background-color: #2c3e50;
  padding: 2rem 1rem;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
}

.side-bar h2 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

.side-bar ul {
  list-style: none;
  padding: 0;
}

.side-bar ul li {
  margin: 1rem 0;
}

.side-bar a {
  color: #ecf0f1;
  text-decoration: none;
}

.side-bar a:hover {
  text-decoration: underline;
}
</style>
