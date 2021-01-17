import React from 'react'
import { Link } from 'react-router-dom'

const MailButton = ({ mailto, label }) => {
	return (
		<button className='email-btn'>
			<Link
				to='#'
				onClick={(e) => {
					window.location = mailto
					e.preventDefault()
				}}
			>
				{label}
			</Link>
		</button>
	)
}

export default MailButton
