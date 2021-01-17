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
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					></iframe>
					<p>A description of the inspiration behind the instrumental...</p>
				</div>
				<div>
					<h3>Willy Bandz - "Don't Come Here"</h3>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/FTY3UGt10xU'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					></iframe>
					<p>A description of the inspiration behind the instrumental...</p>
				</div>
			</div>
			<div className='wrapper ig-cta'>
				<a href='https://www.instagram.com/matt_bslanky/' target='_blank'>
					<p>STAY UPDATED VIA INSTAGRAM</p>
				</a>
			</div>
		</>
	)
}

export default MusicVids
