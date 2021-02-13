import Link from 'next/link'
import styles from './BookCollection.module.css'
import { useRouter } from 'next/router'
import { Button, Card, Image, Item, Label } from 'semantic-ui-react'


export default function BookCollection({ title, authorName, genreName, sinopsis, slug, coverUrl }) {
	const router = useRouter();

	const truncate = (string, maxWords) => {
		let array = string.split(" ");
		let wordCount = array.length;
		let stringFinal = array.splice(0, maxWords).join(" ");

		if (wordCount > maxWords) {
			stringFinal += "...";
		}

		return stringFinal;
	}


	return (
		<>
			<Item.Group divided>

				<Item>
					<Image src={coverUrl} wrapped size='small' alt={`Portada del libro ${title} | Nevook`} />

					<Item.Content>
						<Item.Header as='h2'>{title}</Item.Header>

						<h3 className={styles['authorName']} style={{ margin: '10px 0' }}>
							{authorName}
						</h3>
						<h3 className={styles['authorName']} style={{ margin: '10px 0' }}>
							{genreName}
						</h3>
						<Item.Description>{sinopsis && truncate(sinopsis, 35)}</Item.Description>
						<Item.Extra>
							<Link href={`libro/${slug}`}  >
								<a className='link' title={`${title}`}>Leer más</a>
							</Link>
						</Item.Extra>
					</Item.Content>
				</Item>

			</Item.Group>

		</>
	)
}



