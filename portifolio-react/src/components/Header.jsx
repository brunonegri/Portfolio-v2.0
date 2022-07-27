import React from 'react';
import logoBnWhite from '../data/images/logoBnWhite.png';

function Header() {
	return (
		<header className='flex w-full justify-center h-[100px] z-10 fixed drop-shadow-lg border-red-600 border-2'>
			<div className='px-8 flex justify-between items-center w-full h-full'>
				<img className='h-[4rem]' src={logoBnWhite} alt='Logo Bruno Negri' />
				<nav className='flex text-white'>
					<a href='#apresentação'>
						<p className='mx-2 text-xl'>
							<span className='mr-1 text-sm'>01.</span>About
						</p>
					</a>
					<a href='#Hardskill'>
						<p className='mx-2 text-xl'>
							<span className='mr-1 text-sm'>02.</span>Experience
						</p>
					</a>
					<a href='#Softskill'>
						<p className='mx-2 text-xl'>
							<span className='mr-1 text-sm'>03.</span>Projects
						</p>
					</a>
					<a href='#Social'>
						<p className='mx-2 text-xl'>
							<span className='mr-1 text-sm'>04.</span>Contact
						</p>
					</a>
				</nav>
			</div>
		</header>
	);
}

export default Header;
