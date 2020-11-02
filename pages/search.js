import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../components/BookCollection/BookCollection.module.css'
import BookCollection from '../components/BookCollection';
import { useForm } from 'react-hook-form';

const Search = () => {
	const router = useRouter()
	const [books, setBooks] = useState([])
	const { register, handleSubmit, watch, errors } = useForm();

	useEffect(() => {
		fetch(`http://api.nevook.com/search/colection/books/${router.query.search}`)
			.then(response => response.json())
			.then(data => setBooks(data.books));
	}, [router])

	const onSubmit = (data) => {
		router.push({
			pathname: '/search',
			query: data
		})

		fetch(`http://api.nevook.com/search/colection/books/${data.search}`)
			.then(response => response.json())
			.then(data => setBooks(data.books));
	}

	return (
		<>
			<Head>
				<title>Búsqueda | Nevook</title>
			</Head>

			<section className='container'>
				<section className={styles.bookCollection}>
					<form onSubmit={handleSubmit(onSubmit)} style={{ display: 'grid', gridTemplateColumns: '3fr 1fr' }}>
						<input name="search" ref={register({ required: true })} placeholder="Buscar por título" />
						<input style={{ color: 'white', backgroundColor: 'var(--color-primary)' }} type="submit" value="Buscar" />
						{errors.search && <span>Este campo es requerido</span>}
					</form>
				</section>
				<div className='search-button'>
					<button onClick={() => router.back()} type='tertiary'>Volver atrás</button>
				</div>
				<section className='books-container'>
					{books && (
						<>
							{books.map((book) => (
								<BookCollection
									key={book._id}
									slug={book.slug}
									title={book.title}
									authorName={book.author.map(author => author.authorName)}
									genreName={book.genre.map(genre => genre.genreName)}
									coverUrl={book.coverUrl}
								/>
							))}
						</>
					)
					}
				</section>
			</section>

		</>
	)
}

export default Search
