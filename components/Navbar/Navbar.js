import Container from '../Container'
import Link from 'next/link'
import { useRouter } from 'next/router';

import style from './Navbar.module.css'

const Navbar = () => {
	const router = useRouter();
	const { pathname } = useRouter();

	console.log(router);
	return (
		<>
			<nav className={style.navbar}>
				<Container>
					<div className={style.navbarContent}>
						{
							pathname === '/'
								? <h1 style={{ color: 'white', fontSize: '2em', fontWeight: 'bold', textAlign: 'center' }}>  Nevook </h1>
								: <div style={{ color: 'white', fontSize: '2em', fontWeight: 'bold', textAlign: 'center' }}>  Nevook </div>
						}

						<div className={style.menu}>
							<ul>
								<li>
									<Link href="/">
										<a className={`${router.pathname === '/' ? 'active' : ''}`}>Inicio</a>
									</Link>
								</li>
								<li>
									<Link href="/buscar">
										<a className={`${router.pathname === '/buscar' ? 'active' : ''}`}>Búsqueda</a></Link>
								</li>
								<li>
									<Link href="/libro-no-encontrado">
										<a className={`${router.pathname === '/libro-no-encontrado' ? 'active' : ''}`}>¿No has encontrado un libro?</a>
									</Link>
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
