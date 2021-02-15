import Head from "next/head";


const Schema = ({ book }) => {

   const { title, authorName, genreName, sinopsis, slug, coverUrl } = book;

   const makeJobSchema = () => {
      return {
         // schema truncated for brevity
         "@context": "http://schema.org/",
         "@type": "Book",
         "name": title,
         "url": `https://www.nevook.com/libro/${slug}`,
         "image": coverUrl,
         "genre": genreName,
         "datePublished": "",
         "inLanguage": "es",
         "author": {
            "@type": "Person",
            "name": authorName
         }
      }
   }

   return (
      <Head>
         <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(makeJobSchema()) }}
         />
      </Head>
   )
}

export default Schema
