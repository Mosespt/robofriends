import React, { Component } from 'react';
import SearchBox from '../components/SearchBox.js'
import CardList from '../components/CardList.js';
// import {robots} from '../src/robots.js';
import Scroll from '../components/Scroll.js'
import './MyApp.css'

class MyApp extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));
	}
	
	OnSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	render () {
		const { robots, searchfield } = this.state;
		const filterRobot = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		return (!robots.length) ?
			<h1 className="tc">Loading...</h1> :
			(
				<div className="tc">
					<h1 className="f1">RoboFriends</h1>
					<SearchBox searchChange={this.OnSearchChange} />
					<Scroll>
						<CardList robots={filterRobot} />
					</Scroll>
				</div>
			);
	}
		
}

export default MyApp;