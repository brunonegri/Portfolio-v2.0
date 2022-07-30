import React, { useEffect, useState } from 'react'
import About from '../components/About'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Loading from './Loading'

function Home () {
	const [load, setLoad] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setLoad(false)
		}, 1500)
	}, [])

	return (
		<main >
			{load
				? <Loading />
				: <div className="drop-shadow-lg w-9/12 mx-auto h-[100vh] ">
					<Header />
					<Hero />
					<Experience />
					<About />
					<Projects />
					<Footer />
				</div>
			}
		</main>
	)
}

export default Home
