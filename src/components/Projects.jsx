import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCircleArrowLeft, faCircleArrowRight, faLink } from '@fortawesome/free-solid-svg-icons'
import projectsData from '../services/ProjectsData'

function Projects () {
	const carousel = useRef(null)

	const handleLeftClick = (e) => {
		e.preventDefault()
		console.log(carousel.current.offsetWidth)
		carousel.current.scrollLeft -= carousel.current.offsetWidth
	}

	const handleRightClick = (e) => {
		e.preventDefault()
		console.log(carousel.current.offsetWidth)
		carousel.current.scrollLeft += carousel.current.offsetWidth
	}
	return (
		<section className="min-h-[850px] mt-[90px] items-center">
			<span className="anchorAbout" id='PROJECTS'></span>
			<h1 className='text-4xl text-center mt-[190px] mb-9 text-[#4b8d91]'>Projects</h1>
			<div className='flex items-center'>
				<FontAwesomeIcon className='h-10 mr-5 text-white hover:text-[#437c80] transition-[0.5s] cursor-pointer' icon={faCircleArrowLeft} onClick={handleLeftClick }/>
				{projectsData.map((e, i) =>
					<div key={i} className="flex h-[400px] w-full justify-around bg-[#313740] drop-shadow-xl">
						<div className="flex my-7 w-[40%] items-center justify-center ">
							<img className='h-[100%]' src={e.thumb} alt="projectthumb" />
						</div>
						<div className=' w-[40%] text-3xl flex flex-col justify-center text-center mb-7'>
							<p className='text-3xl text-center my-7 text-white'>{e.name}</p>
							<p className='mb-3 text-white text-2xl'>{e.description}</p>
							<p className='mb-3 text-white text-2xl'>{e.Stacks}</p>
							<div className='mt-7'>
								<a href={e.site} target='_blank' rel="noreferrer">
									<FontAwesomeIcon href={e.site} target='_blank' className='h-10 ml-5 text-white hover:text-[#437c80] transition-[0.5s]' icon={faLink}/>
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
