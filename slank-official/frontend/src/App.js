import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './screens/Header'
import HomeScreen from './screens/HomeScreen'

function App() {
	return (
		<Router>
			<Header />
			<main>
				<Route path='/' component={HomeScreen} exact />
			</main>
		</Router>
	)
}

export default App
