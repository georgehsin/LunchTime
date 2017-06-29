import React from "react";

export default class Post extends React.Component {
  render() {
  	const props = this.props
    return (
		  <div class='col-md-4'>
		  	<h2>{props.title}</h2>
		  	<p>{props.post}</p>
		  	<p>{props.created_at}</p>
		  </div>
    );
  }
}
