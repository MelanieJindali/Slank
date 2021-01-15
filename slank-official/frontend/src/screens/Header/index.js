import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './SlankWhiteLogo.png'
import Socials from '../components/Socials'

const Navbar = () => {
	return (
		<>
    <img src={Logo} className='logo' alt='Slank logo white'/>
			<NavLink exact to='/'>Home</NavLink>
			<NavLink to='/#about'>About</NavLink>
			<NavLink to='/#music'>Music</NavLink>
			<NavLink to='/#merch'>Merch</NavLink>
			<NavLink to='/#contact'>Contact</NavLink>
      <Socials />
		</>
	)
}

export default Navbar
