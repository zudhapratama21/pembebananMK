<template>
  <div class="home">    
    
  </div>
</template>

<script>

export default {
  name: 'Home',  
   data(){
    return {  
      token : ''    
    }
  },
  mounted() {
    this.token = this.$cookies.get('token'); 
      if (!this.token) {
        this.$router.push(`/login`)
      }
  
  },
}
</script>
