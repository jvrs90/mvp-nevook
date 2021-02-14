
import Head from 'next/head'
import BookCollection from "../components/BookCollection";

import { Grid, Container, Header, Divider, Segment, Dimmer, Loader } from 'semantic-ui-react';

// export const getServerSideProps = async () => {
//   const response = await fetch('http://localhost:3000/api/books')
//   const data = await response.json()
//   return {
//     props: {
//       books: data,
//     }
//   }
// }



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
                  <BookCollection
                    key={book._id}
                    slug={book.slug}
                    title={book.title}
                    authorName={book.author.map(author => author.authorName)}
                    genreName={book.genre.map(genre => genre.genreName)}
                    coverUrl={book.coverUrl}
                    sinopsis={book.sinopsis}
                  />
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

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/books')
  const data = await response.json()
  return {
    props: {
      books: data,
    }
  }
}

export default Home;
