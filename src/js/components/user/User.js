import React from "react";

import FriendButton from './FriendButton';

export default class User extends React.Component {
  render() {
  	const { _id, name, email } = this.props
    return (
		  <div>
		  	<ul>
		  		<li>{name} - {email} <FriendButton key={_id} {...this.props}/> </li>
		  	</ul>
		  </div>
    );
  }
}
