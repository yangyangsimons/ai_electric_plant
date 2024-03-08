import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'css/leftNav.module.scss';
import EnvironmentMonitor from 'components/EnvironmentMonitor/Overview';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function Header() {
    return (
        <header className='header'>
            <ul className='nav-left'>
                <li><Link to='/monitor'>规划预演</Link></li>
                <li><Link to='/junction'>路口优化</Link></li>
                <li><Link to='/'>自动驾驶</Link></li>
            </ul>
            {/* <Routes>
                <Route path='/monitor' element={<EnvironmentMonitor />} />
                <Route path='/junction' element={<JunctionOptimization />} />
                <Route path='/' element={<AutonomousDriving />} />
            </Routes> */}
        </header>
    )
}