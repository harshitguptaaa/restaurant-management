import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../views/SignUp.vue'
import Login from '@/views/Login.vue'
import HomeView from '@/views/HomeView.vue'
import OrdersView from '@/views/OrdersView.vue'
import ReservationsView from '@/views/ReservationsView.vue'
import StaffView from '@/views/StaffView.vue'
import MenuItemsView from '@/views/MenuItemsView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signup',
      component: SignUp,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrdersView,
    },
    {
      path: '/reservations',
      name: 'reservations',
      component: ReservationsView,
    },
    {
      path: '/staff',
      name: 'staff',
      component: StaffView,
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuItemsView,
    },
  ],
})

export default router
