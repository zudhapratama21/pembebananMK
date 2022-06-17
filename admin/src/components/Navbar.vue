<template>
  <div class="navbar">
      <nav class="navbar navbar-expand-lg main-navbar">
        <form class="form-inline mr-auto">
          <ul class="navbar-nav mr-5">
            <li><a href="#" data-toggle="sidebar" class="nav-link nav-link-lg ml--5"><i class="fas fa-bars"></i></a></li>
            <li><a href="#" data-toggle="search" class="nav-link nav-link-lg d-sm-none"><i class="fas fa-search"></i></a></li>
          </ul>
        </form>
        <ul class="navbar-nav navbar-right">
          <li class="dropdown"><a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle nav-link-lg nav-link-user">
            <img alt="image" src="/assets/img/avatar/avatar-1.png" class="rounded-circle mr-1"> 
            <div class="d-sm-none d-lg-inline-block">
             {{this.name ? this.name : 'tidak ada'}} 
            </div></a>
            <div class="dropdown-menu dropdown-menu-right">                           
              <div class="dropdown-divider"></div>
              <a @click.prevent="destroy()"  href="#" class="dropdown-item has-icon text-danger">
                <i class="fas fa-sign-out-alt"></i> Logout
              </a>

            </div>
          </li>
        </ul>
      </nav>
  </div>
</template>

<script>
import VueJwtDecode from 'vue-jwt-decode'

export default {
  name: 'Navbar',
  data(){
    return {
      name : '',
      token : '',
      data : []
    }
  },
  mounted(){
    this.token = this.$cookies.get('token');        

    this.data = VueJwtDecode.decode(this.token);      
    this.name = this.data.nama
  },
  methods:{
      destroy (){
            this.token = this.$cookies.remove('token');      

          this.$toast.success("Anda berhasil logout !", {
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
                        
              this.$router.push('/login')
      }
  }
}
</script>

