import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from 'css/predictionNav.module.scss';
import PredictionDrawer from 'components/PredictionDrawer/index';
import { Button, Drawer } from 'antd';
export default function Header() {
    const [open, setOpen] = useState(false);

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
                <li class={styles.prediction}>
                    <Button type="primary" onClick={showDrawer}>
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