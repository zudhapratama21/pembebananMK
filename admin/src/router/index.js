import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/matakuliah',
    name: 'MataKuliah',    
    component: () => import(/* webpackChunkName: "about" */ '../views/DataMaster/MataKuliah.vue')
  },
  {
    path: '/dosen',
    name: 'Dosen',    
    component: () => import(/* webpackChunkName: "about" */ '../views/DataMaster/Dosen.vue')
  },
  {
    path: '/jurusan',
    name: 'Jurusan',    
    component: () => import(/* webpackChunkName: "about" */ '../views/DataMaster/Jurusan.vue')
  },
  {
    path: '/kelas',
    name: 'Kelas',    
    component: () => import(/* webpackChunkName: "about" */ '../views/DataMaster/Kelas.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
