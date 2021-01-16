import React from 'react'
import Slank1 from './DJSlank1.jpg'

const Hero = () => {
	return (
		<>
			<span className='hero-text'>
				<a href='https://distrokid.com/hyperfollow/slank1/quarantine-dreams' target="_blank">
					<button>LISTEN</button>
				</a>
			</span>
			<img src={Slank1} className='hero-img' alt='Slank and turntables' />
		</>
	)
}

export default Hero
