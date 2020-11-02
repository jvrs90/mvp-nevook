import styles from './Container.module.css'
import classNames from 'classnames'

const Container = ({ children, hasBackground }) => {
	return (
		<div className={classNames(styles.container, {
			[styles['hasBackground']]: hasBackground
		})}>
			{children}
		</div>
	)
}

export default Container
