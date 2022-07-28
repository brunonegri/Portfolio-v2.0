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
		<section className='flex flex-col justify-center w-full '>
			<div className='flex mt-[250px] justify-between mx-36 align-middle'>
				<div className='text-white text-center'>
					<h1 className=' mb-4 justify-center text-3xl text-[#4b8d91]'>Experiences</h1>
					<p className='text-xl'>Soon</p>
					<p className='text-xl'>Feel free to checkout my projects below</p>
				</div>
				<div className='flex flex-col flex-nowrap'>
					<h1 className=' mb-4 justify-center text-3xl text-center text-[#4b8d91]'>
						Stacks
					</h1>
					<div className='flex flex-nowrap align-middle'>
						<FontAwesomeIcon icon={faJs} className='h-24 text-white hover:text-[#437c80] hover:h-28' />
						<FontAwesomeIcon icon={faHtml5} className='h-24 text-white hover:text-[#437c80] hover:h-28' />
						<FontAwesomeIcon icon={faCss3Alt} className='h-24 text-white hover:text-[#437c80] hover:h-28' />
						<FontAwesomeIcon icon={faReact} className='h-24 text-white hover:text-[#437c80] hover:h-28' />
						<FontAwesomeIcon icon={faVuejs} className='h-24 text-white hover:text-[#437c80] hover:h-28' />
						{/* <img src={faJs} alt="stacks" /> */}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Experience
