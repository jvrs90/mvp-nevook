import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../components/BookCollection/BookCollection.module.css'
import BookCollection from '../components/BookCollection';
import { useForm } from 'react-hook-form';
import { Button, Container, Divider, Form, Grid, Header, Icon, Input } from 'semantic-ui-react'
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import Image from 'next/image'

const Search = () => {
	const router = useRouter();
	const searchParam = router.query.search;
	const [books, setBooks] = useState([])
	const [param, setParam] = useState()
	const { register, handleSubmit, watch, errors } = useForm();

	console.log(param)

	useEffect(async () => {
		console.log('Se renderiza', param);
		await fetch(`https://api.nevook.com/search/colection/books/${param}`)
			.then(response => response.json())
			.then(data => setBooks(data.books));
		setParam(searchParam)
	}, [])


	const onSubmit = async (data) => {
		router.push({
			pathname: '/buscar',
			query: data
		})

		await fetch(`https://api.nevook.com/search/colection/books/${data.search}`)
			.then(response => response.json())
			.then(data => setBooks(data.books));
	}

	return (
		<>
			<Head>
				<title>Busca tu siguiente libro aquí | Nevook</title>
			</Head>
			<Container as='section' className='Container__index container_search'>
				<Header as='h1'>Busca libros en Nevook</Header>
				<Form size="large" onSubmit={handleSubmit(onSubmit)}>
					<Form.Field>
						<label>Buscar por título</label>
						<input placeholder='p.e.: Cien años de soledad' name='search' ref={register({ required: true })} />
					</Form.Field>
					{errors.search && <span>Este campo es requerido</span>}

					<Button type='submit' >Buscar</Button>
				</Form>

				<Divider hidden />

				{
					books.length === 0 && (
						<Image src='/search_ilustration.svg' width={500} height={500} />
					)
				}

				<Grid divided='vertically'>
					<Grid.Row columns={4}>
						{books && (
							<>
								{books.map((book) => (
									<Grid.Column mobile={16} tablet={7} computer={5}>
										<LazyLoad height={200} key={book._id} style={{ display: 'flex' }}>
											<BookCollection
												slug={book.slug}
												title={book.title}
												authorName={book.author.map(author => author.authorName)}
												genreName={book.genre.map(genre => genre.genreName)}
												coverUrl={book.coverUrl}
												sinopsis={book.sinopsis}
											/>
										</LazyLoad>
									</Grid.Column>
								))}
							</>
						)
						}

						{/* {books.length === 0 && (
							<>
								<Header as='h2'>¿No has encontrado el libro?</Header>
								<p>Estamos completando nuestra base de datos</p>
								<p>Por favor dirígete al siguiente enlace y ayúdamos a seguir creciendo nuestra biblioteca 😀</p>
								<Link href='/libro-no-encontrado'>
									<a>Quiero ayudar a completar la biblioteca a Nevook</a>
								</Link>
							</>
						)} */}

					</Grid.Row>
				</Grid>

			</Container>
		</>
	)
}

export default Search
