import Weather from './Weather';
import { Link } from 'react-router-dom';
import logo from 'assets/img/logo.png';
import styles from 'css/navbar.module.scss';
export default function Navbar() {

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Link to='/'><img src={logo} alt="Logo" className={styles.logo} /></Link>
                <div className={styles.title}>
                    <h2 className="title-1">广东红海湾发电有限公司 </h2>
                </div>
            </div>
            <ul className={styles.menu}>
                <li>
                    <Link to='/'>登录</Link>
                </li>
                <li>
                    <Link to='/scene'>监测</Link>
                </li>
            </ul>
            <div className={styles.user}>
                <Weather />
            </div>
        </header>
    );
}