myApp.controller('homeController', function($scope, $location, usersFactory, friendsFactory, $cookies) {

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
			return data						
		});
	}
	if ($scope.user){
		index();
	}

	$scope.search = function(){
		usersFactory.index($scope.result, function(data){
			$scope.result = {};
			$scope.searchResults = data;
		});
	}

	$scope.sendFriendRequest = function(send_id, recieve_id){
		var requestInfo = {
			'send_id': send_id,
			'recieve_id': recieve_id
		}
		friendsFactory.sendFriendRequest(requestInfo, function(data){
			index();
		});
	}
});