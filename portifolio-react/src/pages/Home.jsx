import React from 'react'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
// import GifBnBlack from '../data/images/GifBnBlack.gif'
// import GifBnWhite from '../data/images/GifBnWhite.gif'

function Home () {
	return (
		<main className="drop-shadow-lg w-9/12 mx-auto  border-red-600 border-2">
			{/* <img className='h-[10rem]' src={GifBnWhite} alt="" /> */}
			<Header />
			<Hero />
			<Experience />
		</main>
	)
}

export default Home
