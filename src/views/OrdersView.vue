<!-- src/views/OrdersView.vue -->
<template>
  <div class="orders-page">
    <h1>📦 Manage Orders</h1>

    <table class="orders-table">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer</th>
          <th>Items</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>#{{ order.id }}</td>
          <td>{{ order.customer }}</td>
          <td>{{ order.items.join(', ') }}</td>
          <td>
            <span :class="['status', order.status.toLowerCase()]">
              {{ order.status }}
            </span>
          </td>
          <td>
            <button @click="updateStatus(order.id)">Mark as Delivered</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Order {
  id: number
  customer: string
  items: string[]
  status: 'Pending' | 'Delivered'
}

const orders = ref<Order[]>([
  {
    id: 101,
    customer: 'Alice',
    items: ['Pizza', 'Coke'],
    status: 'Pending',
  },
  {
    id: 102,
    customer: 'Bob',
    items: ['Burger', 'Fries'],
    status: 'Delivered',
  },
])

function updateStatus(orderId: number) {
  const order = orders.value.find((o) => o.id === orderId)
  if (order && order.status === 'Pending') {
    order.status = 'Delivered'
  }
}
</script>

<style scoped>
.orders-page {
  padding: 2rem;
  max-width: 900px;
  margin: auto;
  color: #2c3e50;
}

.orders-page h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.orders-table {
  width: 100%;
  border-collapse: collapse;
}

.orders-table th,
.orders-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

.orders-table th {
  background-color: #f0f0f0;
}

button {
  background-color: #2c3e50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 6px;
}
button:hover {
  background-color: #1a242f;
}

.status {
  font-weight: bold;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
}

.status.pending {
  color: orange;
}

.status.delivered {
  color: green;
}
</style>
