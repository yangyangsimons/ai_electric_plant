import React from 'react'
import LeftNav from 'components/shared/LeftNav';
import Overview from './Overview/Overview';
import ModelDisplay from 'components/shared/ModelDisplay';
import styles from 'css/scene.module.scss';

export default function Scene() {
    return (
        <div className={styles.main}>
            <LeftNav />
            <div className={styles.rightContent}>
                <Overview />
            </div>

            <ModelDisplay />
        </div>
    )
}
