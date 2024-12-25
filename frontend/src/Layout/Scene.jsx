import React,{useState} from 'react';
import LeftNav from 'components/shared/LeftNav';
import Overview from './Overview/Overview';
import ModelDisplay from 'components/shared/ModelDisplay';
import CesiumView from 'components/shared/CesiumView';
import styles from 'css/scene.module.scss';
import Curve from 'components/Curve/Curve';
import Portion from 'components/Portion/Portion';
export default function Scene() {

    const  [showCesium, setShowCesium] = useState(true);

    const handleContextLost = () => {
        console.warn('WebGL context lost');
        setShowCesium(false);
        setTimeout(() => {
            setShowCesium(true);
        }, 1000);
    }
    return (
        <div className={styles.main}>
            <LeftNav />
            <div className={styles.rightContent}>
                <Overview />
                <Curve />
                <Portion />
            </div>
            {showCesium && <CesiumView onContextLost = {handleContextLost}/>}
            {/* <ModelDisplay /> */}
        </div>
    )
}
