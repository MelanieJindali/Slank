import React from 'react'
import { Link } from 'react-router-dom'
import * as faIcons from 'react-icons/fa'

const Sidebar = () => {
	return (
		<>
			<div className='navbar'>
				<Link to='#' className='menu-bars'>
					<faIcons.FaBars />
				</Link>
			</div>
			<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
				<ul className='nav-menu-items'>
					<li className='navbar-toggle'>
						<Link to='#' className='menu-bars'>
							<AiIcons.AiOutlineClose />
						</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Sidebar
