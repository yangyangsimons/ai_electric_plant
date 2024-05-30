import React from 'react'
import { Button, Drawer } from 'antd';
export default function Index() {
    //测量工具
    let measure3DTool = window.viewer.basicEditor.measure3DTool;
    //设置地心坐标（用于高度测量）x
    measure3DTool.earthsCoreVec = { x: 0, y: -6371393, z: 0 };
    //测量颜色
    measure3DTool.measureColor = '#FFFF00';
    //测量显示单位
    measure3DTool.measureUnit = 'm';
    //测量小数有效位数
    measure3DTool.measureDecimalPlaces = 2;

    //测量距离
    const measureDistance = () => {
        measure3DTool.distanceMeasure();
    }
    return (
        <div>
            <Button type="primary" onClick={measureDistance}>
                距离测量
            </Button>
        </div>
    )
}
