import Link from 'next/link'
import styles from './BookCollection.module.css'

import { useRouter } from 'next/router'



export default function BookCollection({ title, authorName, genreName, slug, coverUrl }) {
	const router = useRouter();
	return (
		<>
			<article className={styles.bookCollection}>
				<div className={styles.book} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', minWidth: '100%' }}>
					<div>
						<img
							src={coverUrl} onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/250x300" }}
							alt={`Portada de libro ${title} de ${authorName} en Nevook`} width={200} height={300} />
					</div>
					<div className={styles.bookInfo}>
						<div> {title} </div>
						<div> <span className={styles['span-title']}>Autor / Autora:</span> {authorName} </div>
						<div> <span className={styles['span-title']}>Género:</span> {genreName} </div>
					</div>
					<Link href={`/libro/${slug}`}>
						<a className={styles['button']}> Ver más información </a>
					</Link>
					{/* <div  onClick={() => router.push(`/book/${slug}`)}>Ver detalle</div> */}
				</div>
			</article>
		</>
	)
}



