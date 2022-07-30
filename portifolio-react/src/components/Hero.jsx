import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Resume from '../data/Resume.pdf'

function Hero () {
	const Iam = "Hello, I'm"
	return (
		<section className='mt-[260px]'>
			<span className="anchor" id='HOME'></span>
			<div className='mx-48'>
				<div>
					<p className='text-2xl text-white'>{Iam}</p>
					<h4 className='text-[86px] text-[#4b8d91]'>Bruno Negri</h4>
					<p className='text-2xl text-white mt-2'>
          FRONT-END WEB DEVELOPER
					</p>
				</div>
				<a href={Resume} target='_blank' rel="noreferrer">
					<button
						className="px-7 py-3 opacity-60 bg-[#437c80] hover:opacity-100 hover:px-8 hover:py-[14px] transition-[0.5s] rounded-md text-white text-[18px] ml-3 mt-6">
          Download Resume
					</button>
				</a>
				<div className="mt-7">
					<a href="https://github.com/brunonegri" target='_blank' className="mx-3" rel="noreferrer">
						<FontAwesomeIcon icon={faGithub}
							className='h-12  ml-2 text-white hover:text-[#437c80] transition-[0.5s] hover:h-[52px]'
						/>
					</a>
					<a href="https://www.linkedin.com/in/bruno-negri-dev/" target='_blank' className="mx-3" rel="noreferrer">
						<FontAwesomeIcon icon={faLinkedin}
							className='h-12 ml-1 text-white hover:text-[#437c80] transition-[0.5s] hover:h-[52px]'
						/>
					</a>
					<a href='https://wa.link/prlfvr' target='_blank' className="mx-3" rel="noreferrer">
						<FontAwesomeIcon icon={faWhatsapp}
							className='h-12  ml-1 text-white hover:text-[#437c80] transition-[0.5s] hover:h-[52px]'
						/>
					</a>
				</div>
			</div>
		</section>
	)
}

export default Hero
