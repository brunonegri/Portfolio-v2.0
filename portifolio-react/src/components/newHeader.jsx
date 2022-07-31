import React from 'react'
import useScrollDirection from '../services/scrollhook'
import GifBnWhite from '../data/images/GifBnWhite.gif'
import BnWhite from '../data/images/BnWhite.png'

function NewHeader () {
	const scrollDirection = useScrollDirection()

	return (
		<div className={`sticky ${scrollDirection === 'down' ? '-top-24' : 'top-[30px]'}  flex w-full justify-center  drop-shadow-lg h-24 bg-[#464E59] z-10 transition-all duration-500`}>
			<div className='px-60 flex justify-between items-center w-full h-full'>
				<a href="#HOME">
					<img className='h-20'
						onClick={() => { window.location.reload() }}
						onMouseOver={e => (e.currentTarget.src = GifBnWhite)}
						onMouseOut={e => (e.currentTarget.src = BnWhite)}
						src={BnWhite} alt='Logo Bruno Negri' />
				</a>
				<nav className='flex text-white'>
					<a href='#HOME'>
						<p className='mx-2 text-xl hover:text-[#437c80]'>
							<span className='mr-1 text-sm text-[#588e91]'>01.</span>Home
						</p>
					</a>
					<a href='#ABOUT'>
						<p className='mx-2 text-xl hover:text-[#437c80]'>
							<span className='mr-1 text-sm text-[#588e91]'>02.</span>About
						</p>
					</a>
					<a href='#EXPERIENCES'>
						<p className='mx-2 text-xl hover:text-[#437c80]'>
							<span className='mr-1 text-sm text-[#588e91]'>03.</span>Experience
						</p>
					</a>
					<a href='#PROJECTS'>
						<p className='mx-2 text-xl hover:text-[#437c80]'>
							<span className='mr-1 text-sm text-[#588e91]'>04.</span>Projects
						</p>
					</a>
				</nav>
			</div>
		</div>
	)
};
export default NewHeader
