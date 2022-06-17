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
            <div class="breadcrumb-item">
                <router-link to="/matakuliah">
                    <span >List Jurusan</span>
                </router-link>
            </div>               
        </div>   
  </div>  
       <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <h4>Tabel List Semester</h4>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-striped text-left" id="table-2">
                        <thead>
                          <tr>                           
                            <th>#</th>
                            <th>Kelas</th>                           
                            <th>Semester</th>                           
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(semesters,index) in semester" :key="index">                           
                            
                            <td>{{ index + 1}}</td> 
                            <td>{{ semesters.KELAS}}</td>
                            <td>{{ semesters.SEMESTER}}</td>                            
                            <td>                              
                               <router-link :to="{ name: 'pembebananD4.listSemester.pembenanan', params:{ id_semester:semesters.SEMESTER , id_jurusan : id_jurusan,id_kelas:semesters.KELAS , id_prodi : id_prodi }} " >
                                <span class="btn btn-primary btn-sm">List Pembebanan</span>
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
  name: 'semester',  
   data(){
    return {
      semester : [],
      id_jurusan : this.$route.params.id_jurusan,  
      id_prodi : this.$route.params.id_prodi,  
      token : '' 

    }
  },
  mounted() {
    this.token = this.$cookies.get('token'); 

      if (!this.token) {
        this.$router.push(`/login`)
      }

    this.getSemester();
  },
  methods: {    
    async getSemester(){
      let response = await axios.get(`https://project.mis.pens.ac.id/mis129/API/DataMaster/semester.php?function=getSemester&jurusan_id=${  this.$route.params.id_jurusan}&prodi_id=${this.$route.params.id_prodi}`)
      if (response.status == 200) {

          this.semester = response.data.data            
                    
      } else {

        console.log('gagal');        

      }   

    }
  },  

}
</script>
