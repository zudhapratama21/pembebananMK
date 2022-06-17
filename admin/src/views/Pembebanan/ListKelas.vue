<template>
  <div class="dosen"> 
    <div class="section-header">
      <h1>Pembebanan Mata Kuliah</h1>
      <div class="section-header-breadcrumb">
          <div class="breadcrumb-item active">
              <router-link to="/">
                  <span >Dashboard</span>
              </router-link>
          </div>                    
      </div>   
    </div>   
       <div class="row">
              <div class="col-12">
                <div class="card">
                   <div class="card-header d-flex justify-content-between">                   
                        <div>
                            <h4>Tabel Daftar Kelas</h4>
                        </div>                       

                        <router-link :to="{ name: 'pembebananD4.tambahKelas', params:{ id_prodi : id_prodi , id_jurusan : id_jurusan , id_tahunAjaran : id_tahunAjaran} }" >
                              <span class="btn btn-primary btn-sm">
                                  <i class="fas fa-plus"></i> Tambah List Kelas 
                              </span>
                        </router-link>

                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-striped text-left" id="table-2">
                        <thead>
                          <tr>                           
                            <th>#</th>
                            <th>Kelas</th>
                            <th>Semester</th>
                            <th>Angkatan</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody> 

                            <!-- <tr v-for="(thnAjaran,index) in this.tahunAjaran" :key="index">
                                <td>{{index + 1}}</td>
                                <td>{{thnAjaran.THN_AJARAN}}</td>
                                <td>{{thnAjaran.JENIS}}</td>
                                <td>      

                                    <router-link :to="{ name: 'pembebananD4.listangkatan', params:{ id_prodi : id_prodi } }" >
                                        <span class="btn btn-primary btn-sm">List Kelas </span>
                                    </router-link>                                                                                                                        
                                </td>
                            </tr> -->
                            
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: 'setlistkelas',
  data(){
      return {
          token:'',
          tahunAjaran : [] ,
          id_prodi : this.$route.params.id_prodi ,
          id_jurusan : this.$route.params.id_jurusan ,
          id_tahunAjaran : this.$route.params.id_tahunAjaran 
      }
  },
  mounted(){
      this.token = this.$cookies.get('token'); 

      if (!this.token) {
        this.$router.push(`/login`)
      }

      this.getTahunAjaran();

  },
  methods : {
      async getTahunAjaran(){
           let config = {

                headers: {
                    'Authorization': 'Bearer ' + this.token
                },
            }

          let response = await axios.get('https://project.mis.pens.ac.id/mis129/API/DataMaster/tahunajaran.php?function=getTahunAjaran',config)

          if (response.status == 200) {
             this.tahunAjaran = response.data.data
             console.log(this.tahunAjaran)                        
          }

      }      
  }
  
}

</script>
