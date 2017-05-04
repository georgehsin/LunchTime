myApp.factory('usersFactory', ['$http', function($http) {
	
  function usersFactory(){
    this.profile = function(id, callback){
      $http.get('/user/'+id).then(function(returned_data){
        if(typeof(callback)=='function'){
          user = returned_data.data;
          callback(user);
        }
      });
    }
    this.index = function(search, callback){
      $http.post('/userSearch', search).then(function(returned_data){
        if(typeof(callback)=='function'){
          user = returned_data.data;
          callback(user);
        }
      });
    }
    this.create = function(user, callback){
  		$http.post('/register', user).then(function(returned_data){
    		if(typeof(callback)=='function'){
        	user = returned_data.data;
        	callback(user);
    		}
  		});
    }
    this.login = function(data, callback){
      $http.post('/login', data).then(function(returned_data){
          if(typeof(callback) == 'function'){
            callback(returned_data.data);
          }
      });
    };

	}
	
  return new usersFactory();
}]);