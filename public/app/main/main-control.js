var app = angular.module('navehApp');

app.controller('mainCtrl', function($scope, userService){
	$scope.updateUser = function(){
		userService.getUser().then(function(data){
			$scope.user = data.data;
			console.log($scope.user);
			// $rootScope.$emit('user-loaded');
		})
	}
	$scope.logout = function(){
		userService.logout().then(function(data){
			location.reload();
		})
	}
	$scope.updateUser();
	$scope.$on('update-user', function(){
		$scope.updateUser();
	})
});