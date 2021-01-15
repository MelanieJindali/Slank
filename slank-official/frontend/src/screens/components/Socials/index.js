import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faMusic)
const Socials = () => {
	return (
		<div>
			<FontAwesomeIcon icon={faMusic} />
			<FontAwesomeIcon icon={['fab', 'instagram']} />
			<FontAwesomeIcon icon={['fab', 'spotify']} />
			<FontAwesomeIcon icon={['fab', 'facebook']} />
			<FontAwesomeIcon icon={['fab', 'soundcloud']} />
		</div>
	)
}

export default Socials
