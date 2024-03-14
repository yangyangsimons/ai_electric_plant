import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'css/leftNav.module.scss';
import EnvironmentMonitor from 'components/EnvironmentMonitor/Overview';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function Header() {
    return (
        <header className={styles.header}>
            <ul className={styles.navLeft}>
                <li><Link to='/monitor'>实时监测</Link></li>
                <li><Link to='/junction'>重点预测</Link></li>
            </ul>
            {/* <Routes>
                <Route path='/monitor' element={<EnvironmentMonitor />} />
                <Route path='/junction' element={<JunctionOptimization />} />
                <Route path='/' element={<AutonomousDriving />} />
            </Routes> */}
        </header>
    )
}