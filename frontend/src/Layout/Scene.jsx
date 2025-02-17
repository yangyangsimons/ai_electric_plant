import React,{useState} from 'react';
import LeftNav from 'components/shared/LeftNav';

import CesiumView from 'components/shared/CesiumView';
import styles from 'css/scene.module.scss';
import AveRate from 'components/Atmosphere/AveRate';
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
                {/* <Overview /> */}
                <AveRate />
                {/* <Portion /> */}
            </div>
            <div className={styles.rightContent}>
                {/* <Overview /> */}
                <AveRate />
                {/* <Portion /> */}
            </div>
            {showCesium && <CesiumView onContextLost = {handleContextLost}/>}
            {/* <ModelDisplay /> */}
        </div>
    )
}
