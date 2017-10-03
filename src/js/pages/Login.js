import React from "react";

import LoginStore from '../stores/LoginStore';
import * as LoginActions from '../actions/LoginActions';
import history from '../utils/history'
import Cookies from 'universal-cookie';

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
      const { uid, name, email } = this.state.userInfo
      const cookies = new Cookies();
      cookies.set('uid', uid);
      cookies.set('name', name);
      cookies.set('email', email);
      console.log("Cookies Set")
      this.props.history.push('/')
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