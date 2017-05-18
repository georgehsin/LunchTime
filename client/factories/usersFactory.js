myApp.factory('usersFactory', ['$http', function($http) {
  
  function usersFactory(){
    this.profile = function(id){
      return $http.get('/user/'+id).then((data)=>{
        return data.data
      });
    }
    this.index = function(search){
      return $http.post('/userSearch', search).then((data)=>{  //Our promise is parsing our data
        return data.data
      });
    }
    this.create = function(user){
      return $http.post('/register', user).then((data)=>{
        return data.data
      });
    }
    this.login = function(data){
      return $http.post('/login', data).then((data)=>{
        return data.data
      });
    };

  }
  
  return new usersFactory();
}]);