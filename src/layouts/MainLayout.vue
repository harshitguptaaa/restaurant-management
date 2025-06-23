<template>
  <div class="main-layout">
    <SidebarView v-if="isSidebarOpen" @close="isSidebarOpen = false" />

    <div class="page-content" :class="{ shifted: isSidebarOpen }">
      <button class="hamburger-btn" v-if="!isSidebarOpen" @click="isSidebarOpen = true">☰</button>
      <slot />
      <!-- This is where your pages will be rendered -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SidebarView from '@/components/SidebarView.vue'

const isSidebarOpen = ref(true)
</script>

<style scoped>
.main-layout {
  display: flex;
  min-height: 100vh;
}
.page-content {
  flex: 1;
  padding: 2rem;
  transition: margin-left 0.3s ease;
}
.page-content.shifted {
  margin-left: 220px;
}
.hamburger-btn {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 50;
  background: #2c3e50;
  color: white;
  font-size: 1.5rem;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}
.hamburger-btn:hover {
  background-color: #1a242f;
}
</style>
