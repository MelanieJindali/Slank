import React from 'react'
import ContactBtn from '../../components/ContactBtn'

const Contact = () => {
	return (
		<div className='contact-section' id='contact'>
			<div className='contact-text'>
				<h1>Get in touch</h1>
				<p>
					Whether you have questions about features, hosting events, pricing,
					need a demo, or anything else, our team is ready to answer all of your
					questions. 
				</p>
        <h4>Make your next event an unforgettable one.</h4>
				<ContactBtn />
			</div>
		</div>
	)
}

export default Contact
