import {EventEmitter} from 'events';

import dispatcher from '../dispatcher' 

class RegisterStore extends EventEmitter {
	constructor() {
		super();
		this.userInfo = {};
	}

	getUserInfo() {
		return ({
			userInfo: this.userInfo
		})
	}

	handleActions(action) {								
		switch(action.type) {								
			case 'REGISTER': {
				this.userInfo = action.status;			
				this.emit("change");
				break
			}
		}
	}
}

const registerStore = new RegisterStore;
dispatcher.register(registerStore.handleActions.bind(registerStore));  
export default registerStore;