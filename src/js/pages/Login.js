import React from "react";

import LoginStore from '../stores/LoginStore';
import * as LoginActions from '../actions/LoginActions';
import history from '../utils/history'
import Cookies from 'cookies-js'

export default class Login extends React.Component {
  constructor() {
  	super()
  	this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginValid = this.loginValid.bind(this);
    this.state = {
      invalid: false,
      userInfo: {}
    }
  }

  componentWillMount() {
    LoginStore.on('change', this.loginValid)
    // console.log('count', LoginStore.listenerCount('change'))
  }
 
  componentWillUnmount() {
    LoginStore.removeListener('change', this.loginValid)
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

  loginValid() {
    const loginValid = LoginStore.loginValid()
    this.setState({
      invalid: loginValid.invalid,
      success: loginValid.success,
      userInfo: loginValid.userInfo,
    });
    if (!loginValid.invalid) {
      this.props.history.push('/')
      const { _id, name, email } = this.state.userInfo
      Cookies.set('userID', _id);
      Cookies.set('name', name);
      Cookies.set('email', email);
    }
  }

  render() {
    let invalid = null
    if (this.state.invalid) {
      invalid = <p>incorrect email/password</p>
    }
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
        {invalid}
      </div>
    );
  }
}