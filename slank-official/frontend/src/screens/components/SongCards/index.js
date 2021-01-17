import React from 'react'
import BB from './Beslic Bash.PNG'
import QT from './Quarantine Dreams.jpg'
import TZ from './Time Zone.PNG'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SongCards = () => {
	return (
		<div className='album-container'>
			<h1 className='ss-header' id='music'>Latest Projects</h1>
			<div className='song-section'>
				<div className='song-card'>
					<h3>Beslic Bash</h3>
					<img src={BB} alt='Beslic Bash' />
					<a
						href='https://open.spotify.com/album/3EXbyHv2yZDxK4oRZFn6sR'
						target='_blank'
					>
						<div className='listen-now'>
							<FontAwesomeIcon className='play-icon' icon={faPlayCircle} />
							<p>Listen now</p>
						</div>
					</a>
				</div>
				<div className='song-card'>
					<h3>Time Zone</h3>
					<img src={TZ} alt='Time Zone' />
					<a
						href='https://open.spotify.com/album/4pdwnti1MEaRlO2Q0HEsE2'
						target='_blank'
					>
						<div className='listen-now'>
							<FontAwesomeIcon className='play-icon' icon={faPlayCircle} />
							<p>Listen now</p>
						</div>
					</a>
				</div>
				<div className='song-card'>
					<h3>Quarantine Dreams</h3>
					<img src={QT} alt='Quarantine Dreams' />
					<a
						href='https://open.spotify.com/album/05dMcYtjXeskbj7j6mRSeA'
						target='_blank'
					>
						<div className='listen-now'>
							<FontAwesomeIcon className='play-icon' icon={faPlayCircle} />
							<p>Listen now</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}

export default SongCards
