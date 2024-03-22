import React from 'react'
import LeftNav from 'components/shared/LeftNav';
import PredictionNav from 'components/PredictionNav/PredictionNav';
import PredictionDisplay from 'components/shared/PredictionDisplay';
import styles from 'css/scene.module.scss';

export default function Prediction() {
    return (
        <div className={styles.main}>
            <LeftNav />
            <PredictionDisplay />
            <PredictionNav />
        </div>
    )
}
