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
                <h4>Tabel List Jurusan</h4>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-striped text-left" id="table-2">
                    <thead>
                      <tr>                           
                        <th>#</th>
                        <th>Nama Jurusan</th>                           
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(jurusans,index) in jurusan" :key="index">                           
                        <td>{{ index + 1}}</td> 
                        <td>{{ jurusans.JURUSAN}}</td>                            
                        <td>

                          <router-link :to="{ name: 'matakuliah.angkatan', params:{ id_jurusan:jurusans.NOMOR , id_prodi : 3} } ">
                              <span class="btn btn-primary btn-sm mr-2">List Semester D3</span>
                          </router-link>

                          <router-link :to="{ name: 'matakuliah.angkatan', params:{ id_jurusan:jurusans.NOMOR , id_prodi : 4} } ">
                              <span class="btn btn-info btn-sm">List Semester D4</span>
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
      jurusan : [],  
      token : ''    
    }
  },
  mounted() {
  this.token = this.$cookies.get('token'); 
      if (!this.token) {
        this.$router.push(`/login`)
      }
    this.getMataKuliah();
  },
  methods: {    
    async getMataKuliah(){   
        let config = {
                headers: {
                    'Authorization': 'Bearer ' + this.token
                },
            }    
      let response = await axios.get('https://project.mis.pens.ac.id/mis129/API/DataMaster/matakuliah.php?function=getJurusanUser',config)
      if (response.status == 200) {
          this.jurusan = response.data.data  
          
      } else {
        console.log('gagal');        
      }   

    }
  },  

}
</script>
