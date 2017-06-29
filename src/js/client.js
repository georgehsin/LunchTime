import React from "react";  		
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from './pages/Layout'
import Blog from './pages/Blog'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Layout}> 
			<IndexRoute component={Home}></IndexRoute>
			<Route path='login' component={Login}></Route>
			<Route path='register' component={Register}></Route>
		</Route>
	</Router>,
app);