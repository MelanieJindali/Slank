import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './SlankWhiteLogo.png'
import Socials from '../Socials'

const Navbar = () => {
	return (
		<>
			<div className='header'>
				<Socials />
				<a href='/'>
					<img src={Logo} className='logo' alt='Slank logo white' />
				</a>
				<div className='nav-items'>
					<NavLink className='nav-item' exact to='/'>
						Home
					</NavLink>
					<a className='nav-item' href='#about'>About</a>
					<a className='nav-item' href='#music'>Music</a>
					<a className='nav-item' href='#merch'>Merch</a>
					<a className='nav-item' href='#contact'>Contact</a>
				</div>
			</div>
		</>
	)
}

export default Navbar
