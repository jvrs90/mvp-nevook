import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button, Container, Divider, Grid, Icon, Image } from 'semantic-ui-react'
import BookNotFound from '../../components/BookNotFound'
import Schema from '../../components/Schema'

export async function getServerSideProps({ params }) {
	const slug = params?.slug;
	let book = [];
	let error = "";
	try {
		const res = await fetch(
			`https://api.nevook.com/books/${slug}`,
			{
				method: "GET",
				headers: {
					// update with your user-agent
					"User-Agent":
						"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
					Accept: "application/json; charset=UTF-8",
				},
			}
		);

		book = await res.json();
	} catch (e) {
		error = await e.json();
	}

	return {
		props: {
			book,
		},
	};
}



const Book = ({ book }) => {
	const router = useRouter()

	if (book.statusCode) {
		return (
			<BookNotFound errorMessage={book.errorMessage} />
		)
	};

	return (
		<>
			<Head>
				<title> {book && book.title} | Tu próxima historia en NEVOOK</title>
				<meta name="description" content={`Has encontrado ➡ 📒 ${book && book.title}: ${book.sinopsis}`}></meta>
				<meta property="og:title" content={`${book.title} | Halla tu próxima historia en NEVOOK`}></meta>
				<meta property="og:description" content={book.sinopsis}></meta>
				<meta property="og:image" content={book.coverUrl} ></meta>
			</Head>
			<Schema book={book} />

			<Container>
				<Grid>
					<Grid.Row>
						<Grid.Column mobile={16} tablet={8} computer={6}>
							<Image src={book.coverUrl} alt={`${book.title} - ${book.author.map(author => author.authorName)}`} title={`Libro ${book.tile} | Tu próxima historia en NEVOOK`} />
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
									href={`https://twitter.com/share?url=https://nevook.com/libro/${book.slug}&text=${book.title.replaceAll('#', '')}&via=nevook&hashtags=nevook,nevookComparte`}
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
	)
}

export default Book
