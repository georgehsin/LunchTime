import dispatcher from '../dispatcher'
import axios from 'axios'

export function register(input) {
	console.log(input)
	console.log('working')
	axios.post('/register', {
		name: input.username, 
		email: input.email,
		password: input.password,
		confirm: input.confirm
	}).then((data) => {
		console.log('data back')
		console.log(data.data);
			dispatcher.dispatch({              
				type:'REGISTER',
				posts: data.data
			});
	});
}