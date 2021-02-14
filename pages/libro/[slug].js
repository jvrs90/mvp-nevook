import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button, Container, Divider, Grid, Icon, Image } from 'semantic-ui-react'




const Book = ({ book }) => {
	const router = useRouter()
	const title = book ? book.title.replaceAll('#', '') : '';
	const twitterUrl = `https://twitter.com/share?url=https://nevook.com/libro/${book.slug}&text=${title}&via=nevook&hashtags=nevook,nevookComparte`;


	return (
		<>
			<Head>
				<title> {book && book.title} | Descubre tu próxima historia en NEVOOK</title>
				<meta name="description" content={`Has encontrado ➡ 📒 ${book && book.title}: ${book.sinopsis}`}></meta>

				<meta property="og:url" content={`https://nevook.com/libro/${book.slug}`}></meta>
				<meta property="og:type" content="website"></meta>
				<meta property="og:title" content={`${book.title} | ${book.author.map(author => author.authorName)} | Descubre tu próxima historia en NEVOOK`}></meta>
				<meta property="og:description" content={book.sinopsis}></meta>
				<meta property="og:image" content={book.coverUrl} ></meta>
			</Head>

			{
				book ?
					(
						<>
							<Container>
								<Grid>
									<Grid.Row>
										<Grid.Column mobile={16} tablet={8} computer={6}>
											<Image src={book.coverUrl} alt={`${book.title} - ${book.author.map(author => author.authorName)}`} title={`Libro ${book.tile} | Descubre tu próxima historia en NEVOOK`} />
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

export const getServerSideProps = async ({ params }) => {
	const slug = params?.slug;
	const response = await fetch(`https://api.nevook.com/books/${slug}`)
	const data = await response.json();
	if (!data) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		}
	}
	return {
		props: {
			book: data,
			error: false
		}
	}
}

export default Book
