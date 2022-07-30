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
		<section className="h-[540px] mt-[90px]">
			<span className="anchor" id='PROJECTS'></span>
			<h1 className='text-3xl text-center mb-9 text-[#4b8d91]'>Projects</h1>
			<div className='flex items-center'>
				<FontAwesomeIcon className='h-10 ml-5 text-white hover:text-[#437c80] transition-[0.5s] cursor-pointer' icon={faCircleArrowLeft} onClick={handleLeftClick }/>
				{projectsData.map((e, i) =>
					<div key={i} className="flex h-[400px] w-full justify-around border border-red-700">
						<div className="flex w-[40%] items-center justify-center border border-red-700">
							<img className='h-[400px]' src={e.thumb} alt="projectthumb" />
						</div>
						<div>
							<p>{e.name}</p>
							<p>{e.description}</p>
							<p>{e.Stacks}</p>
							<a href={e.site} target='_blank' rel="noreferrer">
								<FontAwesomeIcon href={e.site} target='_blank' className='h-10 ml-5 text-white hover:text-[#437c80] transition-[0.5s]' icon={faLink}/>
							</a>
							<a href={e.github} target='_blank' rel="noreferrer">
								<FontAwesomeIcon href={e.github} target='_blank' className='h-10 ml-5 text-white hover:text-[#437c80] transition-[0.5s]' icon={faGithub}/>
							</a>
						</div>
					</div>
				)}
				<FontAwesomeIcon className='h-10 ml-5 text-white hover:text-[#437c80] transition-[0.5s] cursor-pointer' icon={faCircleArrowRight} onClick={handleRightClick} />
			</div>
		</section>
	)
}

export default Projects
