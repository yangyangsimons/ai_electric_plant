import React from 'react'
import LeftNav from 'components/shared/LeftNav';
import Overview from './Overview/Overview';
import ModelDisplay from 'components/shared/ModelDisplay';
import styles from 'css/scene.module.scss';
import Curve from 'components/Curve/Curve';
export default function Scene() {
    return (
        <div className={styles.main}>
            <LeftNav />
            <div className={styles.rightContent}>
                <Overview />
                <Curve />
            </div>

            <ModelDisplay />
        </div>
    )
}
