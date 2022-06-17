<template>
  <div class="tambahkelompokbidang">  
    <div class="section-header">
    <h1>Data Kelompok Bidang</h1>
     <div class="section-header-breadcrumb">
        <div class="breadcrumb-item active">
             <router-link to="/">
                <span >Dashboard</span>
            </router-link>
        </div>
        <div class="breadcrumb-item">
             <router-link to="/kelompokbidang">
                <span >Kelompok Bidang</span>
            </router-link>
        </div>
        
    </div>
   
  </div>  
       <div class="row" >
              <div class="col-12 text-left ">
                    <div class="card">                  
                        <div class="card-header d-flex justify-content-between">                   
                          <div>
                              <h4>Tambah Data Kelompok Bidang</h4>
                          </div>
                         
                       </div>
                        
                    <div class="card-body text-left" >
                        <form @submit.prevent="store()" >
                            <div class="form-group">
                                <label for="">Nama Kelompok Bidang</label>
                                <input type="text" v-model="formData.nama"   class="form-control" >
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-sm">Submit</button>                                
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
            nama : ''
          },
          loading : false,  
          token : ''    
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
         let response = await axios.post('https://project.mis.pens.ac.id/mis129/API/DataMaster/kelBidang.php?function=addKelBidang',this.formData,config)
              
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
              this.$router.push('/kelompokbidang')
              
         }    
          
      }
  },  
}
</script>
