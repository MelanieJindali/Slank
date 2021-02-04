import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './SlankWhiteLogo.png'
import Socials from '../Socials'
import Dropdown from 'react-bootstrap/Dropdown'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
	return (
		<>
			<div className='header'>
				<Socials />
				<a href='/'>
					<img src={Logo} className='logo' id='home' alt='Slank logo white' />
				</a>
			</div>
			<Dropdown>
				<Dropdown.Toggle
					className='toggle'
					id='dropdown-basic'
				></Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href='#home'>Home</Dropdown.Item>
					<Dropdown.Item href='#about'>About</Dropdown.Item>
					<Dropdown.Item href='#music'>Music</Dropdown.Item>
					<Dropdown.Item href='#merch'>Merch</Dropdown.Item>
					<Dropdown.Item href='#contact'>Contact</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</>
	)
}

export default Navbar
