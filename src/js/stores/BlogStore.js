import {EventEmitter} from 'events';

import dispatcher from '../dispatcher' 

class BlogStore extends EventEmitter {
	constructor() {
		super();
		this.posts = {}
	}

	getAllPosts() {
		console.log('8')
		return this.posts;
	}

	handleActions(action) {								
		switch(action.type) {								
			case 'GET_POSTS': {
				// console.log('6')
				this.posts = action.posts
				// console.log(this.posts)  						
				this.emit("change");
				break
			}
		}
	}
}

const blogStore = new BlogStore;
dispatcher.register(blogStore.handleActions.bind(blogStore));  
export default blogStore;
