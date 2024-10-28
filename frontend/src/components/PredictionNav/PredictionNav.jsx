import React, { useState } from 'react';
import styles from 'css/predictionNav.module.scss';
import PredictionDrawer from 'components/PredictionDrawer/index';
import MeasureDrawer from 'components/MeasureDrawer/index';
import { Button, Drawer } from 'antd';
import { useDispatch } from 'react-redux';
import { setImageSrc } from 'stores/screenShotSlice';
import { Tooltip } from 'antd';

export default function PredictionNav() {


    //测量距离
    const measureDistance = () => {
        let measure3DTool = window.viewer.basicEditor.measure3DTool;
        //设置地心坐标（用于高度测量）x

        measure3DTool.earthsCoreVec = { x: 0, y: -6371393, z: 0 };
        //测量颜色
        measure3DTool.measureColor = '#FFFF00';
        //测量显示单位
        measure3DTool.measureUnit = 'm';
        //测量小数有效位数
        measure3DTool.measureDecimalPlaces = 2;
        measure3DTool.distanceMeasure();
    }

    const [preDictionOpen, setPredictionOpen] = useState(false);
    const [measureOpen, setMeasureOpen] = useState(false);
    const dispatch = useDispatch();
    const screenShot = () => {
        const imgSrc = window.AMRT.ScreenHelper.screenShot(window.viewer);
        dispatch(setImageSrc(imgSrc));
        //在新的窗口打开
        console.log("dispatch", imgSrc);

        showPredictionDrawer();

    }
    const showPredictionDrawer = () => {
        setPredictionOpen(true);
    };
    const showMeasureDrawer = () => {
        // setMeasureOpen(true);
        measureDistance();
    }
    const onClose = () => {
        setMeasureOpen(false);
        setPredictionOpen(false);
    };




    return (
        <div className={styles.container}>
            <ul className={styles.navLeft}>
                <li>
                    <Tooltip title="测量两点之间的距离">
                        <Button type="primary" onClick={measureDistance}>
                            距离测量
                        </Button>
                    </Tooltip >
                </li>
                <li className={styles.prediction}>
                    <Button type="primary" onClick={screenShot}>
                        腐蚀预测
                    </Button>
                </li>
            </ul>
            <Drawer title="腐蚀检测" onClose={onClose} open={preDictionOpen}>
                <PredictionDrawer />
            </Drawer>
            <Drawer title="距离测量" onClose={onClose} open={measureOpen}>
                <MeasureDrawer />
            </Drawer>
        </div>
    )
}