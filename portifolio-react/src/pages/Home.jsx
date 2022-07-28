import React from 'react'
import About from '../components/About'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

function Home () {
	return (
	// border-red-600 border-2
		<main className="drop-shadow-lg w-9/12 mx-auto ">
			<Header />
			<Hero />
			<Experience />
			<About />
			<Projects />
		</main>
	)
}

export default Home
