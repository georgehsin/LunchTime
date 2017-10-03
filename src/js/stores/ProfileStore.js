import {EventEmitter} from 'events';

import dispatcher from '../dispatcher' 

class ProfileStore extends EventEmitter {
	constructor() {
		super();
		this.profile = ''
	}

	getProfile() {
		return this.profile
	}

	handleActions(action) {								
		switch(action.type) {								
			case 'GET_PROFILE': {
				let profile = action.profile			
				if (!profile.hasOwnProperty('friends')) {
					profile['friends'] = [] 
				}
				if (!profile.hasOwnProperty('rec_pending')) {
					profile['rec_pending'] = []
				}
				if (!profile.hasOwnProperty('sent_pending')) {
					profile['sent_pending'] = []
				}
				this.profile = action.profile
				console.log(this.profile)
				this.emit("change");
				break
			}
		}
	}
}

const profileStore = new ProfileStore;
dispatcher.register(profileStore.handleActions.bind(profileStore));  
export default profileStore;