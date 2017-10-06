import React from "react";

import RegisterStore from '../stores/RegisterStore';
import * as RegisterActions from '../actions/RegisterActions';
import history from '../utils/history'
import Cookies from 'universal-cookie';

export default class Register extends React.Component {
  constructor() {
  	super()
  	this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.storeUserData = this.storeUserData.bind(this);
    this.state = {
			email: '',
			password: '',
			confirm: '',
			username: '',
			userInfo: {}
    }
	}
 
  componentWillMount() {
    RegisterStore.on('change', this.storeUserData)
  }

  componentWillUnmount() {
    RegisterStore.removeListener('change', this.storeUserData)
  }

  handleChange(event) {
		const name = event.target.name
    this.setState({
    	[name]: event.target.value
    });
  }

  handleSubmit(event) {
    // alert("User's name is " + this.state.username);
    RegisterActions.register(this.state)
		event.preventDefault();
	}
	
	storeUserData() {
		const userInfo = RegisterStore.getUserInfo()
		this.setState({
      userInfo: userInfo.userInfo
    });
		const { uid, name, email } = this.state.userInfo
		const cookies = new Cookies();
		cookies.set('uid', uid);
		cookies.set('name', name);
		cookies.set('email', email);
		this.props.history.push('/')
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
