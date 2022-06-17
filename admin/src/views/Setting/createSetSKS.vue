<template>
  <div>
     <div class="section-header">
        <h1>Data Kelompok Bidang</h1>
        <div class="section-header-breadcrumb">
            <div class="breadcrumb-item active">
                <router-link to="/">
                    <span >Dashboard</span>
                </router-link>
            </div>
            <div class="breadcrumb-item">
                <router-link to="/setjurusan">
                    <span >Setting Jurusan</span>
                </router-link>
            </div>              
        </div> 
      </div>  
  <div class="tambahkelompokbidang">    
       <div class="row" >
              <div class="col-12 text-left ">
                    <div class="card">                  
                        <div class="card-header d-flex justify-content-between">                   
                          <div>
                              <h4>Tambah Data Jurusan</h4>
                          </div>
                         
                       </div>
                        
                    <div class="card-body text-left" >
                        <form @submit.prevent="store()" >
                            <div class="form-group">
                                <label for="">Jurusan</label>                                                                
                                <input type="number" v-model="formData.jumlah" class="form-control"  required>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-sm">Submit</button>
                                   <template v-if="loading">
                                    
                                      <loader object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="2" bg="#343a40" objectbg="#999793" opacity="80" name="circular"></loader>
                                    
                                  </template>
                            </div>
                        </form>
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
  name: 'tambahkelompokbidang',
  data(){
    return {                  
          formData : {
            jumlah : ''
          },          
          loading : false,
          token : ''
    }
  },
  mounted() {    
      this.token = this.$cookies.get('token'); 
      if (!this.token) {
        this.$router.push(`/login`)
      }
  },
  methods: {         
      async store (){     
        this.loading = true;  

        let config = {
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        }

         let response = await axios.post(`https://project.mis.pens.ac.id/mis129/API/DataMaster/settting.php?function=addListSKS `,this.formData,config)

          if (response.status == 200) { 

               this.$toast.success("Berhasil menambah data !", {
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

                this.$router.push(`/setsks`)

                this.loading = false;    
         }
      

          
      }
  },  
}
</script>
