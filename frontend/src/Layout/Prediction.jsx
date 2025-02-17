import React, { useState } from 'react'
import LeftNav from 'components/shared/LeftNav';
import PredictionNav from 'components/PredictionNav/PredictionNav';
// import PredictionDisplay from 'components/shared/PredictionDisplay';
import CesiumView from 'components/shared/CesiumView';
import CesiumViewPhase2 from 'components/shared/CesiumViewPhase2';
import CesiumViewPhase3 from 'components/shared/CesiumViewPhase3';
import styles from 'css/scene.module.scss';
import { Slider } from 'antd';

export default function Prediction() {

    const [SliderValue, setSliderValue] = useState(7);

    const marks = {
        7: '7月',
        8: '6月',
        9: '9月',
    }
    const onChangeComplete = (value) => {
        setSliderValue(value);
    }
    return (
        <div className={styles.main}>
            <LeftNav />
            {/* <PredictionDisplay /> */}
            {SliderValue === 7 && < CesiumView />}
            {/* <CesiumViewPhase2 /> */}
           { SliderValue === 8 && <CesiumViewPhase3 />}
            <PredictionNav />
            <Slider className={styles.sliderContainer} marks={marks} step={null} defaultValue={7} min={6} max={10} onChangeComplete={onChangeComplete} />
        </div>
    )
}
