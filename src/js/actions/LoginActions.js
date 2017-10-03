import dispatcher from '../dispatcher'
var database = firebase.database();

export function login(input) {
    console.log('working')
	firebase.auth().signInWithEmailAndPassword(input.email, input.password).then((data) => {
        dispatcher.dispatch({
			type:'LOGIN',
			status: data
		});
		dispatcher.dispatch({              
			type:'LOGGED_IN',
		});
	}).catch(function(error) {
        var errorCode = error.code;
		var errorMessage = error.message;
		console.log(errorCode, errorMessage)
		if (errorCode == "auth/invalid-email" || errorCode == "auth/wrong-password") {
			alert(errorMessage)
			console.log(errorMessage)
		}
	});
}