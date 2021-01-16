import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import SongCards from './components/SongCards'
import CrowdImg from './components/CrowdImg'

const HomeScreen = () => {
	return (
		<>
      <Hero />
      <About />
      <SongCards />
      <CrowdImg />
		</>
	)
}

export default HomeScreen
