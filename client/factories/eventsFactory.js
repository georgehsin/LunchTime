myApp.factory('eventsFactory', ['$http', function($http){

	function eventsFactory(){
		this.allfriends = function(id, callback){
			$http.get('/events/'+id).then(function(data){
				if(typeof(callback)=='function'){
					callback(data);
				}
			});
		}
    this.yelpSearch = function(params, callback){
      $http.post('/search', params).then(function(returned_data){
        if (typeof(callback) == 'function'){
            callback(returned_data.data);
        }
      });
    }
	}
	return new eventsFactory();
}]);