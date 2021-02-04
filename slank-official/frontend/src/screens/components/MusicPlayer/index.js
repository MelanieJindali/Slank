import React from 'react'

const MusicPlayer = () => {
	return (
		<>
			<iframe
				className='music-player'
				src='https://open.spotify.com/embed/album/6sUsW3OtbNeuZjPkByShrU'
				height='80'
				frameborder='0'
				allowtransparency='true'
				allow='encrypted-media'
			></iframe>
		</>
	)
}

export default MusicPlayer
