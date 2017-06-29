import React from "react";

import LoginStore from '../stores/LoginStore';
import * as LoginActions from '../actions/LoginActions';

export default class Login extends React.Component {
  constructor() {
  	super()
  	this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
    }
  }

  handleChange(event) {
		const name = event.target.name
    this.setState({
    	[name]: event.target.value
    });
  }

  handleSubmit(event) {
    LoginActions.login(this.state)
    event.preventDefault();
  }

  render() {
    return (
		  <div>
      	<h1>Login</h1>
      	<form onSubmit={this.handleSubmit}>
				  <p><label>
				    Email:
				    <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
				  </label></p>
				  <p><label>
				    Password
				    <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
				  </label></p>
				  <input type="submit" value="Submit" />
				</form>
		  </div>
    );
  }
}
