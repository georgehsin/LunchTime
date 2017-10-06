import dispatcher from '../dispatcher'
import axios from 'axios'

// export function userSearch(search) {
// 	console.log(search)
// 	axios.post('/userSearch', {name: search}).then((data) => {
// 		// console.log(data.data);
// 		dispatcher.dispatch({              
// 			type:'GET_USERS',
// 			userSearchResults: data.data
// 		});
// 	});
// }

export function userSearch(search) {
	var ref = firebase.database().ref("users")
	ref.orderByChild("name")
	.startAt(search.toLowerCase())
	.endAt(search.toLowerCase()+"\uf8ff")
	.on("child_added", function(snapshot) {
		console.log(snapshot.val().name)
	});
		// let objects = []

		// // .once("value")
		// snapshot.forEach(function (childSnap) {
		// 	console.log(childsnap.key())
		// 	objects.push({
		// 	  id: childSnap.key(),
		// 	  name: childSnap.val().name
		// 	});
		// });
		// console.log(objects)


		// console.log(snapshot.child('name').val());
		// console.log(snapshot.child("name").val())
		// console.log(data.data);
		// dispatcher.dispatch({              
		// 	type:'GET_USERS',
		// 	userSearchResults: data.data
		// });
}

export function acceptFriendRequest(addInfo) {
	console.log('friend accepted')
	axios.put('/user', addInfo)
	// .then((data) => {
	// 	dispatcher.dispatch({              
	// 		type:'GET_USERS',
	// 		userSearchResults: data.data
	// 	});
	// });
}

export function sendFriendRequest(addInfo) {
	axios.post('/sendFriendRequest', addInfo).then((data) => {
		dispatcher.dispatch({              
			type:'SEND_FRIEND_REQUEST',
		});
	});
}

export function deleteUser(userID) {
	console.log('handling')
	axios.post('/user/' + userID).then((data) => {
		console.log('deleted')
		dispatcher.dispatch({              
			type:'DELETE_USER',
		});
	});
}