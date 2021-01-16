import React from 'react'
import BB from './Beslic Bash.PNG'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SongCard = () => {
	return (
		<div className='song-card'>
			<h3>Beslic Bash</h3>
			<img src={BB} alt='Beslic Bash' />
			<div className='listen-now'>
				<FontAwesomeIcon icon={faPlayCircle} />
				<p>Listen now</p>
			</div>
		</div>
	)
}

export default SongCard
