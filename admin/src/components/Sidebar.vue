<template>
  <div class="sidebar text-left">
       <aside id="sidebar-wrapper">
          <div class="sidebar-brand">
            <a href="Dashboard.html">Pembebanan MK</a>
          </div>
          <div class="sidebar-brand sidebar-brand-sm">
             <router-link to="/">
                  MK
            </router-link>
          </div>
          <ul class="sidebar-menu">
              <li class="menu-header">Dashboard</li>
              <li>
                <router-link  class="nav-link" to="/">
                    <i class="fas fa-fire"></i> <span>Dashboard</span>
                </router-link>
              </li>
            
              <li class="menu-header">Data Pembebanan</li>
              <li class="nav-item dropdown">
                <a href="#" class="nav-link has-dropdown" data-toggle="dropdown"><i class="fas fa-columns"></i> <span>Pembebanan MK</span></a>
                <ul class="dropdown-menu">
                  <li><a class="nav-link" href="DatabebanD3/DataBebanD3.html">Data Beban D3</a></li>
                  <li><a class="nav-link" href="DatabebanD4/DataBebanD4.html">Data Beban D4</a></li>
                  <li><a class="nav-link" href="BebanDosen.html">Beban Perdosen</a></li>
                </ul>
              </li>
             
              <li class="menu-header">Data Master</li>
              <li class="nav-item dropdown">
                <a href="#" class="nav-link has-dropdown"><i class="fas fa-th-large"></i> <span>Data Dosen</span></a>
                <ul class="dropdown-menu text-left">
                  <li>                                                               
                      <router-link class="nav-link" to="/dosen">Data Dosen</router-link>                      
                  </li>
                  <li>
                    <router-link class="nav-link" to="/dosen">Data Kelompok Bidang</router-link>                                          
                  </li>
                  <li>
                    <router-link class="nav-link" to="/departemen">Departemen</router-link>                                           
                  </li>              
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a href="#" class="nav-link has-dropdown"><i class="far fa-file-alt"></i> <span>Data Mata Kuliah</span></a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link class="nav-link" to="/matakuliah">Mata Kuliah</router-link>                                         
                  </li>
                  <li>
                    <router-link class="nav-link" to="/kelas">Kelas</router-link>                                          
                  </li>
                  <li>
                    <router-link class="nav-link" to="/jurusan">Jurusan</router-link>                                        
                  </li>
                  <!-- <li>
                    <router-link to="/matakuliah">
                      <a class="nav-link">Mata Kuliah</a>
                    </router-link>
                  </li> -->                  
                </ul>
              </li>
            </ul>           
        </aside>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>

