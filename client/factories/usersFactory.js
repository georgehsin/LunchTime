myApp.factory('usersFactory', ['$http', function($http) {
	
  function usersFactory(){
		this.create = function(user, callback){
  		$http.post('/user', user).then(function(returned_data){
    		if(typeof(callback)=='function'){
          	blogpost = returned_data.data;
          	callback(blogpost);
    		}
  		});
    }
    this.login = function(data, callback){
      $http.post('/userLogin', data).then(function(returned_data){
          console.log(returned_data.data);
          if (typeof(callback) == 'function'){
              callback(returned_data.data);
          }
      });
    };

	}
	
  return new usersFactory();
}]);