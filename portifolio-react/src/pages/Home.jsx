import React from 'react'
import About from '../components/About'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'

function Home () {
	return (
		<main className="drop-shadow-lg w-9/12 mx-auto  border-red-600 border-2">
			<Header />
			<Hero />
			<Experience />
			<About />
		</main>
	)
}

export default Home
