import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

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
				<button
					className="px-7 py-3 opacity-60 bg-[#437c80] hover:opacity-100 hover:px-8 hover:py-[14px] transition-[0.5s] rounded-md text-white text-[18px] ml-3 mt-6">
          Download Resume
				</button>
				<div className="mt-7">
					<button className="mx-3">
						<FontAwesomeIcon icon={faGithub}
							className='h-12  ml-2 text-white hover:text-[#437c80] transition-[0.5s] hover:h-[52px]'
						/>
					</button>
					<button className="mx-3">
						<FontAwesomeIcon icon={faLinkedin}
							className='h-12 ml-1 text-white hover:text-[#437c80] transition-[0.5s] hover:h-[52px]'
						/>
					</button>
					<button className="mx-3">
						<FontAwesomeIcon icon={faWhatsapp}
							className='h-12  ml-1 text-white hover:text-[#437c80] transition-[0.5s] hover:h-[52px]'
						/>
					</button>
				</div>
			</div>
		</section>
	)
}

export default Hero
