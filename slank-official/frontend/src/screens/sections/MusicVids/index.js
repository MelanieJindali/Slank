import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab)

const MusicVids = () => {
	return (
		<>
			<div className='collab'>
				<h1>Collaborations</h1>
				<p>
					Music that has been produced by Slank in collaboration with the
					Madison community and beyond.
				</p>
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
					<div className='willy'>
						<p>Follow Willy Bandz on Instagram and Facebook.</p>
						<div>
							<a
								href='https://www.instagram.com/willy_bandz74/?hl=en/'
								target='_blank'
							>
								<FontAwesomeIcon icon={['fab', 'instagram']} />
							</a>
							<a
								href='https://www.facebook.com/will.knight.5036459'
								target='_blank'
							>
								<FontAwesomeIcon icon={['fab', 'facebook']} />
							</a>
						</div>
					</div>
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
					<div className='willy'>
						<p>Follow Willy Bandz on Instagram and Facebook.</p>
						<div>
							<a
								href='https://www.instagram.com/willy_bandz74/?hl=en/'
								target='_blank'
							>
								<FontAwesomeIcon icon={['fab', 'instagram']} />
							</a>
							<a
								href='https://www.facebook.com/will.knight.5036459'
								target='_blank'
							>
								<FontAwesomeIcon icon={['fab', 'facebook']} />
							</a>
						</div>
					</div>
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
