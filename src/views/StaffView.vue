<!-- src/views/StaffView.vue -->
<template>
  <div class="staff-page">
    <h1>👨‍🍳 Staff Management</h1>

    <form class="staff-form" @submit.prevent="addStaff">
      <input v-model="name" type="text" placeholder="Name" required />
      <select v-model="role" required>
        <option disabled value="">Select Role</option>
        <option>Chef</option>
        <option>Waiter</option>
        <option>Manager</option>
        <option>Cleaner</option>
      </select>
      <button type="submit">Add Staff</button>
    </form>

    <table class="staff-table" v-if="staffList.length">
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(staff, index) in staffList" :key="index">
          <td>{{ staff.name }}</td>
          <td>{{ staff.role }}</td>
          <td><button @click="removeStaff(index)">Remove</button></td>
        </tr>
      </tbody>
    </table>

    <p v-else class="no-staff">No staff added yet.</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Staff {
  name: string
  role: string
}

const name = ref('')
const role = ref('')
const staffList = ref<Staff[]>([])

function addStaff() {
  staffList.value.push({ name: name.value, role: role.value })
  name.value = ''
  role.value = ''
}

function removeStaff(index: number) {
  staffList.value.splice(index, 1)
}
</script>

<style scoped>
.staff-page {
  padding: 2rem;
  max-width: 900px;
  margin: auto;
  color: #2c3e50;
}
h1 {
  text-align: center;
  margin-bottom: 2rem;
}
.staff-form {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
}
.staff-form input,
.staff-form select {
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
}
.staff-form button {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background-color: #2c3e50;
  color: white;
  border: none;
  cursor: pointer;
}
.staff-form button:hover {
  background-color: #1a242f;
}
.staff-table {
  width: 100%;
  border-collapse: collapse;
}
.staff-table th,
.staff-table td {
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}
.staff-table th {
  background-color: #f0f0f0;
}
.staff-table button {
  background-color: crimson;
  color: white;
  border: none;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}
.staff-table button:hover {
  background-color: darkred;
}
.no-staff {
  text-align: center;
  color: gray;
  font-style: italic;
}
</style>
