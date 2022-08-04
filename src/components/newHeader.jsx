import React from 'react'
import useScrollDirection from '../services/scrollhook'
import GifBnWhite from '../data/images/GifBnWhite.gif'
import BnWhite from '../data/images/BnWhite.png'
import menuicon from '../data/StackIcons/menu_icon.png'

function NewHeader () {
	const scrollDirection = useScrollDirection()

	return (
		<div className={`sm:sticky ${scrollDirection === 'down' ? '-top-24' : 'top-[30px]'}  flex flex-nowrap w-full justify-between sm:justify-center  drop-shadow-lg h-24 bg-[#464E59] z-10 transition-all duration-500`}>
			<div className='px-10 lg:px-60 flex  justify-between items-center w-full h-full'>
				<a href="#HOME">
					<img className='h-10 sm:h-20'
						onClick={() => { window.location.reload() }}
						onMouseOver={e => (e.currentTarget.src = GifBnWhite)}
						onMouseOut={e => (e.currentTarget.src = BnWhite)}
						src={BnWhite} alt='Logo Bruno Negri' />
				</a>
				<button className='sm:hidden'>
					<img src={menuicon} alt="menu" />
				</button>
				<nav className='hidden sm:flex md:w-[60%] lg:w-auto  text-white'>
					<a href='/' onClick={ e=>{ 
						const home = document.getElementById('HOME')
						e.preventDefault()
						home && home.scrollIntoView()
						}}>
						<p className='mx-2 text-xl hover:text-[#437c80]'>
							<span className='mr-1 text-sm text-[#588e91]'>01.</span>Home
						</p>
					</a>
					<a href='/' onClick={ e=>{ 
						const about = document.getElementById('ABOUT')
						e.preventDefault()
						about && about.scrollIntoView()
						}}>
						<p className='mx-2 text-xl hover:text-[#437c80]'>
							<span className='mr-1 text-sm text-[#588e91]'>02.</span>About
						</p>
					</a>
					<a href='/' onClick={ e=>{ 
						const xp = document.getElementById('EXPERIENCES')
						e.preventDefault()
						xp && xp.scrollIntoView()
						}}>
						<p className='mx-2 text-xl hover:text-[#437c80]'>
							<span className='mr-1 text-sm text-[#588e91]'>03.</span>Experience
						</p>
					</a>
					<a href='/' onClick={ e=>{ 
						const projects = document.getElementById('PROJECTS')
						e.preventDefault()
						projects && projects.scrollIntoView()
						}}>
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
