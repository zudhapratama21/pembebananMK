<template>
  <div class="dosen"> 
    <div class="section-header">
      <h1>Data Jurusan</h1>
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
                            <h4>Tabel Daftar Jurusan</h4>
                        </div>
                        <router-link to="/setjurusan/create">
                            <span class="btn btn-primary btn-sm"><i class="fas fa-plus"></i> Tambah Data Jurusan</span>
                        </router-link>                         
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-striped text-left" id="table-2">
                        <thead>
                          <tr>                           
                            <th>#</th>
                            <th>Nama Jurusan</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody> 
                            <tr v-for="(jurusans,index) in jurusan" :key="index">
                                <td>{{index + 1}}</td>
                                <td>{{jurusans.JURUSAN}}</td>
                                <td>
                                   <button  @click.prevent="destroy(jurusans.NOMOR_JURUSAN,index)"  class="btn btn-danger btn-sm" >Hapus</button>                             
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
  name: 'setjurusan',
  data(){
      return {
          token:'',
          jurusan : []
      }
  },
  mounted(){
      this.token = this.$cookies.get('token'); 
      if (!this.token) {
        this.$router.push(`/login`)
      }
      this.getDataJurusan();

  },
  methods : {
      async getDataJurusan(){
           let config = {
                headers: {
                    'Authorization': 'Bearer ' + this.token
                },
            }

          let response = await axios.get('https://project.mis.pens.ac.id/mis129/API/DataMaster/settting.php?function=listSetJurusan',config)

          if (response.status == 200) {
            this.jurusan = response.data.data            
            
          }
      },
      async destroy(id,index){
         
        let q = window.confirm("apakah anda yakin ?")
        if (q === true) {
            let response = await axios.delete(`https://project.mis.pens.ac.id/mis129/API/DataMaster/settting.php?function=deleteSetJurusan&nomor=${id}`)                        
            if (response.status == 200) {
               this.$toast.success("Berhasil Menghapus Data !", {
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
              this.jurusan.splice(index,1);            
            }

        }
    }

  }
  
}

</script>
