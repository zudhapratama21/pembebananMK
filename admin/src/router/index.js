import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../components/layout/dashboard.vue';

Vue.use(VueRouter)


const routes = [
  { 
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../components/layout/login.vue')    
  }, 
  {
    path: '/',    
    component: Dashboard,
    children:[ 
        {
          path: '',
          name: 'home',    
          component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')    
        },     
        {
          path: 'matakuliah',
          name: 'MataKuliah',    
          component: () => import(/* webpackChunkName: "about" */ '../views/DataMaster/MataKuliah.vue')    
        },
        {
          path: 'dosen',
          name: 'Dosen',    
          component: () => import(/* webpackChunkName: "about" */ '../views/DataMaster/Dosen.vue')
        },
        {
          path: 'dosen/:id/detail',
          name: 'dosen.detail',    
          component: () => import(/* webpackChunkName: "about" */ '../views/DataMaster/DetailDosen.vue')
        },
        {
          path: 'kelompokbidang',
          name: 'kelompokbidang',    
          component: () => import(/* webpackChunkName: "about" */ '../views/KelompokBidang/index.vue')
        },
        {
          path: 'kelompokbidang/create',
          name: 'kelompokbidang.create ',    
          component: () => import(/* webpackChunkName: "about" */ '../views/KelompokBidang/createKelBidang.vue')
        },
        {
          path: 'kelompokbidang/listdosen/:id/detail',
          name: 'kelompokbidang.listdosen.edit',    
          component: () => import(/* webpackChunkName: "about" */ '../views/KelompokBidang/EditKelBidang.vue')
        },
        {
          path: 'kelompokbidang/listdosen/:id',
          name: 'kelompokbidang.listdosen',    
          component: () => import(/* webpackChunkName: "about" */ '../views/KelompokBidang/dosenbidang.vue')
        },
        {
          path: 'kelompokbidang/listdosen/:id/create',
          name: 'kelompokbidang.listdosen.create',    
          component: () => import(/* webpackChunkName: "about" */ '../views/KelompokBidang/createlistdosen.vue')
        },
        {
          path: 'matakuliah/listangkatan/:id_jurusan/:id_prodi/angkatan',
          name: 'matakuliah.angkatan',    
          component: () => import(/* webpackChunkName: "about" */ '../views/DataMaster/Angkatan.vue')
        },
        {
          path: 'matakuliah/listangkatan/:id_jurusan/:id_prodi/angkatan/:id_angkatan',
          name: 'matakuliah.listsemester',    
          component: () => import(/* webpackChunkName: "about" */ '../views/DataMaster/listSemester.vue')
        },
        {
          path: 'matakuliah/listangkatan/:id_jurusan/:id_prodi/angkatan/:id_angkatan/:id_semester/listMatakuliah/:kelas',
          name: 'matakuliah.listmatakuliah',    
          component: () => import(/* webpackChunkName: "about" */ '../views/DataMaster/listMataKuliah.vue')
        },
        {
          path: 'jurusan',
          name: 'Jurusan',    
          component: () => import(/* webpackChunkName: "about" */ '../views/DataMaster/Jurusan.vue')
        },
        {
          path: 'kelas',
          name: 'Kelas',    
          component: () => import(/* webpackChunkName: "about" */ '../views/DataMaster/Kelas.vue')
        },    
        {
          path: 'setjurusan',
          name: 'setjurusan',    
          component: () => import(/* webpackChunkName: "about" */ '../views/Setting/setJurusan.vue')
        },
        {
          path: 'setjurusan/create',
          name: 'setjurusan.create',    
          component: () => import(/* webpackChunkName: "about" */ '../views/Setting/addSetJurusan.vue')
        },
        {
          path: 'setsks',
          name: 'setsks',    
          component: () => import(/* webpackChunkName: "about" */ '../views/Setting/setSKS.vue')
        },
        {
          path: 'setsks/create',
          name: 'setsks.create',    
          component: () => import(/* webpackChunkName: "about" */ '../views/Setting/createSetSKS.vue')
        },
        {
          path: 'setsks/:id/edit',
          name: 'setsks.edit',    
          component: () => import(/* webpackChunkName: "about" */ '../views/Setting/editSetSKS.vue')
        },
        // Pembebanan D3
        {
          path: 'pembebananD3/:id_prodi',
          name: 'pembebananD3',    
          component: () => import(/* webpackChunkName: "about" */ '../views/Pembebanan/JurusanD3.vue')
        },
        {
          path: 'pembebananD3/:id_prodi/:id_jurusan/listangkatan',
          name: 'pembebananD3.listangkatan',    
          component: () => import(/* webpackChunkName: "about" */ '../views/Pembebanan/AngkatanD3.vue')
        }, 
        {
          path: 'pembebananD3/:id_prodi/:id_jurusan/listangkatan/:id_angkatan/listsemester',
          name: 'pembebananD3.listsemester',    
          component: () => import(/* webpackChunkName: "about" */ '../views/Pembebanan/SemesterD3.vue')
        }, 
        {
          path: 'pembebananD3/:id_prodi/:id_jurusan/listSemester/:id_kelas/:id_semester/pembenanan',
          name: 'pembebananD3.listSemester.pembenanan',    
          component: () => import(/* webpackChunkName: "about" */ '../views/Pembebanan/D3/index.vue')
        },
        {
          path: 'pembebananD3/:id_prodi/:id_jurusan/listSemester/:id_kelas/:id_semester/pembenanan/create',
          name: 'pembebananD3.listSemester.pembenanan.create',    
          component: () => import(/* webpackChunkName: "about" */ '../views/Pembebanan/D3/create.vue')
        },
        // Pembebanan D4
        {
          path: 'pembebananD4/:id_prodi',
          name: 'pembebanan',    
          component: () => import(/* webpackChunkName: "about" */ '../views/Pembebanan/JurusanD4.vue')
        },  
        {
          path: 'pembebananD4/:id_prodi/:id_jurusan/listtahun',
          name: 'pembebananD4.listtahun',    
          component: () => import(/* webpackChunkName: "about" */ '../views/Pembebanan/TahunAjaran.vue')
        } ,  
        {
          path: 'pembebananD4/:id_prodi/:id_jurusan/listtahun/create',
          name: 'pembebananD4.tambahtahun',    
          component: () => import(/* webpackChunkName: "about" */ '../views/Pembebanan/TambahTahunAjaran.vue')
        } ,     
        {
          path: 'pembebananD4/:id_prodi/:id_jurusan/listKelas/:id_tahunAjaran',
          name: 'pembebananD4.listkelas',    
          component: () => import(/* webpackChunkName: "about" */ '../views/Pembebanan/ListKelas.vue')
        },
        {
          path: 'pembebananD4/:id_prodi/:id_jurusan/listKelas/:id_tahunAjaran/create',
          name: 'pembebananD4.tambahKelas',    
          component: () => import(/* webpackChunkName: "about" */ '../views/Pembebanan/TambahKelas.vue')
        },
        {
          path: 'pembebananD4/:id_prodi/:id_jurusan/listSemester/:id_kelas/:id_semester/pembenanan',
          name: 'pembebananD4.listSemester.pembenanan',    
          component: () => import(/* webpackChunkName: "about" */ '../views/Pembebanan/D3/index.vue')
        }, 
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
