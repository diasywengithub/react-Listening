import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './../pages/login/index';
import Home from './../pages/home/index';

export default class RouterWith extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" component={Login} />
					<Route path="/home" component={Home} />
				</Switch>
			</Router>
		);
	}
}
