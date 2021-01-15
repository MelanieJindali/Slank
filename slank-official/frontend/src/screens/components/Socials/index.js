import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faMusic)

const Socials = () => {
	return (
		<div>
			<a href='https://distrokid.com/hyperfollow/slank1/quarantine-dreams'>
				<FontAwesomeIcon icon={faMusic} />
			</a>
			<a href='https://www.instagram.com/matt_bslanky/'>
				<FontAwesomeIcon icon={['fab', 'instagram']} />
			</a>
			<a href='https://open.spotify.com/artist/6UIYv81CkOjU6Abv0idBYr'>
				<FontAwesomeIcon icon={['fab', 'spotify']} />
			</a>
			<a href='https://www.facebook.com/Slank-109910190555708'>
				<FontAwesomeIcon icon={['fab', 'facebook']} />
			</a>
			<a href='https://soundcloud.com/mc_slank'>
				<FontAwesomeIcon icon={['fab', 'soundcloud']} />
			</a>
		</div>
	)
}

export default Socials
