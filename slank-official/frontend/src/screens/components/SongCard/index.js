import React from 'react'
import BB from './Beslic Bash.PNG'
import QT from './Quarantine Dreams.jpg'
import TZ from './Time Zone.PNG'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SongCard = () => {
	return (
		<div className='song-section'>
			<div className='song-card'>
				<h3>Beslic Bash</h3>
				<img src={BB} alt='Beslic Bash' />
				<a href='https://open.spotify.com/album/3EXbyHv2yZDxK4oRZFn6sR'>
					<div className='listen-now'>
						<FontAwesomeIcon className='play-icon' icon={faPlayCircle} />
						<p>Listen now</p>
					</div>
				</a>
			</div>
			<div className='song-card'>
				<h3>Quarantine Dreams</h3>
				<img src={QT} alt='Quarantine Dreams' />
				<a href='https://open.spotify.com/album/05dMcYtjXeskbj7j6mRSeA'>
					<div className='listen-now'>
						<FontAwesomeIcon className='play-icon' icon={faPlayCircle} />
						<p>Listen now</p>
					</div>
				</a>
			</div>
			<div className='song-card'>
				<h3>Time Zone</h3>
				<img src={TZ} alt='Time Zone' />
				<a href='https://open.spotify.com/album/4pdwnti1MEaRlO2Q0HEsE2'>
					<div className='listen-now'>
						<FontAwesomeIcon className='play-icon' icon={faPlayCircle} />
						<p>Listen now</p>
					</div>
				</a>
			</div>
		</div>
	)
}

export default SongCard
