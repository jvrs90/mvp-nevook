

import styles from './Footer.module.css'

function Footer() {
	return (
		<>
			<footer className={styles['footer']}>
				<div style={{ color: 'white', fontSize: '2em', fontWeight: 'bold', textAlign: 'center', marginBottom: '10px' }}>  Nevook </div>
				Si tienes alguna sugerencia puede decírnoslo a través del siguiente correo electrónico{" "}
				<span>admin@nevook.com</span>
				<div className={styles['footer-message']}>
					<small>Tenemos muchas actualizaciones que ofreceros. Apóyanos compartiendo en redes sociales</small>
				</div>
				<div className={styles['footer-rrss']}>
					<a href='https://twitter.com/nevook' target='_blank'><img src="/twitter.svg" alt="Logo Twitter | Nevook" /></a>
					<a href='https://www.instagram.com/nevookapp/' target='_blank'><img src="/instagram.svg" alt="Logo Instagram | Nevook" /></a>
				</div>
				<div className={styles['footer-copy']}>
					© Nevook 2020. Todos los derechos reservados
				</div>
			</footer>
		</>
	);
}

export default Footer;