import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer () {
	return (
		<footer className=' flex justify-center text-center text-white opacity-60'>
			<FontAwesomeIcon className='h-7 ml-5 text-white' icon={faEnvelope}/>
			<h1 className='mb-7 mx-2'>b.negri_@hotmail.com</h1>
		</footer>
	)
}

export default Footer
