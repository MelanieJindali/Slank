import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import CrowdImg from './components/CrowdImg'
import SPDJ from './sections/SPDJ'
import MusicVids from './sections/MusicVids'

const HomeScreen = () => {
	return (
		<>
      <Hero />
      <About />
      <SPDJ />
      <CrowdImg />
      <MusicVids />
		</>
	)
}

export default HomeScreen
