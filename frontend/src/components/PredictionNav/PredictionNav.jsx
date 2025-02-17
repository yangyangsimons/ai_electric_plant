import React, { useState } from 'react';
import styles from 'css/predictionNav.module.scss';
import PredictionDrawer from 'components/PredictionDrawer/index';
import MeasureDrawer from 'components/MeasureDrawer/index';
import { Button, Drawer } from 'antd';
import { useDispatch } from 'react-redux';
import { setImageSrc } from 'stores/screenShotSlice';
import {toggleMeasure} from 'stores/measureSlice';
import { Tooltip } from 'antd';

export default function PredictionNav() {



    const [preDictionOpen, setPredictionOpen] = useState(false);
    const [measureOpen, setMeasureOpen] = useState(false);
    const dispatch = useDispatch();

    const showPredictionDrawer = () => {
        setPredictionOpen(true);
    };
    const showMeasureDrawer = () => {
        // setMeasureOpen(true);
        // measureDistance();
    }
    const onClose = () => {
        setMeasureOpen(false);
        setPredictionOpen(false);
    };




    return (
        <div className={styles.container}>
            <ul className={styles.navLeft}>
                <li onClick={()=> dispatch(toggleMeasure())}>
                    <Tooltip title="测量两点之间的距离">
                        <Button type="primary" >
                            距离测量
                        </Button>
                    </Tooltip >
                </li>
                <li className={styles.prediction}>
                    <Button type="primary" >
                        腐蚀预测
                    </Button>
                </li>
            </ul>
            <Drawer title="腐蚀检测" onClose={onClose} open={preDictionOpen}>
                <PredictionDrawer />
            </Drawer>
            <Drawer title="距离测量" onClose={onClose} open={measureOpen} >
                <MeasureDrawer />
            </Drawer>
        </div>
    )
}