import dispatcher from '../dispatcher'
import axios from 'axios'

export function userSearch(search) {
	console.log(search)
	axios.post('/userSearch', {name: search}).then((data) => {
		// console.log(data.data);
		dispatcher.dispatch({              
			type:'GET_USERS',
			userSearchResults: data.data
		});
	});
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