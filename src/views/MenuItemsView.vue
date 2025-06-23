<!-- src/views/MenuItemsView.vue -->
<template>
  <div class="menu-page">
    <h1>📋 Menu Items</h1>

    <form class="menu-form" @submit.prevent="addItem">
      <input v-model="name" type="text" placeholder="Item Name" required />
      <input v-model="price" type="number" min="1" placeholder="Price (₹)" required />
      <button type="submit">Add Item</button>
    </form>

    <table class="menu-table" v-if="menuItems.length">
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in menuItems" :key="index">
          <td>{{ item.name }}</td>
          <td>₹{{ item.price }}</td>
          <td><button @click="removeItem(index)">Delete</button></td>
        </tr>
      </tbody>
    </table>

    <p v-else class="no-items">No menu items added yet.</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface MenuItem {
  name: string
  price: number
}

const name = ref('')
const price = ref(0)
const menuItems = ref<MenuItem[]>([])

function addItem() {
  menuItems.value.push({ name: name.value, price: price.value })
  name.value = ''
  price.value = 0
}

function removeItem(index: number) {
  menuItems.value.splice(index, 1)
}
</script>

<style scoped>
.menu-page {
  padding: 2rem;
  max-width: 900px;
  margin: auto;
  color: #2c3e50;
}
h1 {
  text-align: center;
  margin-bottom: 2rem;
}
.menu-form {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
}
.menu-form input {
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
}
.menu-form button {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background-color: #2c3e50;
  color: white;
  border: none;
  cursor: pointer;
}
.menu-form button:hover {
  background-color: #1a242f;
}
.menu-table {
  width: 100%;
  border-collapse: collapse;
}
.menu-table th,
.menu-table td {
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}
.menu-table th {
  background-color: #f0f0f0;
}
.menu-table button {
  background-color: crimson;
  color: white;
  border: none;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}
.menu-table button:hover {
  background-color: darkred;
}
.no-items {
  text-align: center;
  color: gray;
  font-style: italic;
}
</style>
