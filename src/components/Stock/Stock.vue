<template>
	<div class="col-sm-4">
		
		<div class="card">
		  <h5 class="card-header bg-success">{{ stockitem.name }} <small>Price: ({{ stockitem.price }}) </small></h5>
		  <div class="card-body">
		    <div class="row">
		    	<div class="col-9">
		    		<div class="form-group">
		    			<input 
			    			type="number" 
			    			class="form-control" 
			    			placeholder="Quantity" 
			    			v-model="quantity"

			    		>
					</div>	
		    	</div>
		    	<div class="col-3">
		    		 <button 
		    		 	class="btn btn-success"
		    		 	:disabled="quantity <= 0"
		    		 	@click="buyStock"
		    		 >
		    		 	BUY
		    		</button>
		    	</div>
		    </div>
		    
		   
		  </div>
		</div>
	</div>
</template>

<script>
	
	export default {
		props: ['stockitem'],
		data(){
			return {
				quantity : 0
			}
		},

		
		methods:{
			buyStock(){
				const order = {
					stockId: this.stockitem.id,
					stockPrice: this.stockitem.price,
					quantity: this.quantity
				}
				this.$store.dispatch('buyStock',order);
				this.quantity = 0;

			}	
		}

	};
</script>

 