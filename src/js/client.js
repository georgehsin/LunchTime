import React from "react";  		
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from './pages/Layout'
import Blog from './pages/Blog'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Event from './pages/Event'

const app = document.getElementById('app');

ReactDOM.render(
		<Router history={hashHistory}>
			<Route path='/' component={Layout}> 
				<IndexRoute component={Home}></IndexRoute>
				<Route path='login' component={Login}></Route>
				<Route path='register' component={Register}></Route>
				<Route path='profile' component={Profile}></Route>
				<Route path='event' component={Event}></Route>
			</Route>
		</Router>,
app);