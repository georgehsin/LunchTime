import React from "react";
import { Route, Redirect } from 'react-router'

import RegisterStore from '../stores/RegisterStore';
import * as RegisterActions from '../actions/RegisterActions';

export default class Login extends React.Component {
  constructor() {
  	super()
  	this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
    	success: false,
    }
  }

  handleChange(event) {
		const name = event.target.name
    this.setState({
    	[name]: event.target.value
    });
  }

  handleSubmit(event) {
    alert("User's name is " + this.state.username);
    this.setState({
    	success: true
    });
    RegisterActions.register(this.state)
    event.preventDefault();
  	
   //  if (this.state.success) {
  	// 	console.log(hello)
   //    return(
  	// 		<Redirect to='/'/>
  	// 	)
  	// }
  }


  render() {
    return (
		  <div>
      	<h1>Register</h1>
      	<form onSubmit={this.handleSubmit}>
				  <p><label>
				    Name:
				    <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
				  </label></p>
				  <p><label>
				    Email:
				    <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
				  </label></p>
				  <p><label>
				    Password
				    <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
				  </label></p>
				  <p><label>
				    Confirm Password
				    <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange}/>
				  </label></p>
				  <input type="submit" value="Submit" />
				</form>
		  </div>
    );
  }
}
