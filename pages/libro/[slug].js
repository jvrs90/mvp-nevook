import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button, Container, Divider, Grid, Icon, Image } from 'semantic-ui-react'

import styles from './book.module.css'

export const getServerSideProps = async ({ params }) => {
	const slug = params?.slug;
	const response = await fetch(`https://api.nevook.com/books/${slug}`)
	const data = await response.json()
	return {
		props: {
			book: data,
			error: false
		}
	}
}


const Book = ({ book }) => {
	const router = useRouter()
	const title = book.title.replaceAll('#', '');
	const twitterUrl = `https://twitter.com/share?url=https://nevook.com/libro/${book.slug}&text=${title}&via=nevook&hashtags=nevook,nevookComparte`
	console.log(twitterUrl);
	return (
		<>
			<Head>
				<title> {book && book.title} | Nevook</title>
				<meta name="description" content={`Información sobre el libro 📒 ${book && book.title} su autor/a ✒️ ${book && book.author.map(a => a.authorName)}`}></meta>
			</Head>

			{
				book ?
					(
						<>
							{/* <div className={styles['book']}>
								<img onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/250x300" }} src={book.coverUrl} alt={`Portada de libro ${book.title} de ${book && book.author.map(author => author.authorName)} en Nevook`} />
								<div className={styles['book-info']}>
									<h2>{book && book.title}</h2>
									<div className={styles['book-info__author']}><span>Autor/a: </span>{book && book.author.map(author => author.authorName)}</div>
									<div className={styles['book-info__genre']}> <span>Género: </span>{book && book.genre.map(genre => genre.genreName)}</div>
									<div className={styles['book-info__sinopsis']}>
										<span>Sinopsis: {" "}</span>
										<br />
										{book && book.sinopsis}
										<div classNames={styles['book-button']} >

										</div>

										<div className='search-button'>
											<button onClick={() => router.back()} type='tertiary'>Volver atrás</button>
										</div>

									</div>
								</div>

							</div> */}

							<Container>
								<Grid>
									<Grid.Row>
										<Grid.Column mobile={16} tablet={8} computer={6}>
											<Image src={book.coverUrl} />
										</Grid.Column>
										<Grid.Column mobile={16} tablet={8} computer={10} className='Book_info'>
											<h1>{book.title}</h1>
											<h2>{book && book.author.map(author => author.authorName)}</h2>
											<h2>{book && book.genre.map(genre => genre.genreName)}</h2>
											<div className="sinopsis">
												{book.sinopsis}
											</div>
											<Divider hidden />
											<div className="container_share">
												<Divider horizontal>Comparte este libro en</Divider>
												<Link
													href={twitterUrl}
												>
													<a><Icon name='twitter' /></a>
												</Link>
											</div>
											<Divider section />
											<Button onClick={() => router.back()} icon labelPosition='left'>
												<Icon name='left arrow' />
												Volver
											</Button>
										</Grid.Column>

									</Grid.Row>
								</Grid>
							</Container>


						</>
					) : (
						<h1>Loading...</h1>
					)
			}

		</>
	)
}

export default Book
