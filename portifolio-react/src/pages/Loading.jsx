import React from 'react'

import GifBnWhite from '../data/images/GifBnWhite.gif'

function Loading () {
	return (
		<div className='w-[100%] h-[100vh] flex items-center justify-center'>
			<img className='h-40' src={GifBnWhite} alt="logo" />
		</div>
	)
}

export default Loading
