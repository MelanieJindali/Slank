import React from 'react'
import Logo from './SlankWhiteLogo.png'
import Socials from '../Socials'
import Dropdown from 'react-bootstrap/Dropdown'
import Sidebar from '../Sidebar'

const Navbar = () => {
	return (
		<>
			<div className='header'>
				<Socials />
				<a href='/'>
					<img src={Logo} className='logo' id='home' alt='Slank logo white' />
				</a>
        <Sidebar />
			</div>
		</>
	)
}

export default Navbar
