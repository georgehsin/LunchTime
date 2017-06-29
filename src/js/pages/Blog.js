import React from "react";

import Post from '../components/Post';
import BlogStore from '../stores/BlogStore';
import * as BlogActions from '../actions/BlogActions';

export default class Blog extends React.Component {
  constructor(props) {
  	super(props);
  	this.getPosts = this.getPosts.bind(this);
  	console.log('1')
  	this.state = {
  		posts: [],
  	}
  }

  componentWillMount() {
  	console.log('2')
  	BlogStore.on('change', this.getPosts);
  }

  componentDidMount() {
  	console.log('3')
  	BlogActions.getPosts();
  }
 
  componentWillUnmount() {
    BlogStore.removeListener('change', this.getPosts);
  }

  getPosts() {
  	console.log('7')
  	this.setState({
  		posts: BlogStore.getAllPosts(),
  	})
  }

  render() {
    const {posts} = this.state;
    console.log({posts})
    const PostComponents = posts.map((post) => {
      return <Post key={post.id} {...post}/>;
    });
    console.log(PostComponents)
    return (
    	<div>
    		<h1>Hello World</h1>
    		<div class='row'>
    			{PostComponents}
    		</div>
    	</div>
    );
  }
}
