<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<router-link to="/" class="navbar-brand">Stock Trader</router-link>
		 
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<router-link to="/portfolio" tag="li" class="nav-item" activeClass="active"><a class="nav-link">Portfolio</a></router-link>
				<router-link to="/stocks" tag="li" class="nav-item" activeClass="active"><a class="nav-link">Stocks</a></router-link>

				 
				 
			</ul>
			<form class="form-inline my-2 my-lg-0">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Save & Load
						</a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdown">
							<a class="dropdown-item" href="#">Save Data</a>
							<a class="dropdown-item" href="#">Load Data</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item" href="#">Something else here</a>
						</div>
					</li>
				 
				</ul>
			</form>
		</div>
	</nav>
</template>