myApp.factory('friendsFactory', ['$http', function($http) {
  
  function friendsFactory(){
    this.add = function(addInfo){
      return $http.put('/user', addInfo).then((data)=>{
        return data.data
      });
    }
    this.sendFriendRequest = function(requestInfo){
      return $http.post('/sendFriendRequest', requestInfo).then((data)=>{
        return data.data
      });
    }
    this.showFriends = function(id){
      return $http.get('/showFriends/'+id).then((data)=>{
        return data.data
      });
    }
    this.search = function(search){
      console.log(search)
      return $http.post('/friendSearch', search).then((data)=>{
        return data.data
      });
    }
  }
  
  return new friendsFactory();
}]);