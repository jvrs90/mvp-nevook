import PropsTypes from 'prop-types'
const { Picture, Heading, Spacer } = require("@josers/nevook-components")
import styles from './Book.module.css'

const Book = ({ title, author, genre, coverUrl, _id }) => {
	return (
		<>
			<div>
				HOla
			</div>
			<div className={styles.book}>
				<div className={styles.cover}>
					<img src={coverUrl} alt="" />
				</div>
				<div className={styles.info}>
					<Heading size="lg">{title}</Heading>
					<Spacer.Horizontal size='xs' />
					<Heading size="md">{author}</Heading>
					<Spacer.Horizontal size='xs' />
					<Heading size="md">{genre}</Heading>
				</div>
			</div>
		</>
	)
}
export default Book
