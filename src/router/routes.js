import Home from '../components/Home/Home.vue';
import Portfolio from '../components/Portfolio/Portfolio.vue';
import Stocks from '../components/Stock/Stocks.vue';

export const routes = [
	{ path: "/", component: Home},
	{ path: "/portfolio", component: Portfolio},
	{ path: "/stocks", component: Stocks}
];

console.log(routes);