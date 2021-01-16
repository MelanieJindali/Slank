import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './SlankWhiteLogo.png'
import Socials from '../Socials'

const Navbar = () => {
	return (
		<>
			<Socials />
      <a href='/'>
			<img src={Logo} className='logo' alt='Slank logo white' />
      </a>
			<NavLink exact to='/'>
				Home
			</NavLink>
			<NavLink to='/#about'>About</NavLink>
			<NavLink to='/#music'>Music</NavLink>
			<NavLink to='/#merch'>Merch</NavLink>
			<NavLink to='/#contact'>Contact</NavLink>
		</>
	)
}

export default Navbar
