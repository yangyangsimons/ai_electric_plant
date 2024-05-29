import React, { useEffect, useRef } from 'react';

const ModelDisplay = () => {
    // 创建对div容器的引用
    const containerRef = useRef(null);

    useEffect(() => {
        // 检查容器是否已经挂载重新

        if (containerRef.current) {
            //if window.location.origin is http://localhost:3000
            //then baseUrl is http://localhost:5001
            let baseUrl = window.location.origin;
            if (window.location.origin === 'http://localhost:3000') {
                baseUrl = 'http://localhost:5001';
            }
            console.log(baseUrl)
            const viewer = new window.AMRT.Viewer('container', { offline: true });
            const path = `${baseUrl}/static/1763576691151736832_AMRT`;
            console.log(viewer.effectManager);
            setTimeout(() => {
                if (window.weatherCondition.includes('雨')) {
                    viewer.effectManager.addRain();
                }
            }, 5000);

            viewer.controls.autoRotate = true;
            viewer.largeSceneLoader2.load(path);

        }

    }, []);

    return <div id='container' ref={containerRef} style={{ width: '100%', height: '100%', position: 'absolute', left: 0, top: 0 }} />;
};

export default ModelDisplay;
