import React from 'react'
import SPDJ1 from './SPDJ1.jpg'
import SPDJ2 from './SPDJ2.JPG'

const SPDJ = () => {
	return (
		<div className='spdj'>
			<div className='row'>
				<div className='spdj-text'>
					<h1>Making music with the locals</h1>
					<p>Here is a blurb about SPDJ and Slank's contribution</p>
				</div>
				<img src={SPDJ1} alt='SPDJ club' />
			</div>
			<div className='row'>
        <img src={SPDJ2} alt='SPDJ club' />
				<div className='spdj-text'>
					<h1>Making music with the locals</h1>
					<p>Here is a blurb about SPDJ and Slank's contribution</p>
				</div>
				
			</div>
		</div>
	)
}

export default SPDJ
