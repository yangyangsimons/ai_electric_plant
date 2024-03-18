import React from 'react'
import LeftNav from 'components/shared/LeftNav';
import Overview from './Overview/Overview';
import ModelDisplay from 'components/shared/ModelDisplay';
import styles from 'css/scene.module.scss';
import Curve from 'components/Curve/Curve';
import Portion from 'components/Portion/Portion';
export default function Scene() {
    return (
        <div className={styles.main}>
            <LeftNav />
            <div className={styles.rightContent}>
                <Overview />
                <Curve />
                <Portion />
            </div>

            <ModelDisplay />
        </div>
    )
}
