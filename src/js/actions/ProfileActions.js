import dispatcher from '../dispatcher'
var database = firebase.database();

export function getProfile(uid) {
	console.log(uid)
	firebase.database().ref('/users/' + uid).once('value').then(function(snapshot) {
		console.log(snapshot.val())
		var username = (snapshot.val() && snapshot.val().username);
		dispatcher.dispatch({              
			type:'GET_PROFILE',
			profile: snapshot.val()
        });
	});
}

// import dispatcher from '../dispatcher'
// var database = firebase.database();

// export function login(input) {
// 	console.log(input)
//     console.log('working')
//     firebase.auth().signInWithEmailAndPassword(input.email, input.password).then((data) => {
// 		console.log(data);
//         dispatcher.dispatch({
// 			type:'LOGIN',
// 			status: data
// 		});
// 		dispatcher.dispatch({              
// 			type:'LOGGED_IN',
// 		});
// 	}).catch(function(error) {
//         var errorCode = error.code;
// 		var errorMessage = error.message;
// 		console.log(errorCode, errorMessage)
// 		if (errorCode == "auth/invalid-email" || errorCode == "auth/wrong-password") {
// 			alert(errorMessage)
// 			console.log(errorMessage)
// 		}
// 	});
// }