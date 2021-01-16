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
					<NavLink className='nav-item' to='/#about'>About</NavLink>
					<NavLink className='nav-item' to='/#music'>Music</NavLink>
					<NavLink className='nav-item' to='/#merch'>Merch</NavLink>
					<NavLink className='nav-item' to='/#contact'>Contact</NavLink>
				</div>
			</div>
		</>
	)
}

export default Navbar
