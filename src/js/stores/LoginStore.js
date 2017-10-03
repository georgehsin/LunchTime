import {EventEmitter} from 'events';

import dispatcher from '../dispatcher' 

class LoginStore extends EventEmitter {
	constructor() {
		super();
		this.invalid = false
		this.success = false
		this.userInfo = {}
	}

	loginValid() {
		return ({
			invalid: this.invalid,
			success: this.success,
			userInfo: this.userInfo,
		})
	}

	handleActions(action) {								
		switch(action.type) {								
			case 'INVALID_LOGIN': {			
				this.invalid = true
				this.emit("change");
				break
			}
			case 'LOGIN': {			
				this.invalid = false
				this.success = true
				this.userInfo = action.status
				this.emit("change");
				break
			}
		}
	}
}

const loginStore = new LoginStore;
dispatcher.register(loginStore.handleActions.bind(loginStore));  
export default loginStore;