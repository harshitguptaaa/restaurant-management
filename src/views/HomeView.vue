<template>
  <div class="home-layout">
    <!-- Sidebar -->
    <SidebarView v-if="isSidebarOpen" @close="isSidebarOpen = false" />

    <!-- Main content -->
    <div class="home-content" :class="{ shifted: isSidebarOpen }">
      <!-- Toggle button (☰) for opening sidebar -->
      <button class="hamburger-btn" v-if="!isSidebarOpen" @click="isSidebarOpen = true">☰</button>

      <h1>🍽️ Restaurant Management System</h1>

      <div class="nav-cards">
        <div class="card"><router-link to="/orders">Manage Orders</router-link></div>
        <div class="card"><router-link to="/reservations">Table Reservations</router-link></div>
        <div class="card"><router-link to="/menu">Menu Items</router-link></div>
        <div class="card"><router-link to="/staff">Staff Management</router-link></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SidebarView from '@/components/SidebarView.vue'

const isSidebarOpen = ref(true)
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 2rem;
  color: #2c3e50;
  white-space: nowrap;
}

.home-layout {
  display: flex;
  min-height: 100vh;
}

.home-content {
  flex: 1;
  padding: 2rem;
  margin-left: 0;
  transition: margin-left 0.3s ease;
}

.home-content.shifted {
  margin-left: 220px;
}

.hamburger-btn {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 100;
  background: #2c3e50;
  color: white;
  font-size: 1.5rem;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}
.hamburger-btn:hover {
  background: #1a242f;
}

.nav-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
}

.card {
  width: 200px;
  background-color: #f8f8f8;
  padding: 1rem;
  border-radius: 1px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  cursor: pointer;
  text-align: left;
}
.card a {
  color: #cc396a;
  text-decoration: none;
  font-weight: bold;
}

.card a:hover {
  text-decoration: underline;
}

.card:hover {
  transform: translateY(-4px);
  background-color: #e6f4ff;
}
</style>
