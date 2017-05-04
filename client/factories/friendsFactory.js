myApp.factory('friendsFactory', ['$http', function($http) {
	
  function friendsFactory(){
    this.add = function(addInfo, callback){
      $http.put('/user', addInfo).then(function(returned_data){
        if(typeof(callback)=='function'){
          user = returned_data.data;
          callback(user);
        }
      });
    }
		this.sendFriendRequest = function(requestInfo, callback){
      $http.post('/sendFriendRequest', requestInfo).then(function(returned_data){
        if(typeof(callback)=='function'){
          user = returned_data.data;
          callback(user);
        }
      });
    }
    this.showFriends = function(id, callback){
      $http.get('/showFriends/'+id).then(function(returned_data){
        if(typeof(callback)=='function'){
          user = returned_data.data;
          callback(user);
        }
      });
    }
    this.search = function(search, callback){
      console.log(search)
      $http.post('/friendSearch', search).then(function(returned_data){
        if(typeof(callback)=='function'){
          user = returned_data.data;
          callback(user);
        }
      });
    }
	}
	
  return new friendsFactory();
}]);