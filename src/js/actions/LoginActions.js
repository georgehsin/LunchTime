import dispatcher from '../dispatcher'
import axios from 'axios'

export function login(input) {
	console.log(input)
	axios.post('/login', {
		email: input.email,
		password: input.password,
	}).then((data) => {
		console.log(data.data);
			dispatcher.dispatch({              
				type:'LOGIN',
				posts: data.data
			});
	});
}