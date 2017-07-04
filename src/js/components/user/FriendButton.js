import React from "react";
import Cookies from 'cookies-js'

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.friendStatus = this.friendStatus.bind(this)
  }

	friendStatus() {
		const { friends, sent_pending, rec_pending } = this.props
		const userID = Cookies.get('userID')
		if (rec_pending.includes(userID)) {
			return (
				<span>(Friend Request Sent)</span>
			);
		}
		else if (friends.includes(userID)) {
			return (
				<span>(Friends)</span>
			);	
		}
		else {
			return (
				<button>Add Friend</button>
			);		
		}
	}

  render() {
  	const props = this.props

    return (
				<span>{this.friendStatus()}</span>
    );
  }
}
