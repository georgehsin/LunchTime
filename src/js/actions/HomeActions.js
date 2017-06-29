import dispatcher from '../dispatcher'
import axios from 'axios'

export function userSearch(search) {
	console.log(search)
	axios.post('/userSearch', {name: search}).then((data) => {
		console.log(data.data);
			dispatcher.dispatch({              
				type:'GET_USERS',
				userSearchResults: data.data
			});
	});
}