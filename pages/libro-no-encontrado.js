import React from 'react'
import { Container, Divider, Grid, Header, List } from 'semantic-ui-react';
import Image from 'next/image';

const BookNotFound = () => {
	return (
		// <section className='container'>
		// 	<div className={styles['not-found__container']}>
		// 		<p>
		// 			Escríbenos al correo electrónico <span>admin@nevook.com</span> {" o "} <span>nevookapp@gmail.com</span> indicándonos la siguiente información sobre el libro
		// 		</p>
		// 		<ul>
		// 			<li>Título del libro</li>
		// 			<li>Autor / a</li>
		// 			<li>Género</li>
		// 			<li>Url de la portada del libro</li>
		// 			<li>Sinopsis</li>
		// 		</ul>

		// 		<div>
		// 			¡Muchas gracias por ayudarnos!
		// 		</div>
		// 		<small> No guardamos el correo electrónico en ninguna base de datos ni en ninguna lista de correos masivos. Solo se quedará guardado en la bandeja de entrada de cualquiera de los dos correos electrónico arriba indicados</small>
		// 	</div>

		// </section>
		<>
			<Container as='section' className='Container__index container_not' verticalAlign='middle'>
				<Grid verticalAlign='middle'>
					<Grid.Row>
						<Header as='h1'>Libro perdido</Header>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column mobile={16} tablet={8} computer={4}>
							<Image src='/not_found_ilustration.svg' width={500} height={500} />
						</Grid.Column>
						<Grid.Column mobile={16} tablet={8} computer={10} className='not-found'>
							<p>Escríbenos al correo electrónico <span>admin@nevook.com</span> {" o "} <span>nevookapp@gmail.com</span> indicándonos la siguiente información sobre el libro.</p>

							<List ordered className='Lista__not-found'>
								<List.Item>Título del libro</List.Item>
								<List.Item>Autor / a</List.Item>
								<List.Item>Género </List.Item>
								<List.Item>Url de la portada del libro</List.Item>
								<List.Item>Sinopsis</List.Item>
							</List>

							<small> No guardamos el correo electrónico en ninguna base de datos ni en ninguna lista de correos masivos. Solo se quedará guardado en la bandeja de entrada de cualquiera de los dos correos electrónico arriba indicados</small>
						</Grid.Column>

					</Grid.Row>

				</Grid>

			</Container>

		</>

	)
}

export default BookNotFound;
