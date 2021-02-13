
import Head from 'next/head'
import BookCollection from "../components/BookCollection";
import LazyLoad from 'react-lazyload'
import { Grid, Container, Header, Divider } from 'semantic-ui-react';

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

      <Container as='section' className='Container__index'>
        <Header as='h2'>Últimos libros subidos a Nevook</Header>
        <Divider hidden />
        <Grid divided='vertically'>
          {/* <Grid.Row columns={3}> */}
          {books && (
            <>
              {books.docs.map((book) => (
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
          {/* </Grid.Row> */}
        </Grid>
      </Container>

    </>
  );
}

export default Home;
