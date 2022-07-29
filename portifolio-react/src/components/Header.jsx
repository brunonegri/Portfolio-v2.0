import React from 'react'
import logoBnWhite from '../data/images/logoBnWhite.png'
// import GifBnWhite from '../data/images/GifBnWhite.gif'

function Header () {
	return (
		<header className='flex w-full justify-center h-[100px] z-10 drop-shadow-lg bg-[#464E59] mt-10'>
			<div className='px-60 flex justify-between items-center w-full h-full'>
				<img className='h-20' src={logoBnWhite} alt='Logo Bruno Negri' />
				<nav className='flex text-white'>
					<a href='#apresentação'>
						<p className='mx-2 text-xl hover:text-[#437c80]'>
							<span className='mr-1 text-sm text-[#588e91]'>01.</span>Home
						</p>
					</a>
					<a href='#Hardskill'>
						<p className='mx-2 text-xl hover:text-[#437c80]'>
							<span className='mr-1 text-sm text-[#588e91]'>02.</span>About
						</p>
					</a>
					<a href='#Softskill'>
						<p className='mx-2 text-xl hover:text-[#437c80]'>
							<span className='mr-1 text-sm text-[#588e91]'>03.</span>Experience
						</p>
					</a>
					<a href='#Social'>
						<p className='mx-2 text-xl hover:text-[#437c80]'>
							<span className='mr-1 text-sm text-[#588e91]'>04.</span>Projects
						</p>
					</a>
				</nav>
			</div>
		</header>
	)
}

export default Header
