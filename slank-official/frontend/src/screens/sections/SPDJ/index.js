import React from 'react'
import SPDJ1 from './SPDJ1.jpg'
import SPDJ2 from './SPDJ2.JPG'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab)

const SPDJ = () => {
	return (
		<div className='spdj'>
			<h1>Society of Professional DJs (SPDJ)</h1>
			<div className='row'>
				<div className='spdj-text'>
					<h2>Making music with the locals</h2>
					<p>
						SPDJ is an encouraging environment and community for artists to
						network, collaborate, and learn from each other through professional
						developmental activities. In addition to learning how to dj, the
						club serves as a platform for artists to display their work.
					</p>
				</div>
				<img src={SPDJ1} alt='SPDJ club' />
			</div>
			<div className='row'>
				<img src={SPDJ2} alt='SPDJ club' />
				<div className='spdj-text'>
					<h2>Join us</h2>
					<p>
						Find all the latest content regarding the club and find our how you
						can be a part of the community.
					</p>
					<div className='spdj-icons'>
						<a href='https://www.instagram.com/spdj.uw/?hl=en' target='_blank'>
							<FontAwesomeIcon icon={['fab', 'instagram']} />
						</a>
						<a href='https://www.facebook.com/SPDJUW/' target='_blank'>
							<FontAwesomeIcon icon={['fab', 'facebook']} />
						</a>
						<a href='https://discord.com/invite/Mxem5wFN' target='_blank'>
							<FontAwesomeIcon icon={['fab', 'discord']} />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SPDJ
