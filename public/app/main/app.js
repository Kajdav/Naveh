var app = angular.module('navehApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/templates/home/home.html',
		controller: 'homeCtrl'
	})


	.when('/register', {
		templateUrl: '/templates/register/register.html',
		controller: 'registerCtrl'
	})
	.when('/register/error', {
		templateUrl: '/templates/register/error.html'
	})
	.when('/auth/google',{
		templateUrl: '/templates/register/google-auth.html',
		resolve: {
			reroute: function(){
				location.reload();
			}
		}
	})


	.when('/products', {
		templateUrl: '/templates/products/products.html',
		controller: 'productsCtrl'
	})
	.when('/products/add', { //needs admin auth
		templateUrl: '/templates/products/add-product/add-product.html',
		controller: 'addProductCtrl'
	})
	.when('/products/edit/:name', { //needs admin auth
		templateUrl: '/templates/products/edit-product/edit-product.html',
		controller: 'editProductCtrl'
	})
	.when('/products/:name', {
		templateUrl: '/templates/products/product-page/product-page.html',
		controller: 'productCtrl'
	})


	.when('/ingredients', {
		templateUrl: '/templates/ingredients/ingredients.html',
		controller: 'ingredientsCtrl'
	})
	.when('/ingredients/add', { //needs admin auth
		templateUrl: '/templates/ingredients/add-ingredient/add-ingredient.html',
		controller:'addIngredientCtrl'
	})
	.when('/ingredients/edit/:name', { //needs admin auth
		templateUrl: '/templates/ingredients/edit-ingredient/edit-ingredient.html',
		controller: 'editIngredientCtrl'
	})
	.when('/ingredients/:name', {
		templateUrl: '/templates/ingredients/ingredient-page/ingredient-page.html',
		controller: 'ingredientCtrl'
	})

	
	.when('/dashboard', {
		templateUrl: '/templates/users/user-page/user-page.html',
		controller: 'userCtrl'
	})
	.when('/cart', {
		templateUrl: '/templates/users/cart/cart-page.html',
		controller: 'cartCtrl'
	})
	.when('/checkout', {
		redirectTo: '/checkout/select-address'
	})
	.when('/checkout/payment/:id', {
		templateUrl: '/templates/users/checkout/payment/payment-page.html',
		controller: 'paymentCtrl'
	})
	.when('/checkout/select-address', {
		templateUrl: '/templates/users/checkout/select-address/select-address.html',
		controller: 'selectAddressCtrl'
	})

	.when('/orders', {
		templateUrl: '/templates/users/orders/orders-page.html',
		controller: 'ordersCtrl'
	})
	.when('/orders/:id', {
		templateUrl: '/templates/users/orders/order-page/order-page.html',
		controller: 'orderCtrl'
	})
	
	.otherwise({
		redirectTo: '/'
	})
	$locationProvider.html5Mode(true);
});

//toDo: Format the Mandrill confirmation emails real quick-like.
//THEN do some minor front-ending.
//THEN integrate mandrill to email customers (registration and
//     purchase) and the company (registration? and purchase).
//THEN tie all of the front end together.

//eventually: 
//---use 'addToSet' when creating a new product (on its ingredients)
//   or ingredient (on its products)
//---Account page
//-----Show their entire account info
//-----Add emails, addresses, connect Facebook/google, etc.
//---Add current orders to customer schema
//---Refresh user data (OR USE SOCKET.IO!) on:
//-----Adding item to cart
//-----Submitting order
//--secure routes - client and server-side