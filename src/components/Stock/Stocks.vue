<template>
  <div class="row p-4">

    <appStock v-for="stock in stocks" :key="stock.id" :stockitem="stock"></appStock>
  </div>
</template>

 

 <script>
  import Stock from './Stock.vue';
  export default {
    components:{
      appStock: Stock
    },
    created(){    
      this.$store.dispatch('initStock');
    },
    computed:{
      stocks(){   
        return this.$store.getters.stocks;
      }
    }


  };
</script>


<style type="text/css">
  .card h5 {color: #057720;}
  .card-header{ padding:7px; }
  .card { margin-bottom: 35px; }
  .card  .bg-success{
    background-color: #a5e0b3 !important;
  } 
</style>
 