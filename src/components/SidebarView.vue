<template>
  <div class="side-bar">
    <div class="sidebar-header">
      <button class="toggle-btn" @click="$emit('close')">☰</button>
      <h2>🍽️ RMS</h2>
    </div>
    <ul>
      <li><router-link to="/home">Dashboard</router-link></li>
      <li><router-link to="/orders">Manage Orders</router-link></li>
      <li><router-link to="/reservations">Table Reservations</router-link></li>
      <li><router-link to="/menu">Menu Items</router-link></li>
      <li><router-link to="/staff">Staff Management</router-link></li>
      <li><router-link to="/login">Logout</router-link></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineEmits(['close'])
</script>

<style scoped>
.side-bar {
  width: 220px;
  height: 100vh;
  background-color: #2c3e50;
  padding: 1rem;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}

.sidebar-header {
  display: flex;
  align-items: center;
  gap: 0;
}

.sidebar-header h2 {
  font-size: 1.5rem;
  margin: 0;
  color: #ecf0f1;
}

.toggle-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
}

.toggle-btn:hover {
  color: #ddd;
}

.side-bar ul {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
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
