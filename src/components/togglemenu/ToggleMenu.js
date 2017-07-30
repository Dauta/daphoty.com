import React, {Component} from 'react';
//css
import './togglemenu.css';
import '../../external/hamburgers/dist/hamburgers.css';

class ToggleMenu extends Component {
	constructor(props){
		super(props);
		this.state = {
			active: 'not-active'
		};
	}

	setActive = () => {
		if(this.state.active === 'is-active')
			this.setState({active: 'not-active'});
		else
			this.setState({active: 'is-active'});
	}

	render(){
		return(
			<button className={`toggle-menu hamburger hamburger--vortex ${this.state.active}`} type='button' onClick={this.setActive}>
				<span className="hamburger-box">
			    <span className="hamburger-inner"></span>
			  </span>
			</button>
		)
	}
}

export default ToggleMenu;