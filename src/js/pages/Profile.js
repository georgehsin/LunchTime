import React from "react";

import ProfileStore from '../stores/ProfileStore';
import * as ProfileActions from '../actions/ProfileActions';
import User from '../components/user/User';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default class Profile extends React.Component {
  constructor() {
  	super()
    this.getProfile = this.getProfile.bind(this)
    this.state = {
      profile: {
        friends: [],
        rec_pending: [],
        sent_pending: []
      },
    }
  }

  componentWillMount() {
    console.log('1')
    ProfileStore.on('change', this.getProfile)
  }

  componentDidMount() {
    console.log('2')
    const cookies = new Cookies();
    ProfileActions.getProfile(cookies.get('uid'));
  }

  componentWillUnmount() {
    ProfileStore.removeListener('change', this.getProfile)
  }

  getProfile() {
    const cookies = new Cookies();
    this.setState({ 
      profile: ProfileStore.getProfile(cookies.get('uid'))
    })
  }

  render() {
    const { name, email, friends, rec_pending, sent_pending } = this.state.profile
    console.log(friends)
    const Friends = friends.map((friend) => {
      return <User key={friend._id} {...friend}/>;
    });
    const requested = rec_pending.map((request) => {
      return <User key={request._id} {...request}/>;
    });
    const sentRequest = sent_pending.map((request) => {
      return <User key={request._id} {...request}/>;
    });
    return (
		  <div>
        <h1>Profile</h1>
        <h3>{name}</h3>
        <h3>{email}</h3>
        <h3>Friends</h3>
        {Friends}
        <h3>New Friend Requests</h3>
        {requested}
        <h3>Friend Requests Sent</h3>
        {sentRequest}
		  </div>
    );
  }
}
