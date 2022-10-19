import React from 'react'
import { useTranslation } from 'react-i18next'
import {connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import ResumePTBR from '../data/ResumePTBR.pdf'
import ResumeEN from '../data/ResumeEN.pdf'

function Hero ({lang}) {
	const { t } = useTranslation()
	const Resume = lang === 'pt-BR' ? ResumePTBR : ResumeEN
	return (
		<section className='h-[700px] sm:min-h-[870px] flex items-center mb-36 sm:mb-0'>
			<span className="anchor" id='HOME'></span>
			<div className='ml-4 sm:ml-48'>
				<div>
					<p className='text-2xl text-white'>{t('hero.1')}</p>
					<h4 className='text-6xl sm:text-[86px] text-[#4b8d91]'>Bruno Negri</h4>
					<p className='text-2xl text-white mt-2'>
					{t('hero.2')}
					</p>
				</div>
				<a href={ Resume } target='_blank' rel="noreferrer">
					<button
						className="px-7 py-3 opacity-60 bg-[#437c80] hover:opacity-100 hover:px-8 hover:py-[14px] transition-[0.5s] rounded-md text-white text-[18px] ml-3 mt-6">
          			{t('hero.3')}
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

const mapStateToProps = (state) => ({
	lang: state.lang.language
})

export default connect(mapStateToProps)(Hero)
