import React from 'react'
import styles from '../styles/BookNotFound.module.css'

const BookNotFound = () => {
	return (
		<section className='container'>
			<div className={styles['not-found__container']}>
				<p>
					Escríbenos al correo electrónico <span>admin@nevook.com</span> {" o "} <span>nevookapp@gmail.com</span> indicándonos la siguiente información sobre el libro
				</p>
				<ul>
					<li>Título del libro</li>
					<li>Autor / a</li>
					<li>Género</li>
					<li>Url de la portada del libro</li>
					<li>Sinopsis</li>
				</ul>

				<div>
					¡Muchas gracias por ayudarnos!
				</div>
				<small> No guardamos el correo electrónico en ninguna base de datos ni en ninguna lista de correos masivos. Solo se quedará guardado en la bandeja de entrada de cualquiera de los dos correos electrónico arriba indicados</small>
			</div>

		</section>
	)
}

export default BookNotFound;
