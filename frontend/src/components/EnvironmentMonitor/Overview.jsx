import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { setInfo } from 'stores/trafficInfoSlice';

import styles from 'css/EnvironmentOverview.module.scss';

export default function Overview() {
    // const info = useSelector((state) => state.trafficInfo);
    // const dispatch = useDispatch();

    // console.log(info);
    // useEffect(() => {
    //     const handleTrafficInfoChange = (event) => {
    //         const key = Object.keys(event.detail)[0];
    //         const value = event.detail[key];
    //         const newInfo = { ...info, [key]: value };
    //         // dispatch(setInfo(newInfo));

    //     };

    //     window.addEventListener('TrafficInfoChanged', handleTrafficInfoChange);
    // }, [info, dispatch]);

    return (
        <div className={styles.overview}>
            <div className={styles.title}>
                <span>环境参数</span>
            </div>
            <div className={styles.dataContainer}>
                <div className={styles.rowContainer}>
                    <div className={styles.dataItem}>
                        <span className={styles.description}>温度</span>
                        <span className={styles.number}>{18}<span className={styles.unit}>hpa</span></span>
                    </div>
                    <div className={styles.dataItem}>
                        <span className={styles.description}>风速</span>
                        <span className={styles.number}><span className={styles.unit}>m/s</span> {5} </span>
                    </div>
                </div>
                <div className={styles.rowContainer}>
                    <div className={styles.dataItem}>

                        <span className={styles.number}> {15}<span className={styles.unit}>km</span> </span>
                        <span className={styles.description}>能见度</span>
                    </div>
                    <div className={styles.dataItem}>

                        <span className={styles.number}><span className={styles.unit}>cm</span> {6} </span>
                        <span className={styles.description}>降水量</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
