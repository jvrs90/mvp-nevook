import Container from '../Container'
import Link from 'next/link'

import style from './Navbar.module.css'

const Navbar = () => {
	const showModal = () => {
		console.log('Modal')
	}
	return (
		<>
			<nav className={style.navbar}>
				<Container>
					<div className={style.navbarContent}>
						<div style={{ color: 'white', fontSize: '2em', fontWeight: 'bold', textAlign: 'center' }}>  Nevook </div>
						<div className={style.menu}>
							<ul>
								<li>
									<Link href="/">Inicio</Link>
								</li>
								<li>
									<Link href="/buscar">Búsqueda</Link>
								</li>
								<li>
									<Link href="/libro-no-encontrado">¿No has encontrado un libro?</Link>
								</li>
							</ul>
						</div>
					</div>
				</Container>
			</nav>
		</>
	)
}

export default Navbar
