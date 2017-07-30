import React, { Component } from 'react';
//components
import ToggleMenu from '../togglemenu/ToggleMenu';
//style
import './navbar.css';

class Navbar extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className='navbar'>
				<h1>Daphoty.com</h1>
				<ToggleMenu />
			</div>
		);
	}
}

export default Navbar;