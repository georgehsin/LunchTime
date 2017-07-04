import React from "react";
import {Link} from 'react-router';

import User from '../components/user/User';
import HomeStore from '../stores/HomeStore';
import * as HomeActions from '../actions/HomeActions';

export default class Home extends React.Component {
  constructor(props) {
  	super(props);
  	this.getUserSearchResults = this.getUserSearchResults.bind(this)
  	this.handleSubmit = this.handleSubmit.bind(this);
  	this.handleChange = this.handleChange.bind(this);
  	this.UserComponents = this.UserComponents.bind(this);
  	this.state = {
  		search: '',
  		userSearchResults: [],
  		results: false
  	}
  }

  componentWillMount() {
    HomeStore.on('change', this.getUserSearchResults)
  }
 
  componentWillUnmount() {
    HomeStore.removeListener('change', this.getUserSearchResults);
  }

  getUserSearchResults() {
    this.setState({
      results: true,
      userSearchResults: HomeStore.getUserSearchResults(),
    });
  }

  handleChange(event) {
    const name = event.target.name
    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmit(event) {
    this.setState({
      search: ''
    });
    HomeActions.userSearch(this.state.search)
    event.preventDefault();
  }

  UserComponents() {
    const results = this.state.results
    const {userSearchResults} = this.state
    if (results) {
      const UserComponents = userSearchResults.map((user) => {
        return <User key={user._id} {...user}/>;
      });
      return UserComponents
    }
    else{
      return (
        null
      )
    }
  }

  render() {
    return (
      <div>
        <h1>Create New Lunch Time</h1> <Link to='event'><button>+</button></Link>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="search" placeholder='Search by name or email' value={this.state.search} onChange={this.handleChange}/>
          <input type="submit" value="Submit" />
          </form>
					<div>
						{this.UserComponents()}
					</div>
			</div>
    );
  }
}
