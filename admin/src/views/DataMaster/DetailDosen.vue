<template>
<div>
  <div class="section-header">
    <h1>Detail Dosen</h1>
     <div class="section-header-breadcrumb">
        <div class="breadcrumb-item active">
             <router-link to="/">
                <span >Dashboard</span>
            </router-link>
        </div>
        <div class="breadcrumb-item">
             <router-link to="/dosen">
                <span >Dosen</span>
            </router-link>
        </div>
        
    </div>
   
  </div>
  <div class="section-body">
  <div class="card">
      <div class="card-header">
            <h4>
                Detail Dosen
            </h4>            
        </div>
      <div class="card-body">
          <div class="row">
              <div class="col-md-6">
            <table class="text-left table table-striped">
                <tbody>
                    <tr>
                        <th>Nama</th>
                        <td>{{this.dosen.NAMA}}</td>
                    </tr>
                    <tr>
                        <th>Gelar Depan</th>
                        <td>{{this.dosen.GELAR_DPN}}</td>
                    </tr>
                    <tr>
                        <th>Gelar Belakang</th>
                        <td>{{this.dosen.GELAR_BLK}}</td>
                    </tr>
                    <tr>
                        <th>Staff</th>
                        <td>{{this.dosen.NAMA_STAFF}}</td>
                    </tr>
                    <tr>
                        <th>Jurusan</th>
                        <td>{{this.dosen.NAMA_JURUSAN}}</td>
                    </tr>
                     <tr>
                        <th>Golongan Awal</th>
                        <td>{{this.dosen.GOLAWAL}}</td>
                    </tr>
                     <tr>
                        <th>Golongan Akhir</th>
                        <td>{{this.dosen.GOLAKHIR}}</td>
                    </tr>
                     <tr>
                        <th>Fungsional</th>
                        <td>{{this.dosen.FUNGSIONAL}}</td>
                    </tr>
                     <tr>
                        <th>Status</th>
                        <td>{{this.dosen.STATUS_NAMA}}</td>
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
  name: 'DetailDosen',
  data(){
    return {
      dosen : [],  
      token : ''    
    }
  },
  mounted() {
    this.token = this.$cookies.get('token'); 
      if (!this.token) {
        this.$router.push(`/login`)
      }
    this.getDosen();
  },
  methods: {    
    async getDosen(){       
      let response = await axios.get(`https://project.mis.pens.ac.id/mis129/API/DataMaster/dosen.php?function=getDosenById&nomor=${this.$route.params.id}`)

      if (response.status == 200) {
          this.dosen = response.data.data[0]   
          console.log(this.dosen);
      } else {
        console.log('gagal');        
      }   

    }
  },  
}
</script>

<style>

</style>