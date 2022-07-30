import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import jestsvg from '../data/images/jestsvg.svg'
import iconsArray from '../services/icons'
import redux from '../data/images/redux.svg'

function Experience () {
	const carousel = useRef(null)

	const handleLeftClick = (e) => {
		e.preventDefault()
		carousel.current.scrollLeft -= carousel.current.offsetWidth
	}

	const handleRightClick = (e) => {
		e.preventDefault()
		carousel.current.scrollLeft += carousel.current.offsetWidth
	}

	return (
		<section className='flex flex-col items-center justify-center w-full '>
			<span className="anchor" id='EXPERIENCES'></span>
			<div className='flex mt-[310px] justify-between mx-36 align-middle'>
				<div className='text-white text-center'>
					<h1 className=' mb-4 justify-center text-3xl text-[#4b8d91]'>Experiences</h1>
					<p className='text-xl'>Soon</p>
					<p className='text-xl'>Feel free to checkout my projects below</p>
				</div>
				<div className='w-[48%]'>
					<h1 className=' mb-4 justify-center text-3xl text-center text-[#4b8d91]'>
						Skills
					</h1>
					<div className='flex justify-center items-center'>
						<FontAwesomeIcon className='h-10 ml-5 text-white hover:text-[#437c80] transition-[0.5s]' icon={faCircleArrowLeft} onClick={handleLeftClick }/>

						<div ref={carousel} className='flex flex-col flex-nowrap max-w-3/5 overflow-auto overflow-hidden'>
							<div className='flex flex-nowrap align-middle'>
								{iconsArray.map((e, i) =>
									<FontAwesomeIcon key={i} icon={e}
										className='h-24 ml-5 text-white hover:text-[#437c80] transition-[0.5s] hover:h-28'
									/>
								)}
								<img className='svghover h-24 ml-5 transition-[0.5s] hover:h-28' src={jestsvg} alt="stack" />
								<img className='svghover h-24 ml-5 transition-[0.5s] hover:h-28' src={redux} alt="reduxalt" />
							</div>
						</div>
						<FontAwesomeIcon className='h-10 ml-5 text-white hover:text-[#437c80] transition-[0.5s]' icon={faCircleArrowRight} onClick={handleRightClick} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Experience
