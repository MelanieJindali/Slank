import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'

const Sidebar = () => {
	const [sidebar, setSidebar] = useState(false)

	const showSidebar = () => setSidebar(!sidebar)

	return (
		<>
			<div className='navbar'>
				<Link to='#' className='menu-bars'>
					<FaIcons.FaSlidersH onClick={showSidebar} />
				</Link>
			</div>
			<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
				<ul className='nav-menu-items' onClick={showSidebar}>
					<li className='navbar-toggle'>
						<Link to='#' className='menu-bars'>
							<AiIcons.AiOutlineClose />
						</Link>
					</li>
					{SidebarData.map((item, index) => {
						return (
							<li key={index} className={item.cName}>
								<a href={item.path}>
									{item.icon}
									<span>{item.title}</span>
								</a>
							</li>
						)
					})}
				</ul>
			</nav>
		</>
	)
}

export default Sidebar
