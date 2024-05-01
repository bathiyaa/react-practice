import React, { Component } from 'react';
import tachyons from 'tachyons';

class Navbar extends Component {

	render () {

		return (

			<div>
				<ul>
					<li> Home </li>
					<li> QCards </li>
					<li> QPapers </li>
					<li> Contact </li>
				</ul>
			</div>		
			);
	}
}

export default Navbar;