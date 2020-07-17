<template>
	<div class="col-sm-4 mb-4">
		
		<div class="card">
		  <h5 class="card-header bg-info">
		  	{{ stockitem.name }} 
		  	<small>(Price: {{ stockitem.price }} | Quantity: {{ stockitem.quantity }} )</small>
		  </h5>
		  <div class="card-body">
		    <div class="row">
		    	<div class="col-9">
		    		<div class="form-group">
		    			<input 
			    			type="number" 
			    			class="form-control" 
			    			placeholder="Quantity" 
			    			v-model="quantity">
					</div>	
		    	</div>
		    	<div class="col-3">
		    		 <button 
		    		 	class="btn btn-info"
		    		 	:disabled="quantity <= 0"
		    		 	@click="sellStock">
		    		 	SELL
		    		</button>
		    	</div>
		    </div>
		    
		   
		  </div>
		</div>
	</div>
</template>

<script>
	import  {mapActions} from 'vuex';

	export default {
		props : ['stockitem'],
		data(){
			return {
				quantity : 0
			}
		},
		computed:{
			 
		},
		methods:{
			...mapActions(['sellStock']),
			sellStock(){
				const order = {
					stockId: stock.id,
					quantity: stock.quantity,
					name: stock.name,
					price: stock.price,
				};
				this.sellStock(); 
			},

		}

	};
</script>

<style scoped>
  .card h5 {color: #fff;}
  .card-header{ padding:7px; }
  .card { margin-bottom: 35px; }
   
</style>

 