import React from 'react'
import Github from '../data/images/Github.png'
import Linkedin from '../data/images/Linkedin.png'
import Whatsapp from '../data/images/Whatsapp.png'

function Hero () {
	const Iam = "Hello, I'm"
	return (
		<section className='mt-[200px]'>
			<div className='mx-48'>
				<div>
					<p className='text-2xl text-white'>{Iam}</p>
					<h4 className='text-[86px] text-[#4b8d91]'>Bruno Negri</h4>
					<p className='text-2xl text-white mt-2'>
          FRONT-END WEB DEVELOPER
					</p>
				</div>
				<button className="px-7 py-3 bg-[#437c80] rounded-md text-white ml-3 mt-6">
          Download Resume
				</button>
				<div className="mt-7">
					<button className="mx-3">
						<img src={Github} alt="GithubIcon" />
					</button>
					<button className="mx-3">
						<img src={Linkedin} alt="GithubIcon" />
					</button>
					<button className="mx-3">
						<img src={Whatsapp} alt="GithubIcon" />
					</button>
				</div>
			</div>
		</section>
	)
}

export default Hero
