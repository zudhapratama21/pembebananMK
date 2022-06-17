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
                        <form @submit.prevent="update()">
                            <div class="form-group">
                                <label for="">Nama Kelompok Bidang</label>
                                <input type="text" v-model="formData.nama" class="form-control" >                                                                
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-sm">Submit</button>
                            </div>
                        </form>
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
          nama : ''
        },
        KelompokBidang:[],  
        token : ''    
    }
  },
  mounted() {
     this.token = this.$cookies.get('token'); 
      if (!this.token) {
        this.$router.push(`/login`)
      }
    this.getData();
  },
  methods: {    
      async getData (){         
         let response = await axios.get(`https://project.mis.pens.ac.id/mis129/API/DataMaster/kelBidang.php?function=getBidangByID&nomor=${this.$route.params.id}`)

          if (response.status == 200) {    
              this.formData.nama = response.data.data.NAMA
         }                
      },
      async update(){
          let response = await axios.put(`https://project.mis.pens.ac.id/mis129/API/DataMaster/kelBidang.php?function=editBidangKeahlian&nomor=${this.$route.params.id}`,this.formData)
          
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
            
              this.$router.push('/kelompokbidang')
         }
      }


  },  
}
</script>
