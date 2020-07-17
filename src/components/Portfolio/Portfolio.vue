<template>
	<div class="row p-4">
		<appStock v-for="stock in stocks" :key="stock.id" :stockitem="stock"></appStock>
	</div>
</template>

<script>
	import  {mapGetters} from 'vuex';
	import  Stock from './Stock';

	export default {
		computed:{
			...mapGetters({
				stocks: 'stockPorfolio'
			})
		},
		components:{
			appStock : Stock
		}
	};
</script>