import React, { useState, useContext } from 'react';
import UsersContext from '../../context/users/UsersContext';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import logo from 'assets/img/logo.png';
import styles from 'css/navbar.module.scss';
export default function Navbar() {
    const [active, setActive] = useState('default');
    const { user } = useContext(UsersContext);
    const [current, setCurrent] = useState('mail');
    const items = [
        {
            label: 'Navigation One',
            key: 'mail',
        },
        {
            label: 'Navigation Two',
            key: 'app',
            disabled: true,
        }]
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    }
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
                    <Link to='/'>首页</Link>
                </li>
                <li>
                    <Link to='/'>场景</Link>
                </li>
            </ul>
            <div className={styles.user}>
                <Link to='/login'><button>登录</button></Link>
                <Link to='/register'><button>注册</button></Link>
            </div>
        </header>
    );
}