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
            <div class="breadcrumb-item">              
                <router-link :to="{name:'kelompokbidang.listdosen', params:{ id: this.$route.params.id} }">
                    <span >List Dosen</span>
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
                              <h4>Tambah Data Kelompok Dosen</h4>
                          </div>
                         
                       </div>
                        
                    <div class="card-body text-left" >
                        <form @submit.prevent="store()" >
                            <div class="form-group">
                                <label for="">Nama Dosen</label>    
                                  <model-select :options="listDosen"
                                    placeholder="select item">
                                 </model-select>                                                            

                               <!--  <select name="" id="" v-model="formData.nama" class="form-control" >
                                    <option value="" selected disabled>Pilih Dosen</option>
                                    <option v-for="(listdosen,index) in listDosen" :key="index"  :value="listdosen.NOMOR"> {{listdosen.GELAR_DPN}} {{listdosen.NAMA}} {{listdosen.GELAR_BLK}}</option>             

                                   
                                </select> -->
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
import 'vue-search-select/dist/VueSearchSelect.css'
import { ModelSelect } from 'vue-search-select'

export default {
  name: 'tambahkelompokbidang',
  components: {
    ModelSelect
  },
  data(){
    return {                  
          formData : {
            nama : ''
          },
          listDosen:[],
          loading : false,  
          token : '' ,
          options: [
              { value: '1', text: 'aa' + ' - ' + '1' },
              { value: '2', text: 'ab' + ' - ' + '2' },
              { value: '3', text: 'bc' + ' - ' + '3' },
              { value: '4', text: 'cd' + ' - ' + '4' },
              { value: '5', text: 'de' + ' - ' + '5' }
          ], 
          dataDosen:[]   
    }
  },
  mounted() {
      this.token = this.$cookies.get('token'); 
      if (!this.token) {
        this.$router.push(`/login`)
      }
      this.getDosen();      

      console.log(this.options[1].value)
  },
  methods: {    
      async getDosen (){
        let config = {
                headers: {
                    'Authorization': 'Bearer ' + this.token
                },
            }

          let response = await axios.get('https://project.mis.pens.ac.id/mis129/API/DataMaster/dosen.php?function=getDosen',config)

           if (response.status == 200) {
                this.listDosen = response.data.data                
                
                for (var i = 0; i < this.listDosen.length; i++) {
                      this.dataDosen[i].value = this.listDosen[i].NOMOR
                      
                      
                  }

                  console.log(this.dataDosen);

            } else {
                console.log('gagal');        
            }
      },
      async store (){     
        this.loading = true;    
         let response = await axios.post(`https://project.mis.pens.ac.id/mis129/API/DataMaster/kelBidang.php?function=addListDosen&nomor=${this.$route.params.id}`,this.formData)

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
                this.$router.push(`/kelompokbidang/listdosen/${this.$route.params.id}`)

                this.loading = true;    
         }
      

          
      }
  },  
}
</script>
