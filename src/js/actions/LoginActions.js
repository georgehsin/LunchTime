import dispatcher from '../dispatcher'
import axios from 'axios'

export function login(input) {
	console.log('2')
	axios.post('/login', {
		email: input.email,
		password: input.password,
	}).then((data) => { 
			if (data.data.invalid){
				dispatcher.dispatch({
					type:'INVALID_LOGIN',
				});
			} 
			else {
				dispatcher.dispatch({
					type:'LOGIN',
					status: data.data
				});
				dispatcher.dispatch({              
					type:'LOGGED_IN',
				});
			}
	});
}