import React, { useEffect,useState } from 'react';
import * as echarts from 'echarts';
import styles from '../../../css/aveRate.module.scss';

export default function AveRate() {
    let baseUrl = window.location.origin;
    if (window.location.origin === 'http://localhost:3000') {
        baseUrl = 'http://localhost:5001';
    }
    const [groupedData, setGroupedData] = useState({});
     // 根据 id 对数组进行分组，并只保留 _time 和 _value
  const groupById = (dataArray) => {
    return dataArray.reduce((acc, item) => {
      const { id, _time, _value } = item;
      const newTime = _time.split('T')[0]
      const newValue = _value.toFixed(1);
    //   console.log(acc);
      if (!acc[id]) {
        acc[item.id] = [];
      }
      acc[item.id].push({
        time: newTime,
        value:newValue,
      });
      return acc;
    }, {});
  };
    useEffect(() => {
        fetch(`${baseUrl}/api/v1/influx/atmosphere/aveRate`)
        .then(res => res.json())
        .then((res) => {
            if (res.success && Array.isArray(res.data)) {
                console.log('请求数据成功:', res.data);
                const grouped = groupById(res.data);
                console.log('grouped',grouped);
                setGroupedData(grouped);
            }
          })
          .catch((error) => {
            console.error('请求数据出错:', error);
          });
    }, []);
    useEffect(() => {
       

        const aveRateChart = echarts.init(document.getElementById('aveRateContent'));
        console.log(document.getElementById('aveRateChart'));
        // // console.log('rendering');
        // const lineGraphOption = {
        //     title: {
        //         text: '单位：分钟',
        //         textStyle: { color: '#b2dbee', fontSize: 13, fontWeight: 'normal' },
        //         top: 10,
        //     },
        //     legend: {
        //         data: ['现状', '优化'],
        //         icon: 'pin',
        //         textStyle: { color: '#FFF' },
        //         right: 0,
        //         top: 10,
        //     },
        //     grid: {
        //         left: '1%',
        //         bottom: '3%',
        //         containLabel: true
        //     },
        //     xAxis: {
        //         type: 'category',
        //         boundaryGap: false,
        //         data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
        //         axisLine: { lineStyle: { color: '#FFF' } },
        //     },
        //     yAxis: {
        //         splitNumber: 4,
        //         axisLine: { lineStyle: { color: '#FFF' } },
        //         max: 50,
        //         type: 'value',
        //         splitLine: {
        //             show: false,
        //             lineStyle: {
        //                 color: '#777'  // Color of the horizontal grid lines
        //             }
        //         },
        //         splitArea: {
        //             show: true,
        //             areaStyle: {
        //                 color: ['rgba(56, 67, 87,0.7)', 'rgba(56, 67, 87,0.2)']
        //             }
        //         }

        //     },
        //     series: [
        //         {
        //             name: '现状',
        //             type: 'line',
        //             stack: 'total',
        //             smooth: true,
        //             color: 'rgb(251, 218, 115)',
        //             areaStyle: {
        //                 color: new echarts.graphic.LinearGradient(
        //                     0, 0, 0, 1,   // x1, y1, x2, y2 - defines the direction of the gradient
        //                     [
        //                         { offset: 0, color: 'rgb(251, 218, 115, 0.8)' },   // starting color
        //                         { offset: 1, color: 'rgb(251, 218, 115, 0.2)' }
        //                         // ending color
        //                     ]
        //                 ),
        //             },
        //             showSymbol: true,
        //             emphasis: {
        //                 focus: 'series'
        //             },
        //             data: randomCurrent
        //         },
        //         {
        //             name: '优化',
        //             type: 'line',
        //             stack: 'total',
        //             color: 'rgb(9, 121, 199)',
        //             showSymbol: true,
        //             smooth: true,
        //             areaStyle: {
        //                 color: new echarts.graphic.LinearGradient(
        //                     0, 0, 0, 1,   // x1, y1, x2, y2 - defines the direction of the gradient
        //                     [
        //                         { offset: 0, color: 'rgba(16, 45, 95, 0.8)' },   // starting color
        //                         { offset: 1, color: 'rgb(178, 219, 238, 0.3)' }
        //                         // ending color
        //                     ]
        //                 ),
        //             },
        //             emphasis: {
        //                 focus: 'series'
        //             },
        //             data: randomToday
        //         }
        //     ]
        // };

        // aveRateChart && aveRateChart.setOption(lineGraphOption);

    });

    return (
        <div className={styles.aveRate}>
            <div className={styles.title}>平均比率</div>
            <div className={styles.content} id="aveRateContent"></div>
        </div>
    )
}
