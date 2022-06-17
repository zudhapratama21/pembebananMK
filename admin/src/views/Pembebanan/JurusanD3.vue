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
                            <h4>Tabel Daftar Jurusan</h4>
                        </div>                       
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
                                <td>{{index + 1}}</td>
                                <td>{{jurusans.JURUSAN}}</td>
                                <td>                                        
                                    <router-link :to="{ name: 'pembebananD3.listangkatan', params:{ id_prodi : id_prodi ,id_jurusan:jurusans.NOMOR } }" >
                                      <span class="btn btn-primary btn-sm">List Semester</span>
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
  name: 'setjurusan',
  data(){
      return {
          token:'',
          jurusan : [] ,
          id_prodi : this.$route.params.id_prodi
      }
  },
  mounted(){
      this.token = this.$cookies.get('token'); 

      if (!this.token) {
        this.$router.push(`/login`)
      }

      this.getDataJurusan();

  },
  methods : {
      async getDataJurusan(){
           let config = {

                headers: {
                    'Authorization': 'Bearer ' + this.token
                },
            }

          let response = await axios.get('https://project.mis.pens.ac.id/mis129/API/DataMaster/settting.php?function=listSetJurusan',config)

          if (response.status == 200) {
             this.jurusan = response.data.data                        
          }
      }      
  }
  
}

</script>
