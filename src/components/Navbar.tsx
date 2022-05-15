import React, { Fragment } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, NavbarBrand, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/css/main.css';
import '../assets/css/noscript.css';
// import {Navlink} from 'react-router-dom'



interface Props {


}



export default function Navigation({ }: Props) {


	return (

		<section id='sidebar'>
			<div className='inner'>
				<Navbar className='Navbar'>


					<NavbarBrand></NavbarBrand>
					<Nav>
						<NavItem>
							<NavLink className='nav-link' to='/'>
								<a href='#intro'>Welcome</a>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className='nav-link' to='/'>
								<a href='#one'>Who is Michael</a>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className='nav-link' to='/'>
								<a href='#two'>What I Do</a>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className='nav-link' to='/'>
								<a href='#three'>Get In Touch</a>
							</NavLink>
						</NavItem>
					</Nav>


				</Navbar>
			</div>
		</section>

	);
};









