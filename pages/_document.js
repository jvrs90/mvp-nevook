
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang="es-ES">
				<Head>
					{/* <!-- End Google Analytics --> */}
					<meta name="description" content="📒📘 Nevook será una red social para unir amantes de la lectura. Podrás tener un control sobre los libros que has leído y estás leyendo 📚" />

					{/* <!-- Open Graph / Facebook --> */}
					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://nevook.com/" />
					<meta property="og:title" content="Inicio | Nevook" />
					<meta property="og:description" content="📒📘 Nevook será una red social para unir amantes de la lectura. Podrás tener un control sobre los libros que has leído y estás leyendo 📚" />
					<meta property="og:image" content="/jbt-container.jpg" />

					{/* <!-- Twitter --> */}
					<meta property="twitter:card" content="summary_large_image" />
					<meta property="twitter:url" content="https://nevook.com/" />
					<meta property="twitter:title" content="Inicio | Nevook" />
					<meta property="twitter:description" content="📒📘 Nevook será una red social para unir amantes de la lectura. Podrás tener un control sobre los libros que has leído y estás leyendo 📚" />
					<meta property="twitter:image" content="/jbt-container.jpg"></meta>
					<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;600;700&display=swap" rel="stylesheet" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument



