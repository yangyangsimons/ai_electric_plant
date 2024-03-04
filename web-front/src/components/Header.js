import React from 'react';
import { Link } from 'react-router-dom';
import "../css/header.scss";
import Weather from 'components/container/Weather/Weather';
export default function Header() {
    return (
        <header className='header'>
            <ul className='nav-left'>
                <li><Link to='/plan'>规划预演</Link></li>
                <li><Link to='/junction'>路口优化</Link></li>
                <li><Link to='/'>自动驾驶</Link></li>
            </ul>
            <div className="title">
                <h2 className="title-1"> </h2>
            </div>
            <Weather />
            <div className="logo">
            </div>
        </header>
    )
}
