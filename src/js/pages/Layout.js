import React from "react";
import {Link} from 'react-router';
import Cookies from 'universal-cookie';
import LayoutStore from '../stores/LayoutStore';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.loggedIn = this.loggedIn.bind(this)
    this.getLoginStatus = this.getLoginStatus.bind(this)
    this.logout = this.logout.bind(this)
    this.state = {
      login: false
    }
  }

  componentWillMount() {
    LayoutStore.on('change', this.getLoginStatus)
  }
 
  componentWillUnmount() {
    LayoutStore.removeListener('change', this.getLoginStatus)
  }

  getLoginStatus() {
    const cookies = new Cookies();
    const user = cookies.get('uid')
    this.setState({
      login: true,
    });
  }

  logout() {
    this.setState({
      login: false,
    });
    const cookies = new Cookies();
    cookies.remove('uid')
    cookies.remove('name')
    cookies.remove('email')
  }

  loggedIn() {
    const cookies = new Cookies();
    const user = cookies.get("uid")
    console.log(user)
    if (user) {
      return (
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='profile'>Profile</Link></li>
            <li><Link to='/' onClick={this.logout} >Logout</Link></li> 
          </ul>
        </div>
      )
    }
    else {
      return (
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='login'>Login</Link></li>
            <li><Link to='register'>Register</Link></li>
          </ul>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to='/' className="navbar-brand">LunchTime!</Link>
            </div>
            {this.loggedIn()}
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
