<template>
  <div class="login">    
       <section class="section text-left">
      <div class="d-flex flex-wrap align-items-stretch">
        <div class="col-lg-4 col-md-6 col-12 order-lg-1 min-vh-100 order-2 bg-white">
          <div class="p-4 m-3">
            <!-- <img src="../assets/img/stisla-fill.svg" alt="logo" width="80" class="shadow-light rounded-circle mb-5 mt-2"> -->
            <h4 class="text-dark font-weight-normal">Welcome to <span class="font-weight-bold">PMK</span></h4>
            <p class="text-muted">Before you get started, you must login or register if you don't already have an account.</p>
            <form @submit.prevent="handleLogin()" method="POST"  class="needs-validation" novalidate="">
              <div class="form-group">
                <label for="email">Email</label>
                <input id="email" type="email" class="form-control" v-model="formData.email" name="email" tabindex="1" required autofocus>
                <div class="invalid-feedback">
                  Please fill in your email
                </div>
              </div>

              <div class="form-group">
                <div class="d-block">
                  <label for="password" class="control-label">Password</label>
                </div>
                <input id="password" type="password" v-model="formData.password" class="form-control" name="password" tabindex="2" required>
                <div class="invalid-feedback">
                  please fill in your password
                </div>
              </div>             

              <div class="form-group text-left">
                <button type="submit" class="btn btn-primary btn-block btn-lg btn-icon icon-right" >
                  Login
                </button>                         
              </div>
                <template v-if="loading">
                    <div id="app">
                      <loader object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="2" bg="#343a40" objectbg="#999793" opacity="80" name="circular"></loader>
                    </div>            
               </template>
            
            </form>            
          </div>
        </div>
       
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'login',   
  data(){
        return {
            formData:{
                email : '',
                password : ''
            },
            loading : false 
        }
  },
  mounted(){
      this.token = this.$cookies.get('token'); 
      if (this.token) {
          this.$router.push(`/`)
      }
  },
  methods:{
      async handleLogin(){  
         this.loading = true;            
         const response = await axios.post('https://project.mis.pens.ac.id/mis129/API/DataMaster/Login.php?function=login',this.formData);         
         const dataResponse = response.data.data;
         console.log(dataResponse);
         
         if (dataResponse == "data error") {                          
              this.$toast.error("Data yang anda masukan tidak benar , coba periksa inputan anda lagi!", {
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
         }else{
              const dataToken = response.data.accessToken;
             this.$toast.success("Anda berhasil login !", {
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
              this.$cookies.set("token",dataToken); 
                        
              this.$router.go(this.$router.push('/'))
         }                  
      }
  }
}
</script>
