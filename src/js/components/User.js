import React from "react";

export default class User extends React.Component {
  render() {
  	const props = this.props
    return (
		  <div>
		  	<ul>
		  		<li>{props.name} - {props.email} <button>add friend</button></li>
		  	</ul>
		  </div>
    );
  }
}
