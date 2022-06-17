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
                              <h4>Tambah Data Tahun Ajaran</h4>
                          </div>
                         
                       </div>
                        
                    <div class="card-body text-left" >
                        <form @submit.prevent="store()" >
                            <div class="form-group">
                                <label for="">Nama Tahun Ajaran</label>
                                <input type="text" v-model="formData.nama"   class="form-control" >
                            </div>
                            <div class="form-group">
                                <label for=""> Pembebanan Genap / Ganjil </label>
                                <select class="form-control" v-model="formData.jenis">                                        
                                        <option value="1">Ganjil</option>
                                        <option value="2">Genap</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary">Submit</button>                                
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
            nama : '' ,
            jenis : 0
          },
          loading : false,  
          token : '',
          id_prodi : this.$route.params.id_prodi,
          id_jurusan : this.$route.params.id_jurusan,
    }
  },
  mounted(){
      this.token = this.$cookies.get('token'); 
      if (!this.token) {
        this.$router.push(`/login`)
      }
  },
  methods: {    
      async store (){

         let config = {
                headers: {
                    'Authorization': 'Bearer ' + this.token
                },
            }


         this.loading = true;


         let response = await axios.post(`https://project.mis.pens.ac.id/mis129/API/DataMaster/tahunajaran.php?function=addTahunAjaran&id_prodi=${this.id_prodi}&id_jurusan=${this.id_jurusan}`,this.formData,config)
              
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
          
      }
  },  
}
</script>
