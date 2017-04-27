var validate = function(){
	return{
		name: function(name){
			if(name){
				return false;
			}
			else{
				return true;
			}
		},
		email: function(email){
			if(email){
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return !re.test(email);
			}
			else{
				return true;
			}
		},
		password: function(password){
			if(password){
				var re = new RegExp("^([A-Za-z0-9]{8,})$");
				return !re.test(password);
			}
			else{
				return true;
			}
		},
		confirm: function(pass, confirm){
			if(confirm == pass){
				return false;
			}
			else{
				return true;
			}
		}
	}
}();