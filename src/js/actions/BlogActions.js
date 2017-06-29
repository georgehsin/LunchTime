import dispatcher from '../dispatcher'
import axios from 'axios'

export function AppAction(id) {
	dispatcher.dispatch({              
	type:'DELETE_TODO',
	task
	});
}

export function getPosts() {
	console.log('4')
	axios.get('/blog').then((data) => {
		console.log('5')
		console.log(data.data);
			dispatcher.dispatch({              
				type:'GET_POSTS',
				posts: data.data
			});
	});
}