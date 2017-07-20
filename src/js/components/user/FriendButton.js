import React from "react";
import Cookies from 'cookies-js'

import * as HomeActions from '../../actions/HomeActions'

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.friendStatus = this.friendStatus.bind(this)
    this.addFriend = this.addFriend.bind(this)
    this.acceptFriend = this.acceptFriend.bind(this)
    this.userID = Cookies.get('userID')
    // this.handleDelete = this.handleDelete.bind(this)
  }

	friendStatus() {
		const { friends, sent_pending, rec_pending } = this.props
		if (friends.includes(this.userID)) {
			return (
				<span>(Friends)</span>
			);	
		}
		else if (rec_pending.includes(this.userID)) {
			return (
				<span>(Friend Request Sent)</span>
			);
		}
		else if (sent_pending.includes(this.userID)) {
			return (
				<button onClick={this.acceptFriend}>Accept Friend Request</button>
			);	
		}
		else {
			return (
				<button onClick={this.addFriend}>Add Friend</button>
			);		
		}
	}

	// Add a Friend 
	addFriend() {
		const requestInfo = {
			'send_id': this.userID,
			'recieve_id': this.props._id
		}
		this.props.rec_pending.push(this.userID)
		this.friendStatus()
		// force update to update friend status in parenthesis to the right of user info
		this.forceUpdate()
		HomeActions.sendFriendRequest(requestInfo)
	}

	// Accept a Friend request and move from recieved pending to friends
	acceptFriend() {
		const addInfo = {
			'send_id': this.props._id,
			'recieve_id': this.userID
		}
		this.props.friends.push(this.userID)
		this.friendStatus()
		this.forceUpdate()
		HomeActions.acceptFriendRequest(addInfo)
	}

	// handleDelete() {
	// 	console.log('handling')
	// 	console.log(this.props._id)
	// 	HomeActions.deleteUser(this.props._id)
	// 	this.friendStatus()
	// }

  render() {
    return (
			<span>{this.friendStatus()}</span> 
    );
  }
}
