
import Head from 'next/head'
import BookCollection from "../components/BookCollection";
import axios from 'axios'


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

    </>
  );
}

export default Home;
