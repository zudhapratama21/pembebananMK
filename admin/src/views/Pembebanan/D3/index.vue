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
      </div>   
    </div>   
       <div class="row">
              <div class="col-12">
                <div class="card">
                   <div class="card-header d-flex justify-content-between">                   
                        <div>
                            <h4>Tabel Daftar Pembebanan</h4>
                        </div>                       
                        <router-link :to="{ name: 'pembebananD3.listSemester.pembenanan.create', params:{ id_semester:id_semester , id_jurusan : id_jurusan,id_kelas:id_kelas , id_prodi : id_prodi }} " >
                             <span class="btn btn-primary btn-sm"><i class="fas fa-plus"></i> Tambah Data Pembebanan </span>
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
// import axios from 'axios';


export default {
  name: 'setjurusan',
  data(){
      return {
          token:'',
          jurusan : [] ,
          id_prodi : this.$route.params.id_prodi,
          id_jurusan : this.$route.params.id_jurusan,
          id_kelas: this.$route.params.id_kelas,
          id_semester : this.$route.params.id_semester,
      }
  },
  mounted(){
      this.token = this.$cookies.get('token'); 

      if (!this.token) {
        this.$router.push(`/login`)
      }      

  },
  methods : {     

  }
  
}

</script>
