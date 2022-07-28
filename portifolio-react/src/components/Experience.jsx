import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faJs,
	faHtml5,
	faCss3Alt,
	faReact,
	faVuejs
} from '@fortawesome/free-brands-svg-icons'

function Experience () {
	return (
		<section className='flex flex-col w-full border-red-600 border-2'>
			<div className='flex mt-24 justify-between mx-36'>
				<div className='text-white text-center'>
					<h1 className=' mb-4 justify-center text-3xl'>Experiences</h1>
					<p className='text-xl'>Soon</p>
					<p className='text-xl'>Feel free to checkout my projects below</p>
				</div>
				<div className='flex flex-col flex-nowrap'>
					<h1 className=' mb-4 justify-center text-3xl text-center text-white'>
						Stacks
					</h1>
					<div className='flex flex-nowrap'>
						<FontAwesomeIcon icon={faJs} className='h-32 text-white' />
						<FontAwesomeIcon icon={faHtml5} className='h-32 text-white' />
						<FontAwesomeIcon icon={faCss3Alt} className='h-32 text-white' />
						<FontAwesomeIcon icon={faReact} className='h-32 text-white' />
						<FontAwesomeIcon icon={faVuejs} className='h-32 text-white' />
						{/* <img src={faJs} alt="stacks" /> */}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Experience
