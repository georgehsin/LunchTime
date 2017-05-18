myApp.controller('newEventsController', function($scope, $location, friendsFactory, eventsFactory, $cookies, NgMap) {

	$scope.inviteList = []

	const friends = function(){
		friendsFactory.showFriends($cookies.get('userId')).then((data)=> {
			$scope.result = {};
			$scope.friends = data;
		});
	}
	friends();

	$scope.search = function(){
		const context = {
			'search': $scope.result.name,
			'userID': $cookies.get('userId')
		}
		friendsFactory.search(context).then((data)=> {
			$scope.result = {};
			$scope.searchFriends = data;
		});
	}

	$scope.invite = function(friend){
		$scope.inviteList.push(friend)
		for(let x=0;x<$scope.friends.length;x++){
			if($scope.friends[x]._id == friend._id){
				const hello = $scope.friends.splice(x,1);
				break
			}
		}
	}

	$scope.submitEvent = function(){
		eventData = {
			'details': $scope.event,
			'people': $scope.inviteList
		}
		friendsFactory.addEvent(eventData).then((data)=> {
			
		})
	}

// YELP/GOOGLE MAPS API
	$scope.searchYelp = function(){
		eventsFactory.yelpSearch($scope.searchRequest).then((data)=>{
			$scope.results = data.businesses;
			$scope.latitude = data.region.center.latitude;
			$scope.longitude = data.region.center.longitude;
			$scope.locations = [];
			$scope.locationData = [];
			// console.log(data.businesses[0].coordinates.latitude)
			for(let x=0; x<data.businesses.length; x++){
				$scope.locations.push({
					pos:[data.businesses[x].coordinates.latitude, data.businesses[x].coordinates.longitude],
					name:data.businesses[x].name,
					rating:data.businesses[x].rating
				});;
				// console.log(data.businesses[x].name);
				// console.log(data.businesses[x].rating);
				$scope.locationData.push({name:data.businesses[x].name,rating:data.businesses[x].rating})
			}
			// console.log($scope.locations);
			// console.log($scope.locationData);
		});
	}

	NgMap.getMap().then((map) => {
		$scope.map = map;

  });

});