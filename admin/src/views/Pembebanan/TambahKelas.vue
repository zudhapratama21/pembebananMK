<template>
  <div class="tambahkelompokbidang">  
    <div class="section-header">
    <h1>Data Pembebanan</h1>
     <div class="section-header-breadcrumb">
        <div class="breadcrumb-item active">
             <router-link to="/">
                <span >Dashboard</span>
            </router-link>
        </div>
        <div class="breadcrumb-item">
             <router-link to="/pembebananD4/3">
                <span >Pembebanan Mata Kuliah</span>
            </router-link>
        </div>        
    </div>
   
  </div>  
       <div class="row" >
              <div class="col-12 text-left ">
                    <div class="card">                  
                        <div class="card-header d-flex justify-content-between">                   
                          <div>
                              <h4>Tambah Data Kelas dan Angkatan</h4>
                          </div>
                         
                       </div>
                        
                    <div class="card-body text-left" >
                        <form @submit.prevent="store()" >
                            <div class="row">
                                <div class="col-md-4">
                                        <div class="form-group">
                                            <label for=""> Kelas  </label>
                                            <select class="form-control" v-model="formData.kelas">                                        
                                                   <option v-for="(semesters,index) in semester" :key="index"  :value="semesters.KELAS"> {{semesters.KELAS}}</option>  
                                            </select>
                                         </div>
                                </div>
                                <div class="col-md-4">
                                         <div class="form-group">
                                            <label for=""> Semester </label>
                                            <select class="form-control" v-model="formData.semester">                                       
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                            </select>
                                        </div>
                                </div>
                                <div class="col-md-4">
                                         <div class="form-group">
                                            <label for=""> Angkatan </label>
                                            <select class="form-control" v-model="formData.angkatan">                                                                                                                           
                                                   <option v-for="(angkatans,index) in angkatan" :key="index"  :value="angkatans.ANGKATAN"> {{angkatans.ANGKATAN}}</option>  
                                            </select>
                                        </div>
                                </div>
                            </div>
                            
                           
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-block">Submit</button>                                
                            </div>
                        </form>
                    </div>
                </div>
              </div>
               <template v-if="loading">
                    <div id="app">
                      <loader object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="2" bg="#343a40" objectbg="#999793" opacity="80" name="circular"></loader>
                    </div>            
               </template>
               
        </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: 'tambahkelompokbidang',
  data(){
    return {           

          formData : {
            kelas : 0 ,
            semester : 0 ,
            angkatan : 0
          },

          loading : false,  
          token : '',
          id_prodi : this.$route.params.id_prodi,
          id_jurusan : this.$route.params.id_jurusan,
          id_tahunAjaran : this.$route.params.id_tahunAjaran,
          semester : [],
          angkatan : []
    }
  },
  mounted(){

      this.token = this.$cookies.get('token'); 
      if (!this.token) {
        this.$router.push(`/login`)
      }

      this.getKelas();
      this.getAngkatan();

  },
  methods: {    
      async store (){

         this.loading = true;


         let response = await axios.post(`https://project.mis.pens.ac.id/mis129/API/Pembebanan/'Pembebanan.php?function=addPembebananKelas&thnajaran_id=id_tahunAjaran`,this.formData)
              
          if (response.status == 200) {   

              this.$toast.success("Berhasil Menambah Data !", {
                position: "bottom-right",
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: true,
                closeButton: "button",
                icon: true,
                rtl: false
              });
              
              this.loading = false;
              this.$router.push(`/pembebananD4/${this.id_prodi}/${this.id_jurusan}/listtahun`)
              
         }    
          
      },
      async getKelas(){
        let response = await axios.get(`https://project.mis.pens.ac.id/mis129/API/DataMaster/kelas.php?function=getKelasAll&jurusan_id=${this.id_jurusan}&prodi_id=${this.id_prodi}`)

          if (response.status == 200) {

              this.semester = response.data.data     
              console.log(this.semester);

                        
          } else {
            console.log('gagal');        
          }   
      },
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
