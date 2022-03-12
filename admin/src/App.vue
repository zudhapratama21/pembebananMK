<template>
  <div id="app">  
    <div class="main-wrapper">
      <div class="navbar-bg"></div>
        <navbar/>

        <div class="main-sidebar">
          <sidebar/>
        </div>

        <div class="main-content">
          <section class="section">
             <router-view/>
          </section>
        </div>
                
    </div>   
  </div>
</template>

<script>
import navbar from "@/components/Navbar.vue";
import sidebar from "@/components/Sidebar.vue";

export default {
  name: "dashboard",
  components: {
    sidebar,    
    navbar    
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
