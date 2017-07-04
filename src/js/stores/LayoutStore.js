import {EventEmitter} from 'events';

import dispatcher from '../dispatcher' 

class LayoutStore extends EventEmitter {
	constructor() {
		super();
		// this.login = false
	}

	getLogin() {
		return this.login;
	}

	handleActions(action) {								
		switch(action.type) {								
			case 'LOGGED_IN': {
				this.emit('change');
				break
			}
		}
	}
}

const layoutStore = new LayoutStore;
dispatcher.register(layoutStore.handleActions.bind(layoutStore));  
export default layoutStore;