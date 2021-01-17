import React from 'react'
import SM2 from './SlankMerch2.JPG'

const Merch = () => {
	return (
		<div className='merch' id='merch'>
			<h1>Merch</h1>
			<div className='wrapper merch-row'>
				<img src={SM2} alt='Slank Shirts'></img>
				<div className='merch-text'>
					<h4>SLANK Shirts</h4>
					<p>
						Made with 100% cotton, Slank shirts come in both black and white.
					</p>
					<br />
					<p>
						Contact us to get your limited edition SLANK merch while supplies
						last!
					</p>
				</div>
			</div>
		</div>
	)
}

export default Merch
