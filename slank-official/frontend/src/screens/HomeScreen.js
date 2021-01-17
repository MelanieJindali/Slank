import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import CrowdImg from './components/CrowdImg'
import SPDJ from './sections/SPDJ'
import MusicVids from './sections/MusicVids'
import Merch from './sections/Merch'
import Contact from './sections/Contact'
import Footer from './sections/Footer'


const HomeScreen = () => {
	return (
		<>
			<Hero />
			<About />
			<SPDJ />
			<CrowdImg/>
			<MusicVids />
			<Merch />
      <Contact />
      <Footer />
		</>
	)
}

export default HomeScreen
