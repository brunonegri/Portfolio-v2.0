import React from 'react'
// import FotoRecortada from '../data/images/FotoRecortada.png'
import Brnpic from '../data/images/Brnpic.png'
// import Bruno from '../data/images/Bruno.png'

function About () {
	const Iam = "I'm"
	return (
		<section className='flex h-[400px] justify-center mx-16 mt-[160px] '>
			<span className="anchor" id='ABOUT'></span>
			<div className='flex h-full justify-between align-middle'>
				<div className='w-[60%] ml-10 text-white '>
					<h1 className='text-3xl text-center mb-7 text-[#4b8d91]'>About</h1>
					<p className='mb-3 text-2xl'>
						{`${Iam} a Front-End Web Developer. Passionate about technology, music, arts and games.`}
					</p>
					<p className='text-2xl'>
						I study Development Web Full stack at Trybe, I had the honor to
						meeting exceptional teachers from whom I gained a lot of knowledge
						in the area, I led developed some team projects improving my logic
						and creativity, today I look for the opportunity to put in practice
						everything I learned.
					</p>
					<p className='mt-3 text-2xl'>I like challenges and solving problems!</p>
				</div>
				<img
					className='h-80 rounded-full opacity-70 transition-[1s] hover:opacity-100 border border-[#588E91] mt-5 mx-auto'
					src={Brnpic}
					alt='BrunoPic'
				/>
			</div>
		</section>
	)
}

export default About
