<!-- src/views/ReservationsView.vue -->
<template>
  <div class="reservations-page">
    <h1>📅 Table Reservations</h1>

    <form class="reservation-form" @submit.prevent="addReservation">
      <input v-model="name" type="text" placeholder="Customer Name" required />
      <input v-model="date" type="date" required />
      <input v-model="time" type="time" required />
      <input v-model="people" type="number" min="1" placeholder="No. of People" required />
      <button type="submit">Add Reservation</button>
    </form>

    <table class="reservations-table" v-if="reservations.length">
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Time</th>
          <th>People</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(res, index) in reservations" :key="index">
          <td>{{ res.name }}</td>
          <td>{{ res.date }}</td>
          <td>{{ res.time }}</td>
          <td>{{ res.people }}</td>
          <td><button @click="cancelReservation(index)">Cancel</button></td>
        </tr>
      </tbody>
    </table>

    <p v-else class="no-res">No reservations yet.</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Reservation {
  name: string
  date: string
  time: string
  people: number
}

const name = ref('')
const date = ref('')
const time = ref('')
const people = ref(1)
const reservations = ref<Reservation[]>([])

function addReservation() {
  reservations.value.push({
    name: name.value,
    date: date.value,
    time: time.value,
    people: people.value,
  })
  // Clear form
  name.value = ''
  date.value = ''
  time.value = ''
  people.value = 1
}

function cancelReservation(index: number) {
  reservations.value.splice(index, 1)
}
</script>

<style scoped>
.reservations-page {
  padding: 2rem;
  max-width: 900px;
  margin: auto;
  color: #2c3e50;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.reservation-form {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.reservation-form input {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.reservation-form button {
  background-color: #2c3e50;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  border-radius: 6px;
}
.reservation-form button:hover {
  background-color: #1a242f;
}

.reservations-table {
  width: 100%;
  border-collapse: collapse;
}

.reservations-table th,
.reservations-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

.reservations-table th {
  background-color: #f0f0f0;
}

.reservations-table button {
  background-color: crimson;
  color: white;
  border: none;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}
.reservations-table button:hover {
  background-color: darkred;
}

.no-res {
  text-align: center;
  color: gray;
  font-style: italic;
}
</style>
