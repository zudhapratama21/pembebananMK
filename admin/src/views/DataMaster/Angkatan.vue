<template>
  <div class="dosen">    
    <div class="section-header">
        <h1>Data Mata Kuliah</h1>
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
              <div class="card-header">
                <h4>Tabel Angkatan</h4>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-striped text-left" id="table-2">
                    <thead>
                      <tr>                           
                        <th>#</th>
                        <th>Angkatan</th>                           
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(angkatans,index) in angkatan" :key="index">                           
                        <td>{{ index + 1}}</td> 
                        <td>{{ angkatans.ANGKATAN}}</td>                            
                        <td>
                          <router-link :to="{ name: 'matakuliah.listsemester', params:{ id_jurusan: id_jurusan , id_prodi : id_prodi , id_angkatan : angkatans.ANGKATAN} } ">
                              <span class="btn btn-primary btn-sm mr-2">Detail Mata Kuliah</span>
                          </router-link>                        
                        </td>
                      </tr>                          
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
  name: 'matakuliah',  
   data(){
    return {
      angkatan : [],  
      token : '',
      id_jurusan : this.$route.params.id_jurusan,
      id_prodi :this.$route.params.id_prodi,
    }
  },
  mounted() {

  this.token = this.$cookies.get('token'); 
      if (!this.token) {
        this.$router.push(`/login`)
      }
    this.getAngkatan();

  },
  methods: {    
    async getAngkatan(){   
        let config = {
                headers: {
                    'Authorization': 'Bearer ' + this.token
                },
            }    

      let response = await axios.get('https://project.mis.pens.ac.id/mis129/API/DataMaster/Angkatan.php?function=getAngkatan',config)

      if (response.status == 200) {
          this.angkatan = response.data.data  
          
      } else {
        console.log('gagal');        
      }   

    }
  },  

}
</script>
