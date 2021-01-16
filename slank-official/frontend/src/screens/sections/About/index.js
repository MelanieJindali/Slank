import React from 'react'
import Slank from './DJSlank2.png'

const About = () => {
	return (
		<div className='wrapper about' id='about'>
			<img src={Slank} className='about-img' alt='Slank DJing' />
			<div className='about-desc'>
				<h1>About</h1>
				<p>
					Slank is a producer, engineer, and DJ based in Madison, Wisconsin.
					Beginning in 2017 Slank’s musical career took off as a producer, and
					by 2018 he had established himself as a well known DJ and entertainer.
					<br />
					<br />
					From opening shows for artists like Borgore, Dombresky and
					Hieroglyphics, to hosting events at weddings, local underground
					performances, and UW-Madison club events, Slank sets the atmosphere in
					all occasions in between.
					<br />
					<br />
					As an innovative artist, Slank’s creativity extends beyond the
					turntables as he produces his own music, music videos, and
					merchandise. He strives to collaborate with artists in his community
					and even hosts workshops teaching others how to DJ and produce.
				</p>
			</div>
		</div>
	)
}

export default About
