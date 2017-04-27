myApp.controller('signupController', function($route, $scope, usersFactory, $location, $cookies) {

	$scope.signup = true
	$scope.submit = function(){
    	var info = $scope.register
    	$scope.empty = false
    	if (info == undefined){
    		$scope.empty = true;
    		return;
    	}
    	$scope.name = validate.name(info.name);
    	$scope.email = validate.email(info.email);
    	$scope.password = validate.password(info.password);
    	$scope.confirm = validate.confirm(info.password, info.confirm);
    	var isValid = function(){
    		for (var x in info){
				if ($scope[x]){
					return false;
				}
    		}
    		return true;
    	}()
    	if (isValid){
    		usersFactory.create($scope.register, function(){
                $cookies.put('user', $scope.register.name);
                $cookies.put('userId', $scope.register._id);
                $scope.register = {};
            });
            window.location.href = '/';
    	}
    }
});