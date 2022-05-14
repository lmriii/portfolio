import React, { Fragment } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, NavbarBrand, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import {Navlink} from 'react-router-dom'



interface Props {
	

}



export default function Navigation({}: Props) {


	return (
		<React.Fragment>
		<Navbar >
			<section id='sidebar'>
			<div className='inner'>
				<NavbarBrand></NavbarBrand>
					<Nav>
						<NavItem>
							<NavLink className='nav-link' to='/'>
								Welcome
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className='nav-link' to='/'>
								Who is Michael
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className='nav-link' to='/'>
								What I Do
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className='nav-link' to='/'>
								Get In Touch
							</NavLink>
						</NavItem>
					</Nav>
			</div>
			</section>
		</Navbar>
{/* 
			<ul>
				<li><a href="#intro">Welcome</a></li>
				<li><a href="#one">Who we are</a></li>
				<li><a href="#two">What we do</a></li>
				<li><a href="#three">Get in touch</a></li>
			</ul> */}
			
		</React.Fragment>
	);
};









