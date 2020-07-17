const stocks = [
		{id:1, name:"BMW", price:110},
		{id:2, name:"Google", price:200},
		{id:3, name:"Apple", price:250},
 		{id:4, name:"Twitter", price:8},
];

const state = {
	stocks : []
};

const mutations = {
	'SET_STOCKS'(state, stocks){    
		state.stocks = stocks;
	},
	'RND_STOCKS'(state){

	}
};

const actions = {
	buyStock: ({commit}, order) =>{
		 
		commit('BUY_STOCK',order);
	}, 
	initStock: ({commit}) =>{
		commit('SET_STOCKS',stocks);
	},
	randomizeStocks: ({commit}) =>{
		commit('RND_STOCKS',stocks);
	}
};

const getters = {
	stocks: state => {
		return state.stocks;
	}
};


export default {
	state,
	mutations,
	actions,
	getters
}