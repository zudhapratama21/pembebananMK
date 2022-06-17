<template>
  <div class="dosen"> 
    <div class="section-header">
    <h1>Data Kelas</h1>
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
                    <h4>Tabel Daftar Kelas</h4>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-striped text-left" id="table-2">
                        <thead>
                          <tr>                           
                            <th>#</th>                            
                            <th>Program</th>                           
                            <th>Nama Kelas</th>
                            <th>Program Transkrip</th>
                            <th>Paralel</th>
                            <th>Jurusan</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(kelass,index) in kelas" :key="index">
                            <td>{{ index + 1 }}</td>                           
                            <td>{{ kelass.PROGRAM }}</td>                           
                            <td>{{ kelass.KODE }}</td>                           
                            <td>{{ kelass.PROGRAM_TRANSKRIP }}</td>                           
                            <td>{{ kelass.PARAREL }}</td> 
                            <td>{{ kelass.JURUSAN }}</td>                             
                            <td><a href="#" class="btn btn-secondary">Detail</a></td>
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
  name: 'Kelas',
  data(){
    return {
      kelas : [],  
      token : ''    
    }
  },
  mounted() {
    this.token = this.$cookies.get('token'); 
      if (!this.token) {
        this.$router.push(`/login`)
      }
    this.getKelas();
  },
  methods: {    
    async getKelas(){     
        let config = {
                headers: {
                    'Authorization': 'Bearer ' + this.token
                },
            }  

      let response = await axios.get('https://project.mis.pens.ac.id/mis129/API/DataMaster/kelas.php?function=getKelas',config)

      if (response.status == 200) {
          this.kelas = response.data.data          
      } else {
        console.log('gagal');        
      }   

    }
  },  
}
</script>
