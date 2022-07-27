import React from 'react';
import FotoRecortada from '../data/images/FotoRecortada.png';

function Hero() {
	return (
		<section className='mt-[130px]'>
			<img
				className='rounded-[50%] h-[500px] bg-zinc-800'
				src={FotoRecortada}
				alt='BrunoNegri'
			/>
			<div class='about'>
				<div>
					<h4 class='descricao'>Hello World</h4>
				</div>
				<p class='descricao'>
					Muito prazer me chamo Bruno Negri, brasileiro, 26 anos, casado, from
					Piracicaba SP.
					<br />
					Apaixonado por minha familia, tecnologia, música, artes e jogos
					Estudante de desenvolvimento Web na Trybe!
				</p>
			</div>
		</section>
	);
}

export default Hero;
