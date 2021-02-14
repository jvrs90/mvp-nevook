
// next.config.js
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')


module.exports = withPlugins([
	[
		withImages,
		{
			images: {
				domains: [
					'imagessl0.casadellibro.com',
					'imagessl1.casadellibro.com',
					'imagessl2.casadellibro.com',
					'imagessl3.casadellibro.com',
					'imagessl4.casadellibro.com',
					'imagessl5.casadellibro.com',
					'imagessl6.casadellibro.com',
					'imagessl7.casadellibro.com',
					'imagessl8.casadellibro.com',
					'imagessl9.casadellibro.com',
					'imagessl10.casadellibro.com',
					'imagessl11.casadellibro.com',
					's3-eu-west-1.amazonaws.com',
					'images-na.ssl-images-amazon.com',
					'assets2.lectulandia.com',
					'cdn.alibrate.com',
					'alibrate.s3.amazonaws.com',
					't2.gstatic.com',
					'i0.wp.com',
					'i1.wp.com',
					'i2.wp.com',
					'i3.wp.com',
					'i4.wp.com',
					'i5.wp.com',
					'i6.wp.com',
					'i7.wp.com',
					'i8.wp.com',
					'i9.wp.com',
					'i10.wp.com',
					'planetadelibros.com.ar',
					'www.planetadelibros.com.ar',
					'kbimages1-a.akamaihd.net',
					'content.cuspide.com',
					'i.gr-assets.com',
					'quelibroleo.hola.com',
					'elsotano.com',
					'www.elsotano.com',
					'static.megustaleer.com',
					'www.salamandra.info',
					'www.storytel.com',
					'cloud10.todocoleccion.online',
					'a.wattpad.com',
					'www.panamericanaeditorial.com.co'
				]
			}
		}
	],

])