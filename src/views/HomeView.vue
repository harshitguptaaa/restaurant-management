<template>
  <div class="home-container">
    <SidebarView />
    <h1>🍽️ Restaurant Management System</h1>
    <p>Welcome, {{ username }}!</p>

    <div class="nav-cards">
      <div class="card">Manage Orders</div>
      <div class="card">Table Reservations</div>
      <div class="card">Menu Items</div>
      <div class="card">Staff Management</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SidebarView from '@/components/SidebarView.vue'

// This is just a placeholder, ideally this would come from login or a store
const username = ref('Manager')
</script>

<style scoped>
.home-container {
  max-width: 900px;
  margin: auto;
  padding: 2rem;
  text-align: center;
  color: #333;
}

h1 {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.nav-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.card {
  background-color: #f8f8f8;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  cursor: pointer;
}
.card:hover {
  transform: translateY(-4px);
  background-color: #e6f4ff;
}
</style>
