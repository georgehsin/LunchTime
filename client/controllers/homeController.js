myApp.controller('homeController', function($scope, $location, usersFactory, friendsFactory, $cookies) {

	$scope.user = $cookies.get('user');
	$scope.userId = $cookies.get('userId');

	const index = function(){
		usersFactory.profile($scope.userId).then((data)=>{
			$scope.friends = {}
			$scope.sentRequest = {}
			$scope.recievedRequest = {}
			for(let x=0;x<Object.keys(data.friends).length;x++){
				$scope.friends[data.friends[x]._id] = true;
			}
			for(let x=0;x<Object.keys(data.sent_pending).length;x++){
				$scope.sentRequest[data.sent_pending[x]._id] = true;
			}
			for(let x=0;x<Object.keys(data.rec_pending).length;x++){
				$scope.recievedRequest[data.rec_pending[x]._id] = true;
			}
			return data						
		});
	}
	if ($scope.user){
		index();
	}

	$scope.search = function(){
		usersFactory.index($scope.result).then((data)=>{
			$scope.result = {};
			$scope.searchResults = data;
		});
	}

	$scope.sendFriendRequest = function(send_id, recieve_id){
		const requestInfo = {
			'send_id': send_id,
			'recieve_id': recieve_id
		}
		friendsFactory.sendFriendRequest(requestInfo).then((data)=>{
			index();
		});
	}
});
