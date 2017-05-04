myApp.controller('loginController', function($route, $scope, usersFactory, $location, $cookies) {

  $scope.loginForm = function(){
  	usersFactory.login($scope.login, function(data){
      if(data.invalid){
        $scope.invalid = true;
      }
      else{
        $cookies.put('user', data.name);
        $cookies.put('userId', data._id);
        $scope.invalid = false;
        window.location.href = '/';
      }
  	});
  }

});