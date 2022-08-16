import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {connect} from 'react-redux'
import { setLang } from '../redux/actions'
import useScrollDirection from '../services/scrollhook'
import GifBnWhite from '../data/images/GifBnWhite.gif'
import BnWhite from '../data/images/BnWhite.png'

function NewHeader ({dispatchLang}) {
	const { innerWidth: width } = window;
	const { t, i18n } = useTranslation()
	const [active, setActive] = useState(false)

	const checkWidth = width < 640 ? true : false 

	const handleToggle = () => {
			setActive(!active)	
	}

	const handleChange = ({target}) => {
		const {value} = target
		dispatchLang(value)
		i18n.changeLanguage(value)
	}

	const scrollDirection = useScrollDirection()

	return (
		<div className={`w-full sticky ${scrollDirection === 'down' ? '-top-24' : 'top-[30px]'} 
		${active && checkWidth === true ? 'backdrop-blur-md bg-none -top-24 h-[4000px]' : ''}
		flex flex-nowrap  justify-between sm:justify-center  drop-shadow-lg h-16 sm:h-24 bg-[#464E59] z-10 transition-all duration-500`}>
			<div className='w-[80%] lg:w-[65%] flex mx-auto justify-between items-center  h-full'>
				<a href="#HOME">
					<img className='h-12 sm:h-20'
						onClick={() => { window.location.reload() }}
						onMouseOver={e => (e.currentTarget.src = GifBnWhite)}
						onMouseOut={e => (e.currentTarget.src = BnWhite)}
						src={BnWhite} alt='Logo Bruno Negri' />
				</a>
				<button className={`sm:hidden ${active && checkWidth ? 'icon iconActive' : 'icon'}`} onClick={handleToggle}>
					<div className='hamburguer hamburgerIcon'></div>
				</button>
				<nav className= {`sm:flex lg:w-auto sm:h-full sm:items-center  backdrop-blur-md text-white ${active && checkWidth === true ? 'transition-all duration-500 inset-y-0 right-[1px] top-[-30px] h-[4000px] w-[70%] bg-[#313740] absolute' : 'hidden'}`}>
				<select className="bg-transparent absolute top-[50px] left-[20px] sm:hidden" name="language" id="language" onChange={handleChange}>
						<option className="bg-[#464E59]" value="pt-BR">🇧🇷</option>
						<option className="bg-[#464E59]" value="en">🇬🇧</option>
					</select>
					<a href='/' onClick={ e=>{ 
						const about = document.getElementById('ABOUT')
						e.preventDefault()
						about && about.scrollIntoView()
						setActive(!active)
						}}>
						<p className='ml-[30px] mt-[150px] sm:mx-2 sm:mt-0 text-xl hover:text-[#437c80]'>
							<span className='mr-1 text-sm text-[#588e91]'>01.</span>
							{t('nav.1')}
						</p>
					</a>
					<a href='/' onClick={ e=>{ 
						const xp = document.getElementById('EXPERIENCES')
						e.preventDefault()
						xp && xp.scrollIntoView()
						setActive(!active)
						}}>
						<p className='ml-[30px] sm:mx-2 sm:mt-0 text-xl hover:text-[#437c80]'>
							<span className='mr-1 text-sm text-[#588e91]'>02.</span>
							{t('nav.2')}
						</p>
					</a>
					<a href='/' onClick={ e=>{ 
						const projects = document.getElementById('PROJECTS')
						e.preventDefault()
						projects && projects.scrollIntoView()
						setActive(!active)
						}}>
						<p className='ml-[30px] sm:mx-2 sm:mt-0 text-xl hover:text-[#437c80]'>
							<span className='mr-1 text-sm text-[#588e91]'>03.</span>
							{t('nav.3')}
						</p>
					</a>
					<a href='/' onClick={ e=>{ 
						const home = document.getElementById('HOME')
						e.preventDefault()
						home && home.scrollIntoView()
						setActive(!active)
						}}>
						<p className='ml-[30px] sm:mx-2 sm:mt-0  text-xl hover:text-[#437c80]'>
							<span className='mr-1 text-sm text-[#588e91]'>04.</span>
							{t('nav.4')}
						</p>
					</a>
					
				</nav>
			</div>
			{!checkWidth && 
			<div>
				<select className="sm:bg-transparent text-white absolute top-[10px] right-[20px]" name="language" id="language" onChange={handleChange}>
					<option className="bg-[#464E59]" value="pt-BR">🇧🇷</option>
					<option className="bg-[#464E59]" value="en">🇬🇧</option>
				</select>
			</div>
			}
		</div>
	)
};

const mapDispatchToProps = (dispatch) => ({
	dispatchLang: (language) => dispatch(setLang(language))
})

export default connect(null,mapDispatchToProps)(NewHeader)
