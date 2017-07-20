import dispatcher from '../dispatcher'
import axios from 'axios'

export function getProfile(id) {
	console.log(id)
	axios.get('/user/' + id).then((data) => {
		console.log(data.data)
		dispatcher.dispatch({              
			type:'GET_PROFILE',
			profile: data.data
		});
		return data.data
	});
}