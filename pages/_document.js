
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



