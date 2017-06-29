import React from "react";
import {Link} from 'react-router';

import User from '../components/User';
import HomeStore from '../stores/HomeStore';
import * as HomeActions from '../actions/HomeActions';

export default class Home extends React.Component {
  constructor(props) {
  	super(props);
  	this.getUserSearchResults = this.getUserSearchResults.bind(this)
  	this.handleSubmit = this.handleSubmit.bind(this);
  	this.handleChange = this.handleChange.bind(this);
  	this.state = {
  		search: '',
  		userSearchResults: [],
  		results: false
  	}
  }

  componentWillMount() {
  	console.log('1')
  	HomeStore.on('change', this.getUserSearchResults)
  }
 
  componentWillUnmount() {
  	console.log('2')
    HomeStore.removeListener('change', this.getUserSearchResults);
  }

  getUserSearchResults() {
  	console.log('getting search results')
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
  	console.log(this.state.search)
  	HomeActions.userSearch(this.state.search)
  	event.preventDefault();
  }

  // componentDidUpdate() {
  // 	console.log('3')
  // 	// this.setState({
  // 	// 	userSearchResults: HomeStore.getUserSearchResults(),
  // 	// })
  // 	const {userSearchResults} = this.state
  // 	console.log({userSearchResults})
  // 	const UserComponents = userSearchResults.map((user) => {
  // 		return <User key={user.id} {...user}/>;
  // 	});
		// console.log(UserComponents)
  // }

  render() {
  	const results = this.state.results
		const {userSearchResults} = this.state
  	if (results) {
			const UserComponents = userSearchResults.map((user) => {
				return <User key={user.id} {...user}/>;
	  	});
			console.log(UserComponents)
		}
		else{
			console.log('here')
			const UserComponents = null
			// return UserComponents
		}
		return (
			<div>
				<h1>Create New Lunch Time</h1> <Link to='login'><button>+</button></Link>
				<form onSubmit={this.handleSubmit}>
					<input type="text" name="search" placeholder='Search by name or email' value={this.state.search} onChange={this.handleChange}/>
					<input type="submit" value="Submit" />
					</form>
					<div>
						{UserComponents}
					</div>
			</div>
    );
  }
}
