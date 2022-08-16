import React from 'react'
// import FotoRecortada from '../data/images/FotoRecortada.png'
// import Brnpic from '../data/images/Brnpic.png'
// import Bruno from '../data/images/Bruno.png'
import test from '../data/images/test.png'
import { useTranslation } from 'react-i18next'

function About () {
	const { t } = useTranslation()
	return (
		<section className='flex h-[400px]  justify-center sm:mx-16 min-h-[900px] '>
			<div className='flex flex-col sm:flex sm:flex-row h-full justify-between align-middle items-center'>
				<div className='w-[80%] mb-12 sm:mb-0 sm:w-[60%] sm:ml-10 text-white'>
					<h1 className='text-4xl sm:text-center mb-7 text-[#4b8d91]'>{t('about.1')}</h1>
					<p className='mb-3 text-2xl'>
						{t('about.2')}
					</p>
					<p className='text-2xl '>
						{t('about.3')}
					</p>
					<p className='mt-3 text-2xl'>{t('about.4')}</p>
				</div>
				<img
					className='h-96 rounded-full sm:opacity-70 transition-[1s] sm:hover:opacity-100 shadow-[#588E91] shadow-lg mt-5 mb-16 sm:mb-0 mx-auto'
					src={test}
					alt='BrunoPic'
				/>
			</div>
			<span className="anchorAbout" id='ABOUT'></span>
		</section>
	)
}

export default About
