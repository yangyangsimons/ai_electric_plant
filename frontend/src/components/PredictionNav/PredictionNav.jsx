import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import styles from 'css/predictionNav.module.scss';
import PredictionDrawer from 'components/PredictionDrawer/index';
import { Button, Drawer } from 'antd';
export default function Header() {
    const [open, setOpen] = useState(false);

    const screenShot = () => {
        const element = document.querySelector('canvas');
        console.log(element);
        html2canvas(element).then(canvas => {
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            link.download = 'image.png';
            link.click();
        });
        console.log('截图')

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
            <Drawer title="Basic Drawer" onClose={onClose} open={open}>
                <PredictionDrawer />
            </Drawer>
        </div>
    )
}