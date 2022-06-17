<template>
  <div>   
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
                  <div class="card-header d-flex justify-content-between">                   
                        <div>
                            <h4>Tabel Kelompok Bidang</h4>
                        </div>
                            <router-link to="/kelompokbidang/create">
                                <span class="btn btn-primary btn-sm"><i class="fas fa-plus"></i> Tambah Data Kelompok </span>
                            </router-link>                         
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-striped text-left" id="table-2">
                        <thead>
                          <tr>                           
                            <th>#</th>
                            <th>Nama Kelompok</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(kelBidang,index) in kelompokbidang" :key="index">
                            <td>{{ index + 1 }}</td>                           
                            <td>{{ kelBidang.NAMA }}</td>                           
                            <td>
                              <router-link :to="{ name:'kelompokbidang.listdosen', params:{ id:kelBidang.ID} } ">
                                  <span class="btn btn-primary btn-sm mr-2">List Dosen</span>
                              </router-link>                             
                              <router-link :to="{ name:'kelompokbidang.listdosen.edit', params:{ id:kelBidang.ID} } ">
                                  <span class="btn btn-success btn-sm mr-2">Edit Data</span>
                              </router-link>                             
                              <button  @click.prevent="destroy(kelBidang.ID,index)"  class="btn btn-danger btn-sm" >Hapus</button>                             
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
  name: 'KelompokBidang',
  data(){
    return {
      kelompokbidang : [],  
      token : ''    
    }
  },
  mounted() {
    this.token = this.$cookies.get('token'); 
      if (!this.token) {
        this.$router.push(`/login`)
      }
    this.getKelompokBidang();
  },
  methods: {    
    async getKelompokBidang(){  

       let config = {
                    headers: {
                        'Authorization': 'Bearer ' + this.token
                    },
                }

      let response = await axios.get('https://project.mis.pens.ac.id/mis129/API/DataMaster/kelBidang.php?function=getKelBidang',config)

      if (response.status == 200) {
          this.kelompokbidang = response.data.data                    
      } else {
        console.log('gagal');        
      }   

    },
    async destroy(id,index){        
        let q = window.confirm("apakah anda yakin ?")
        if (q === true) {
            let response = await axios.delete(`https://project.mis.pens.ac.id/mis129/API/DataMaster/kelBidang.php?function=hapusKelBidang&nomor=${id}`)                        
            if (response.status == 200) {
               this.$toast.error("Berhasil Menghapus Data !", {
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
              this.kelompokbidang.splice(index,1);            
            }

        }
    }
  },  
}
</script>
