import {EventEmitter} from 'events';

import dispatcher from '../dispatcher' 

class RegisterStore extends EventEmitter {
	constructor() {
		super();
	}

	handleActions(action) {								
		switch(action.type) {								
			case 'REGISTER': {
				console.log('registering')						
				this.emit("change");
				break
			}
		}
	}
}

const registerStore = new RegisterStore;
dispatcher.register(registerStore.handleActions.bind(registerStore));  
export default registerStore;