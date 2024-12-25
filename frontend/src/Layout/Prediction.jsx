import React, { useState } from 'react'
import LeftNav from 'components/shared/LeftNav';
import PredictionNav from 'components/PredictionNav/PredictionNav';
// import PredictionDisplay from 'components/shared/PredictionDisplay';
import CesiumView from 'components/shared/CesiumView';
import styles from 'css/scene.module.scss';
import { Slider } from 'antd';


export default function Prediction() {
    const marks = {
        7: '3月',
        8: '6月',
        9: '9月',
    }
    const onChangeComplete = (value) => {
        if (value === 7) {
            window.model2.visible = false;
            window.model3.visible = false;
            window.model.visible = true;
        } else if (value === 8) {
            window.model.visible = false;
            window.model3.visible = false;
            window.model2.visible = true;
        } else if (value === 9) {
            window.model.visible = false;
            window.model2.visible = false;
            window.model3.visible = true;
        }
    }
    return (
        <div className={styles.main}>
            <LeftNav />
            {/* <PredictionDisplay /> */}
            <CesiumView />
            <PredictionNav />
            <Slider className={styles.sliderContainer} marks={marks} step={null} defaultValue={7} min={6} max={10} onChangeComplete={onChangeComplete} />
        </div>
    )
}
