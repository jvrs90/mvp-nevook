
import Head from 'next/head'
import BookCollection from "../components/BookCollection";
import LazyLoad from 'react-lazyload'

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/books')
  const data = await response.json()
  return {
    props: {
      books: data,
    }
  }
}

const Home = ({ books, error }) => {
  return (
    <>
      <Head>
        <title>Inicio | Nevook</title>
      </Head>
      <section className='container books-container'>
        {books && (
          <>
            {books.docs.map((book) => (
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
            ))}
          </>
        )
        }
      </section>

    </>
  );
}

export default Home;
