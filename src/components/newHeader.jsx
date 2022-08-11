import React, { useState, useEffect } from 'react'
import useScrollDirection from '../services/scrollhook'
import GifBnWhite from '../data/images/GifBnWhite.gif'
import BnWhite from '../data/images/BnWhite.png'

function NewHeader () {
	const { innerWidth: width } = window;
	
	const [active, setActive] = useState(false)
	const [checkWidth, SetCheckWidth] = useState(false)
	console.log(width);
	console.log(checkWidth);

	useEffect(()=>{
		if(width < 640 ){
		 SetCheckWidth(!checkWidth)
		}
	 },[])

	const handleToggle = () => {
			setActive(!active)	
	}

	const scrollDirection = useScrollDirection()

	return (
		<div className={`w-full sticky ${scrollDirection === 'down' ? '-top-24' : 'top-[30px]'}  flex flex-nowrap  justify-between sm:justify-center  drop-shadow-lg h-24 bg-[#464E59] z-10 transition-all duration-500`}>
			<div className='w-[80%] lg:w-[65%] flex mx-auto justify-between items-center  h-full'>
				<a href="#HOME">
					<img className='h-16 sm:h-20'
						onClick={() => { window.location.reload() }}
						onMouseOver={e => (e.currentTarget.src = GifBnWhite)}
						onMouseOut={e => (e.currentTarget.src = BnWhite)}
						src={BnWhite} alt='Logo Bruno Negri' />
				</a>
				<button className={`sm:hidden ${active && checkWidth ? 'icon iconActive' : 'icon'}`} onClick={handleToggle}>
					<div className='hamburguer hamburgerIcon'></div>
				</button>
				<nav className= {`sm:flex lg:w-auto  backdrop-blur-md text-white ${active && checkWidth === true ? 'transition-all duration-500 inset-y-0 right-[1px] top-[-30px] h-[4000px] w-56 bg-black/80 absolute h-full' : 'hidden'}`}>
					<a href='/' onClick={ e=>{ 
						const home = document.getElementById('HOME')
						e.preventDefault()
						home && home.scrollIntoView()
						setActive(!active)
						}}>
						<p className='ml-[30px] mt-[150px] sm:mx-2 sm:mt-0  text-xl hover:text-[#437c80]'>
							<span className='mr-1 text-sm text-[#588e91]'>01.</span>Home
						</p>
					</a>
					<a href='/' onClick={ e=>{ 
						const about = document.getElementById('ABOUT')
						e.preventDefault()
						about && about.scrollIntoView()
						setActive(!active)
						}}>
						<p className='ml-[30px] sm:mx-2 sm:mt-0 text-xl hover:text-[#437c80]'>
							<span className='mr-1 text-sm text-[#588e91]'>02.</span>About
						</p>
					</a>
					<a href='/' onClick={ e=>{ 
						const xp = document.getElementById('EXPERIENCES')
						e.preventDefault()
						xp && xp.scrollIntoView()
						setActive(!active)
						}}>
						<p className='ml-[30px] sm:mx-2 sm:mt-0 text-xl hover:text-[#437c80]'>
							<span className='mr-1 text-sm text-[#588e91]'>03.</span>Experience
						</p>
					</a>
					<a href='/' onClick={ e=>{ 
						const projects = document.getElementById('PROJECTS')
						e.preventDefault()
						projects && projects.scrollIntoView()
						setActive(!active)
						}}>
						<p className='ml-[30px] sm:mx-2 sm:mt-0 text-xl hover:text-[#437c80]'>
							<span className='mr-1 text-sm text-[#588e91]'>04.</span>Projects
						</p>
					</a>
				</nav>
			</div>
		</div>
	)
};
export default NewHeader
