import React from 'react'

const MusicVids = () => {
	return (
		<>
			<div className='collab'>
				<h1>Collaborations</h1>
				<p>Music that has been produced by SLANK.</p>
			</div>
			<div className='videos'>
				<div>
					<h3>Willy Bandz - "Piano Flow"</h3>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/Fbc6D30AP-I'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowfullscreen
					></iframe>
				</div>
				<div>
					<h3>Willy Bandz - "Don't Come Here"</h3>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/FTY3UGt10xU'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowfullscreen
					></iframe>
				</div>
			</div>
			<div className='wrapper'>
				<a href='https://www.instagram.com/matt_bslanky/' target='_blank'>
					<button className='cta-ig'>STAY UPDATED VIA INSTAGRAM</button>
				</a>
			</div>
		</>
	)
}

export default MusicVids
