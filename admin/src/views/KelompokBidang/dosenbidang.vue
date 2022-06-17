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
                <router-link to="/kelompokbidang">
                    <span >Kelompok Bidang</span>
                </router-link>
            </div>               
        </div>   
  </div>  
       <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header d-flex justify-content-between">                   
                        <div>
                            <h4>Tabel Dosen Bidang</h4>
                        </div>
                            <router-link :to="{name: 'kelompokbidang.listdosen.create', params:{id:this.$route.params.id}} ">
                                <span class="btn btn-primary btn-sm"><i class="fas fa-plus"></i> Tambah Data Dosen</span>
                            </router-link>                         
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-striped text-left" id="table-2">
                        <thead>
                          <tr>                           
                            <th>#</th>
                            <th>NIP</th>
                            <th>Nama Dosen</th>                                                        
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(listdosen,index) in listDosen" :key="index">
                            <td>{{ index + 1 }}</td>  
                            <td>{{ listdosen.NIP }}</td>                         
                            <td>{{listdosen.GELAR_DPN}} {{ listdosen.NAMA }} {{listdosen.GELAR_BLK}}</td>                           
                            <td>   
                              <button  @click.prevent="destroy(listdosen.ID_BIDANG,index)"  class="btn btn-danger btn-sm" >Hapus</button>                                                                                        
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
  name: 'listdosen',
  data(){
    return {
      listDosen:[],  
      token : ''    
    }
  },
  mounted() {
    this.token = this.$cookies.get('token'); 
      if (!this.token) {
        this.$router.push(`/login`)
      }
   this.getListDosen();
  },
  methods: { 
    async getListDosen(){
      let response = await axios.get(`https://project.mis.pens.ac.id/mis129/API/DataMaster/kelBidang.php?function=listDosen&nomor=${this.$route.params.id}`)
      if (response.status == 200) {
          this.listDosen = response.data.data                    
          console.log(this.listDosen);
      } else {
        console.log('gagal');        
      }
    },
     async destroy(id,index){             
        let q = window.confirm("apakah anda yakin ?")
        if (q === true) {
            let response = await axios.delete(`https://project.mis.pens.ac.id/mis129/API/DataMaster/kelBidang.php?function=deleteDosenBidang&nomor=${id}`);

            if (response.status == 200) {
               this.$toast.success("Berhasil menghapus data !", {
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
              this.listDosen.splice(index,1);            
            }

        }
    }
   
  },  
}
</script>
