import {EventEmitter} from 'events';

import dispatcher from '../dispatcher' 

class HomeStore extends EventEmitter {
	constructor() {
		super();
		this.userSearchResults = []
	}

	getUserSearchResults() {
		// console.log('Home Store')
		return this.userSearchResults;
	}

	handleActions(action) {								
		switch(action.type) {								
			case 'GET_USERS': {
				// console.log('GET_USERS')
				// console.log(action)	
				this.userSearchResults = action.userSearchResults			
				this.emit('change');
				break
			}
		}
	}
}

const homeStore = new HomeStore;
dispatcher.register(homeStore.handleActions.bind(homeStore));  
export default homeStore;