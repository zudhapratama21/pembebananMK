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

           <!--  <div class="breadcrumb-item">
                <router-link to="/kelompokbidang">
                    <span >Kelompok Bidang</span>
                </router-link>
            </div>  
            <div class="breadcrumb-item">              
                <router-link :to="{name:'kelompokbidang.listdosen', params:{ id: this.$route.params.id} }">
                    <span >List Dosen</span>
                </router-link>
            </div>            --> 

            
        </div> 
      </div>  
  <div class="tambahkelompokbidang">    
       <div class="row" >
              <div class="col-12 text-left ">
                    <div class="card">                  
                        <div class="card-header d-flex justify-content-between">                   
                          <div>
                              <h4>Tambah Data Pembebanan Kelas A</h4>
                          </div>
                         
                       </div>
                        
                    <div class="card-body text-left" >

                        <form @submit.prevent="storePembebananA()"> 
                            <div v-for="(bebanA,id) in pembebananA" :key="id" >
                            <div class="row">
                                    <div class="col-md-3">
                                          <div class="form-group">
                                            <label for="">Mata Kuliah</label>                                                                
                                            <input type="text" name=""   :value="bebanA.MATAKULIAH" class="form-control" readonly > 
                                         </div>
                                    </div>
                                    <div class="col-md-1">
                                          <div class="form-group">
                                            <label for="">SKS</label>                                                                
                                            <input type="" class="form-control" :value="bebanA.SKS" maxlength="1" readonly>
                                         </div>
                                    </div>

                                  <!--   <div class="col-md-3">
                                          <div class="form-group">
                                            <label for="">Kelompok Bidang</label>                                                                
                                            <select name="" id="" v-model="bebanA.ID_KELOMPOK_BIDANG"   class="form-control" >
                                                <option value="" selected disabled >Pilih Kelompok Bidang</option>
                                                <option v-for="(kelbidang,index) in kelBidang" :key="index"  @click="setDosen(kelbidang.ID)"  :value="kelbidang.ID" 
                                                > 
                                                {{kelbidang.NAMA}}
                                            </option>             
                                            </select>
                                         </div>
                                    </div> -->

                                    <div class="col-md-3">
                                          <div class="form-group"> 
                                            <label for="">Nama Dosen</label>                                                                 
                                            <select name="" id="" v-model="bebanA.ID_DOSEN" class="form-control" >
                                                <option value="" selected disabled>Pilih Dosen</option>                                                
                                                <option v-for="(listdosen,index) in listDosen" :key="index"  @click="cekDosen(listdosen.NOMOR_PEGAWAI,id)" :value="listdosen.NOMOR_PEGAWAI"> {{listdosen.GELAR_DPN}} {{listdosen.NAMA}} {{listdosen.GELAR_BLK}}

                                                </option>             
                                            </select>

                                             <div v-if="errDosen">
                                                 <div class="badge badge-danger">Nama dosen tidak boleh sama di satu kelas</div>
                                             </div>
                                         </div>
                                        
                                           
                                    </div>

                            </div>     
                            </div>                        
                          

                            <div class="form-group">

                                <button type="submit" class="btn btn-primary btn-sm">Submit</button>
                                   <template v-if="loading">
                                        <div id="app">
                                          <loader object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="2" bg="#343a40" objectbg="#999793" opacity="80" name="circular"></loader>
                                        </div>            
                                  </template>

                            </div>

                        </form>
                    </div>
                </div>
              </div>

               <div class="col-12 text-left ">
                    <div class="card">                  
                        <div class="card-header d-flex justify-content-between">                   
                          <div>
                              <h4>Tambah Data Pembebanan Kelas B</h4>
                          </div>
                         
                       </div>
                        
                    <div class="card-body text-left" >
                        
                        <form @submit.prevent="storePembebananB()"> 
                            <div v-for="(bebanB,index) in pembebananB" :key="index">
                            <div class="row">
                                    <div class="col-md-3">
                                          <div class="form-group">
                                            <label for="">Mata Kuliah</label>                                                                
                                            <input type="text" name=""  :value="bebanB.MATAKULIAH" class="form-control" readonly > 
                                         </div>
                                    </div>
                                    <div class="col-md-1">
                                          <div class="form-group">
                                            <label for="">SKS</label>                                                                
                                            <input type="" class="form-control" :value="bebanB.SKS" maxlength="1" readonly>
                                         </div>
                                    </div>

                                  <!--   <div class="col-md-3">
                                          <div class="form-group">
                                            <label for="">Kelompok Bidang</label>                                                                
                                            <select name="" id="" v-model="bebanB.ID_KELOMPOK_BIDANG"   class="form-control" >
                                                <option value="" selected disabled >Pilih Kelompok Bidang</option>
                                                <option v-for="(kelbidang,index) in kelBidang" :key="index"  @click="setDosen(kelbidang.ID)"  :value="kelbidang.ID" 
                                                > 
                                                {{kelbidang.NAMA}}
                                            </option>             
                                            </select>
                                         </div>
                                    </div> -->

                                    <div class="col-md-3">
                                          <div class="form-group"> 
                                            <label for="">Nama Dosen</label>                                                                 
                                            <select name="" id="" v-model="bebanB.ID_DOSEN" class="form-control" >
                                                <option value="" selected disabled>Pilih Dosen</option>
                                                <option v-for="(listdosen2,index) in listDosen" :key="index+1" onclick="cekDosen(listDosen.NOMOR_PEGAWAI)" :value="listdosen2.NOMOR_PEGAWAI"> {{listdosen2.GELAR_DPN}} {{listdosen2.NAMA}} {{listdosen2.GELAR_BLK}}
                                                </option>             
                                            </select>
                                         </div>
                                       
                                    </div>

                            </div>     
                            </div>                        
                          

                            <div class="form-group">

                                <button type="submit" class="btn btn-primary btn-sm">Submit</button>
                                   <template v-if="loading">
                                        <div id="app">
                                          <loader object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="2" bg="#343a40" objectbg="#999793" opacity="80" name="circular"></loader>
                                        </div>            
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
  name: 'tambahpembebanan',
  data(){
    return {                  
          formData : {
            id_dosen : [],
            id_kelompok_bidang:[],
            id_matakuliah:[]
          },
          listDosen:[],
          dataDosen:[],
          loading : false,  
          token : '' ,
          id_prodi : this.$route.params.id_prodi,
          id_jurusan : this.$route.params.id_jurusan,
          id_kelas: this.$route.params.id_kelas,
          id_semester : this.$route.params.id_semester, 
          matakuliah: [] ,
          kelBidang: [] ,
          pembebananA : [],
          pembebananB : [],
          errDosen:false

    }
  },

  mounted() {
      this.token = this.$cookies.get('token'); 

      if (!this.token) {
         this.$router.push(`/login`)
      }

      this.getListDosen(); 
      this.getMataKuliah();
      this.getKElBidang();

  },
  methods: {    
      async getListDosen(){    

          let response = await axios.get(`https://project.mis.pens.ac.id/mis129/API/DataMaster/kelBidang.php?function=listDosenAll`)

           if (response.status == 200) {
                this.listDosen = response.data.data                   
                
            } else {
                console.log('gagal');        
            }

      },
      async getMataKuliah(){
            let _ = require('lodash');

            let response = await axios.get(`https://project.mis.pens.ac.id/mis129/API/DataMaster/matakuliah.php?function=getMataKuliah&jurusan_id=${this.id_jurusan}&semester_id=${this.id_semester}&kelas=${this.id_kelas}&prodi_id=${this.id_prodi}`)


              if (response.status == 200) {

                
                                 
                  this.matakuliah = _.cloneDeep(response.data.data);
                  this.pembebananA = _.cloneDeep(response.data.data);
                  this.pembebananB = _.cloneDeep(response.data.data);                                

              } else {

                console.log('gagal');        

              }       
                
      },
      async getKElBidang(){

              let config = {
                headers: {
                        'Authorization': 'Bearer ' + this.token
                    },
                }

              let response = await axios.get(`https://project.mis.pens.ac.id/mis129/API/DataMaster/kelBidang.php?function=getKelBidang`,config)

              if (response.status == 200) {
                  this.kelBidang = response.data.data            
                  
              } else {
                console.log('gagal');        
              }        
      },
      setDosen(id){
        let count=0;
        this.dataDosen.length = 0;

        // kok error yoo  , stuckkkk 

        for (var i = 0; i < this.listDosen.length; i++) {
            if (this.listDosen[i].KELOMPOK_BIDANG == id) {
                this.dataDosen[count] = this.listDosen[i] ;
                count++;
            }                        
        }    
      },

      async storePembebananB(){
        let response = await axios.post(`https://project.mis.pens.ac.id/mis129/API/Pembebanan/Pembebanan.php?function=addPembebanan`,this.pembebananB)

           if (response.status == 200) {
                  console.log(response.data);
                  
              } else {
                console.log('gagal');        
              }   
      } ,
        async storePembebananA(){
        let response = await axios.post(`https://project.mis.pens.ac.id/mis129/API/Pembebanan/Pembebanan.php?function=addPembebanan`,this.pembebananA)

           if (response.status == 200) {
                  console.log(response.data);
                  
              } else {
                console.log('gagal');        
              }   
      },
      cekDosen(id,no){            
        this.errDosen = false                    
        for (var i = 0; i < this.pembebananA.length; i++) {
            if (i !== no ) {
                if (this.pembebananA[i].ID_DOSEN == id) {
                   this.errDosen = true

                }
            }
            
        }
      }

  },  
}
</script>

