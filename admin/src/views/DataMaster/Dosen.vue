<template>
  <div class="dosen"> 
    <div class="section-header">
      <h1>Data Dosen</h1>
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
                    <h4>Tabel Daftar Dosen</h4>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-striped text-left" id="table-2">
                        <thead>
                          <tr>                           
                            <th>#</th>
                            <th>NIP</th>
                            <th>Nama</th>
                            <th>Jurusan</th>                            
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(dosens,index) in dosen" :key="index">
                            <td>{{ index + 1 }}</td>                           
                            <td>{{ dosens.NIP }}</td>
                            <td> 
                              {{
                                dosens.GELAR_DPN 
                              }}
                              {{ dosens.NAMA }}
                              {{
                                dosens.GELAR_BLK
                              }}
                            </td>
                            <td>{{ dosens.JURUSAN }}</td>                            
                            <td>                             
                               <router-link :to="{ name:'dosen.detail', params:{ id: dosens.NOMOR} } ">
                                  <span class="btn btn-primary btn-sm ">Detail Dosen</span>
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
  name: 'Dosen',
  data(){
    return {
      dosen : [],  
      token : ''    
    }
  },
  mounted() {
    this.token = this.$cookies.get('token'); 
      if (!this.token) {
        this.$router.push(`/login`)
      }
    this.getDosen();
  },
  methods: {    
    async getDosen(){       

       let config = {
                headers: {
                    'Authorization': 'Bearer ' + this.token
                },
            }

      let response = await axios.get('https://project.mis.pens.ac.id/mis129/API/DataMaster/dosen.php?function=getDosen',config)

      if (response.status == 200) {
          this.dosen = response.data.data          
      } else {
        console.log('gagal');        
      }   

    }
  },  
}
</script>
