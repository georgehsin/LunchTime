myApp.controller('newEventsController', function($scope, $location, friendsFactory, eventsFactory, $cookies, NgMap) {

	$scope.inviteList = []

	var friends = function(){
		friendsFactory.showFriends($cookies.get('userId'), function(data){
			$scope.result = {};
			$scope.friends = data;
		});
	}
	friends();

	$scope.search = function(){
		var context = {
			'search': $scope.result.name,
			'userID': $cookies.get('userId')
		}
		friendsFactory.search(context, function(data){
			$scope.result = {};
			$scope.searchFriends = data;
		});
	}

	$scope.invite = function(friend){
		$scope.inviteList.push(friend)
		for(var x=0;x<$scope.friends.length;x++){
			if($scope.friends[x]._id == friend._id){
				console.log($scope.friends[x])
				var hello = $scope.friends.splice(x,1);
				break
			}
		}
	}

	$scope.submitEvent = function(){
		eventData = {
			'details': $scope.event,
			'people': $scope.inviteList
		}
		friendsFactory.addEvent(eventData, function(data){
			
		})
	}

// YELP/GOOGLE MAPS API
	$scope.searchYelp = function(){
		eventsFactory.yelpSearch($scope.searchRequest, function(data){
			$scope.results = data.businesses;
			$scope.latitude = data.region.center.latitude;
			$scope.longitude = data.region.center.longitude;
			$scope.locations = [];
			$scope.locationData = [];
			// console.log(data.businesses[0].coordinates.latitude)
			for(var x=0; x<data.businesses.length; x++){
				$scope.locations.push({
					pos:[data.businesses[x].coordinates.latitude, data.businesses[x].coordinates.longitude],
					name:data.businesses[x].name,
					rating:data.businesses[x].rating
				});;
				console.log(data.businesses[x].name);
				console.log(data.businesses[x].rating);
				$scope.locationData.push({name:data.businesses[x].name,rating:data.businesses[x].rating})
			}
			console.log($scope.locations);
			console.log($scope.locationData);
		});
	}

	NgMap.getMap().then(function(map) {
		$scope.map = map;

  });

});