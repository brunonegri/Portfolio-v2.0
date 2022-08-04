import React, { useEffect, useState } from 'react'
import About from '../components/About'
import Experience from '../components/Experience'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Loading from './Loading'
import NewHeader from '../components/newHeader'

function Home () {
	const [load, setLoad] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setLoad(false)
		}, 1500)
	}, [])

	return (
		<main className='min-w-full w-full'>
			{load
				? <Loading />
				: <div className="drop-shadow-lg w-full md:w-9/12 md:mx-auto">
					<NewHeader />
					<Hero />
					<About />
					<Experience />
					<Projects />
					<Footer />
				</div>
			}
		</main>
	)
}

export default Home
