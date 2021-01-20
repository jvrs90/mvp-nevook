import Link from 'next/link'
import styles from './BookCollection.module.css'

import { useRouter } from 'next/router'
import Image from 'next/image'


export default function BookCollection({ title, authorName, genreName, sinopsis, slug, coverUrl }) {
	const router = useRouter();

	const truncate = (string, maxWords) => {
		var array = string.split(" ");
		var wordCount = array.length;
		var string = array.splice(0, maxWords).join(" ");

		if (wordCount > maxWords) {
			string += "...";
		}

		return string;
	}


	return (
		<>
			<article className={styles.bookCollection}>
				<div className={styles.book} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', minWidth: '100%' }}>
					<div>
						<img
							src={coverUrl} onError={(e) => { e.target.onerror = null; e.target.src = `https://eu.ui-avatars.com/api/?name=${title}` }}
							alt={`Portada de libro ${title} | Nevook`} width={200} height={300} />

					</div>
					<div className={styles.bookInfo} >
						<h2> {title} </h2>
						<h3> <span className={styles['span-title']}>Autor / Autora:</span> {authorName} </h3>
						<h3> <span className={styles['span-title']}>Género:</span> {genreName} </h3>
						<p>
							{
								truncate(sinopsis, 35)
							}
						</p>

					</div>
					<Link href={`/libro/${slug}`}>
						<a className={styles['button']} style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '1.4em', display: 'inline-block' }}> Leer más </a>
					</Link>
				</div>

			</article>

		</>
	)
}



