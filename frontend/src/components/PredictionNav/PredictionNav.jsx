import React, { useState } from 'react';
import styles from 'css/predictionNav.module.scss';
import PredictionDrawer from 'components/PredictionDrawer/index';
import { Button, Drawer } from 'antd';
import { useDispatch } from 'react-redux';
import { setImageSrc } from 'stores/screenShotSlice';
export default function PredictionNav() {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const screenShot = () => {
        const img = new Image();
        const imgSrc = window.AMRT.ScreenHelper.screenShot(window.viewer);
        dispatch(setImageSrc(imgSrc));
        //在新的窗口打开
        console.log("dispatch", imgSrc);

        showDrawer();

    }
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <div className={styles.container}>
            <ul className={styles.navLeft}>
                <li>
                    <Button type="primary" onClick={showDrawer}>
                        距离测量
                    </Button>
                </li>
                <li className={styles.prediction}>
                    <Button type="primary" onClick={screenShot}>
                        腐蚀预测
                    </Button>
                </li>
            </ul>
            <Drawer title="腐蚀检测" onClose={onClose} open={open}>
                <PredictionDrawer />
            </Drawer>
        </div>
    )
}