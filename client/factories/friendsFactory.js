myApp.factory('friendsFactory', ['$http', function($http) {
	
  function friendsFactory(){
    this.profile = function(id, callback){
      console.log(id)
      $http.get('/user/'+id).then(function(returned_data){
        if(typeof(callback)=='function'){
          console.log(returned_data.data)
          user = returned_data.data;
          callback(user);
        }
      });
    }
    this.index = function(search, callback){
      $http.post('/userSearch', search).then(function(returned_data){
        if(typeof(callback)=='function'){
          console.log(returned_data.data)
          user = returned_data.data;
          callback(user);
        }
      });
    }
		this.sendFriendRequest = function(requestInfo, callback){
      $http.post('/sendFriendRequest', requestInfo).then(function(returned_data){
        console.log('2')
        if(typeof(callback)=='function'){
          user = returned_data.data;
          callback(user);
        }
      });
    }
    this.create = function(user, callback){
  		$http.post('/user', user).then(function(returned_data){
    		if(typeof(callback)=='function'){
        	user = returned_data.data;
        	callback(user);
    		}
  		});
    }
    this.login = function(data, callback){
      $http.post('/userLogin', data).then(function(returned_data){
          console.log(returned_data.data);
          if(typeof(callback) == 'function'){
            callback(returned_data.data);
          }
      });
    };

	}
	
  return new friendsFactory();
}]);