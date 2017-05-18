myApp.factory('eventsFactory', ['$http', function($http){

	function eventsFactory(){
		this.allfriends = function(id){
			return $http.get('/events/'+id).then((data)=>{
				return data.data
			});
		}
    this.yelpSearch = function(params){
      return $http.post('/search', params).then((data)=>{
        return data.data
      });
    }
	}
	return new eventsFactory();
}]);