<template>
  <div class="container">
    <appHeader></appHeader>
    <div class="row">
      <div class="col-12">
        <router-view></router-view>     
      </div>
    </div>
    
  </div>
</template>


<script>
  import Header from  './components/Layouts/Header.vue';
  export default {
    components:{
      appHeader:Header
    },
    created(){  
         
    }
  };
</script>



<style>
 body{ padding: 30px; }
</style>