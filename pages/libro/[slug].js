import Head from 'next/head'
import { useRouter } from 'next/router'

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
	return (
		<>
			<Head>
				<title> {book && book.title} | Nevook</title>
				<meta name="description" content={`Aquí encontraras información sobre el libro 📒 ${book && book.title} su autor/a ✒️ ${book && book.author.map(a => a.authorName)} y su sinopsis 📜`}></meta>
			</Head>

			{
				book ?
					(
						<>
							<div className={styles['book']}>
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

							</div>

						</>
					) : (
						<h1>Loading...</h1>
					)
			}

		</>
	)
}

export default Book
