import React from 'react';
import { Nav, Navbar, NavItem, NavbarBrand, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/css/main.css';
import '../assets/css/noscript.css';

// import {Navlink} from 'react-router-dom'







export default function Navigation() {


	return (

		<section id='sidebar' style={{overflow: "hidden"}}>
			<div className='inner'>
				<Navbar >
			<section id='sidebar'>
			<div className='inner'>
				<NavbarBrand></NavbarBrand>
					<Nav>
						<NavItem>
							<NavLink className='nav-link' href='#intro' style={{width: "150%", textAlign: "left"}}>
								Home Page
							</NavLink>
						</NavItem>
						
						<NavItem>
							<NavLink className='nav-link' href='#one' style={{width: "150%", textAlign: "left"}}>
								My Projects
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className='nav-link' href='#two' style={{width: "150%", textAlign: "left"}}>
								I'm a real person
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className='nav-link' href='#three' style={{width: "150%", textAlign: "left"}}>
								Let's connect!
							</NavLink>
						</NavItem>
					</Nav>
			</div>
			</section>
		</Navbar>
			</div>
		</section>

	);
};









