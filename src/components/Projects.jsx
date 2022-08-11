import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCircleArrowLeft, faCircleArrowRight, faLink } from '@fortawesome/free-solid-svg-icons'
import projectsData from '../services/ProjectsData'

function Projects () {
	const [current, setCurrent] = useState(0)
	const arrayLength = projectsData.length

	const handleLeftClick = () => {
		setCurrent(current === 0 ? arrayLength - 1 : current - 1)
	}

	const handleRightClick = () => {
		setCurrent(current === arrayLength -1 ? 0 : current +1)
	}

	return (
		<section className="sm:min-h-[850px] mb-20 mt-[90px] items-center">
			<span className="anchorAbout" id='PROJECTS'></span>
			<h1 className='text-4xl text-center mt-[190px] mb-5 sm:mb-9 text-[#4b8d91]'>Projects</h1>
			<div className='flex items-center'>
				<FontAwesomeIcon className='h-10 mr-5 text-white hover:text-[#437c80] transition-[0.5s] cursor-pointer' icon={faCircleArrowLeft} onClick={handleLeftClick }/>
				{projectsData.map((e, i) => 
        i === current &&
					<div key={i} className='flex flex-col sm:flex-row h-auto sm:h-[400px] w-full justify-around bg-[#313740] drop-shadow-xl items-center '>
						<div className="flex sm:my-7 mt-10 sm:w-[45%] items-center justify-center ">
							<img className='w-[80%]' src={e.thumb} alt="projectthumb" />
						</div>
						<div className=' sm:w-[40%] text-3xl flex flex-col justify-center text-center mb-7'>
							<p className='text-2xl sm:text-3xl text-center my-7 text-white'>{e.name}</p>
							<p className='mb-3 text-white text-xl sm:text-2xl'>{e.description}</p>
							<p className='mb-3 text-white text-xl sm:text-2xl'>{e.Stacks}</p>
							<div className='mt-2 sm:mt-7'>
								<a href={e.site} target='_blank' rel="noreferrer">
									<FontAwesomeIcon href={e.site} target='_blank' className='h-10 sm:ml-5 text-white hover:text-[#437c80] transition-[0.5s]' icon={faLink}/>
								</a>
								<a href={e.github} target='_blank' rel="noreferrer">
									<FontAwesomeIcon href={e.github} target='_blank' className='h-10 ml-5 text-white hover:text-[#437c80] transition-[0.5s]' icon={faGithub}/>
								</a>
							</div>
						</div>
					</div>
				)}
				<FontAwesomeIcon className='h-10 ml-5 text-white hover:text-[#437c80] transition-[0.5s] cursor-pointer' icon={faCircleArrowRight} onClick={handleRightClick} />
			</div>
		</section>
	)
}

export default Projects
