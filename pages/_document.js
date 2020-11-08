
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head>
					{/* <!-- Google Tag Manager --> */}
					<script dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-KBRXB7R');`
					}} />
					{/* <!-- End Google Tag Manager --> */}

					{/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
					<script async src="https://www.googletagmanager.com/gtag/js?id=G-LZ2JKDZZSZ"></script>
					<script dangerouslySetInnerHTML={{
						__html: `window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-LZ2JKDZZSZ');`
					}} />
					{/* <!-- End Google Analytics --> */}
					<meta name="description" content="📒📘 Nevook será una red social para unir amantes de la lectura. Podrás tener un control sobre los libros que has leído estás leyendo 📚 y te ayudará a encontrar tu 🔜 próxima lectura" />

					{/* <!-- Open Graph / Facebook --> */}
					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://nevook.com/" />
					<meta property="og:title" content="Inicio | Nevook" />
					<meta property="og:description" content="📒📘 Nevook será una red social para unir amantes de la lectura. Podrás tener un control sobre los libros que has leído estás leyendo 📚 y te ayudará a encontrar tu 🔜 próxima lectura" />
					<meta property="og:image" content="/logoBlancoTransparente.png" />

					{/* <!-- Twitter --> */}
					<meta property="twitter:card" content="summary_large_image" />
					<meta property="twitter:url" content="https://nevook.com/" />
					<meta property="twitter:title" content="Inicio | Nevook" />
					<meta property="twitter:description" content="📒📘 Nevook será una red social para unir amantes de la lectura. Podrás tener un control sobre los libros que has leído estás leyendo 📚 y te ayudará a encontrar tu 🔜 próxima lectura" />
					<meta property="twitter:image" content="/logoBlancoTransparente.png"></meta>
					<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;600;700&display=swap" rel="stylesheet" />
				</Head>
				<body>
					{/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KBRXB7R"
						height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> */}
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument



