import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/index',
      name: 'index',
      component: () => import('@/components/home/Home.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/components/user/User.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/components/search/Search.vue')
    },
    {
      path: '/like',
      name: 'like',
      component: () => import('@/components/like/Like.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('@/components/create/Create.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/auth/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/components/auth/Register.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    }
  ]
})

export default router
