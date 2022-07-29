import React from 'react'
import jestsvg from '../data/images/jestsvg.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faJs,
	faHtml5,
	faCss3Alt,
	faReact,
	faVuejs,
	faLinux,
	faGitAlt
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
						Skills
					</h1>
					<div className='flex flex-nowrap align-middle'>
						<FontAwesomeIcon icon={faJs}
							className='h-24 ml-5 text-white hover:text-[#437c80] transition-[0.5s] hover:h-28'
						/>
						<FontAwesomeIcon icon={faHtml5}
							className='h-24 ml-5 text-white hover:text-[#437c80] transition-[0.5s] hover:h-28'
						/>
						<FontAwesomeIcon icon={faCss3Alt}
							className='h-24 ml-5 text-white hover:text-[#437c80] transition-[0.5s] hover:h-28'
						/>
						<FontAwesomeIcon icon={faReact}
							className='h-24 ml-5 text-white hover:text-[#437c80] transition-[0.5s] hover:h-28'
						/>
						<FontAwesomeIcon icon={faVuejs}
							className='h-24 ml-5 text-white hover:text-[#437c80] transition-[0.5s] hover:h-28'
						/>
						<FontAwesomeIcon icon={faLinux}
							className='h-24 ml-5 text-white hover:text-[#437c80] transition-[0.5s] hover:h-28'
						/>
						<FontAwesomeIcon icon={faGitAlt}
							className='h-24 ml-5 text-white hover:text-[#437c80] transition-[0.5s] hover:h-28'
						/>
						<svg>
							<path>

							</path>
						</svg>
						<svg className='h-24 ml-5 text-white hover:fill-[#437c80] transition-[0.5s] hover:h-28' src={jestsvg} alt="stacks" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Experience
