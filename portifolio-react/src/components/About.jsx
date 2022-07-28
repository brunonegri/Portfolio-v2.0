import React from 'react'
// import FotoRecortada from '../data/images/FotoRecortada.png'
import Brnpic from '../data/images/Brnpic.png'
// import Bruno from '../data/images/Bruno.png'

function About () {
	return (
		<div className='flex h-[400px] justify-center mx-16 mt-16 '>
			<div className='flex h-full justify-between align-middle'>
				<div className='w-[70%] text-white '>
					<h1 className='text-3xl text-center mb-7'>ABOUT</h1>
					<p className='text-2xl'>
						I study Development Web Full stack at Trybe, I had the honor to
						meeting exceptional teachers from whom I gained a lot of knowledge
						in the area, I led developed some team projects improving my logic
						and creativity, today I look for the opportunity to put in practice
						everything I learned. I like challenges and solving problems!
					</p>
				</div>
				<img className='h-80 rounded mt-5 ml-7' src={Brnpic} alt='BrunoPic' />
			</div>
		</div>
	)
}

export default About