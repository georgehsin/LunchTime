myApp.controller('homeController', function($scope, $location, usersFactory, $cookies) {

	$scope.user = $cookies.get('user');
	$scope.userId = $cookies.get('userId');

	var index = function(){
		usersFactory.profile($scope.userId, function(data){
			$scope.friends = {}
			$scope.sentRequest = {}
			$scope.recievedRequest = {}
			for(var x=0;x<Object.keys(data.friends).length;x++){
				$scope.friends[data.friends[x]._id] = true;
			}
			for(var x=0;x<Object.keys(data.sent_pending).length;x++){
				$scope.sentRequest[data.sent_pending[x]._id] = true;
			}
			for(var x=0;x<Object.keys(data.rec_pending).length;x++){
				$scope.recievedRequest[data.rec_pending[x]._id] = true;
			}						
		});
	}
	index();

	$scope.search = function(){
		usersFactory.index($scope.result, function(data){
			$scope.result = {};
			$scope.searchResults = data;
		});
	}

	$scope.sendFriendRequest = function(send_id, recieve_id){
		requestInfo = {
			'send_id': send_id,
			'recieve_id': recieve_id
		}
		usersFactory.sendFriendRequest(requestInfo, function(data){
			if (data == true){
				$scope.success = true;
			}
		});
		index();
	}
});