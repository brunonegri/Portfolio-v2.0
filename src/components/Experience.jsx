import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import jestsvg from '../data/images/jestsvg.svg'
import iconsArray from '../services/icons'
import redux from '../data/images/redux.svg'
import tailwindicon from '../data/images/tailwindicon.svg'

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
		<section className='flex mt-44 sm:mt-0 sm:min-h-[930px] flex-col items-center justify-center w-full '>
			<span className="anchorEx" id='EXPERIENCES'></span>
			<div className='flex w-full flex-col justify-center mx-auto items-center'>
				<div className='text-white text-center'>
					<h1 className=' mb-4 sm:mt-[70px] justify-center text-4xl text-[#4b8d91]'>Experiences</h1>
					<p className='text-xl'>Soon</p>
					<p className='text-xl'>Feel free to checkout my projects below</p>
				</div>
				<div className='w-full sm:w-[47%]'>
					<h1 className='mb-16 sm:mb-4 mt-14 justify-center text-4xl text-center text-[#4b8d91]'>
						Skills
					</h1>
					<div className='flex justify-center items-center'>
						<FontAwesomeIcon className='h-10 cursor-pointer mr-5 text-white hover:text-[#437c80] transition-all duration-500' icon={faCircleArrowLeft} onClick={handleLeftClick }/>

						<div ref={carousel} className='flex flex-col flex-nowrap max-w-3/5 overflow-auto overflow-hidden'>
							<div className='flex flex-nowrap align-middle'>
								{iconsArray.map((e, i) =>
									<FontAwesomeIcon key={i} icon={e}
										className='h-24 ml-4 sm:ml-8 text-white hover:text-[#437c80] transition-all duration-500 hover:h-[99px]'
									/>
								)}
								<img className='svghover h-[90px] ml-5 transition-all duration-500 hover:h-[92px]' src={jestsvg} alt="stack" />
								<img className='svghover h-[90px] ml-5 transition-all duration-500 hover:h-[92px]' src={redux} alt="reduxalt" />
								<img className='svghover h-[90px] ml-5 transition-all duration-500 hover:h-[92px]' src={tailwindicon} alt="tailwindalt" />
							</div>
						</div>
						<FontAwesomeIcon className='h-10 cursor-pointer ml-5 text-white hover:text-[#437c80] transition-all duration-500' icon={faCircleArrowRight} onClick={handleRightClick} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Experience
