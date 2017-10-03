import dispatcher from '../dispatcher'
var database = firebase.database();

export function register(input) {
	console.log(input)
    console.log('working')
    firebase.auth().createUserWithEmailAndPassword(input.email, input.password)
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
	})
    .then((data) => {
        console.log('Saving to database')
        firebase.database().ref('users/' + data.uid).set({
			uid: data.uid,
			name: input.username,
        });
        dispatcher.dispatch({              
            type:'REGISTER',
            status: data
        });
	});
}
