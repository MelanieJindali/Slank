import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'

function App() {
	return (
		<Router>
			<main>
				<Route path='/' component={HomeScreen} exact />
			</main>
		</Router>
	)
}

export default App
