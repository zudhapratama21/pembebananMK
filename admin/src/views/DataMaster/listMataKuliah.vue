<template>
  <div class="dosen">    
     <div class="section-header">
        <h1>List Mata Kuliah</h1>
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
            
              <div class="breadcrumb-item">
                <router-link :to="{ name:'matakuliah.listsemester', params:{ id: this.$route.params.id_semester} } ">
                    <span >List Semester</span>
                </router-link>
            </div> 
        </div>   
  </div>  
       <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <h4>Tabel List matakuliah</h4>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-striped text-left" id="table-2">
                        <thead>
                          <tr>                           
                            <th>#</th>                            
                            <th>KODE</th>     
                            <th>MATA KULIAH</th>                           
                            <th>JAM</th>                                             
                            <th>SKS</th>
                            <th>MK WAJIB</th>
                            <th>MK GROUP</th>
                            <th>TAHUN</th>
                            
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(matkul,index) in matakuliah" :key="index">                           
                            <td>{{ index + 1}}</td> 
                            <td>{{ matkul.KODE}}</td>                            
                            <td>{{ matkul.MATAKULIAH}}</td>                            
                            <td>{{ matkul.JAM}}</td>                            
                            <td>{{ matkul.SKS}}</td>                            
                            <td>{{ matkul.MK_WAJIB}}</td>                            
                            <td v-if="matkul.MK_GROUP == null">Kosong</td>                            
                            <td v-else>{{matkul.MK_GROUP}}</td>                            
                            <td >{{ matkul.TAHUN}}</td>                                                                                   
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
      matakuliah : [],     
      id_semester : this.$route.params.id_semester,
      id_jurusan : this.$route.params.id_jurusan,
      id_prodi : this.$route.params.id_prodi,
      kelas : this.$route.params.kelas,
      id_angkatan : this.$route.params.id_angkatan,
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
      let response = await axios.get(`https://project.mis.pens.ac.id/mis129/API/DataMaster/matakuliah.php?function=getMataKuliah&jurusan_id=${this.$route.params.id_jurusan}&semester_id=${this.$route.params.id_semester}&kelas=${this.$route.params.kelas}&prodi_id=${this.$route.params.id_prodi}&id_angkatan=${this.id_angkatan}`)

      if (response.status == 200) {

          this.matakuliah = response.data.data            
          console.log(this.matakuliah);

      } else {
        console.log('gagal');        
      }           

    }
  },  

}
</script>
