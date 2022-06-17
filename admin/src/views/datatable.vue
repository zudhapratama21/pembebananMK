<template>
  <div>
    <h2>Implement jQuery DataTable in Vue Js</h2>
    <table class="table" id="datatable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Title</th>
          <th>Product Price</th>          
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in dosen" :key="item.NOMOR">
          <td>{{ item.NOMOR }}</td>
          <td>{{ item.VALUE }}</td>
          <td>{{ item.TEXT }}</td>          
        </tr>
      </tbody>
    </table>
  </div>
</template> 

<script>
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import axios from "axios";
import $ from "jquery";

export default {
   data () {
    return {
      dosen: [],
      token : ''        
    };
  },
  mounted() {
      this.token = this.$cookies.get('token'); 
      if (!this.token) {
        this.$router.push(`/login`)
      }
      this.getDosen();

     
  },
  methods : {

    async getDosen (){
       let config = {
             headers: {
                'Authorization': 'Bearer ' + this.token
             },
            }

      let response = await axios.get('https://project.mis.pens.ac.id/mis129/API/DataMaster/dosen.php?function=getDosen',config)
       $("#datatable").DataTable()

      if (response.status == 200) {
          this.dosen = response.data.data    
          console.log(this.dosen);
      } else {
        console.log('gagal');        
      }   
    }
  }
 
};
</script>